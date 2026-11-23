import fs from "node:fs/promises";

const endpoint = process.argv[2] || "http://127.0.0.1:9222";
const site = process.argv[3] || "http://127.0.0.1:4173/index.html#top";
const outputDir = new URL("../qa/", import.meta.url);
await fs.mkdir(outputDir, { recursive: true });

for (let attempt = 0; attempt < 30; attempt += 1) {
  try {
    const response = await fetch(`${endpoint}/json`);
    const pages = await response.json();
    const page = pages.find(item => item.type === "page");
    if (page) {
      globalThis.pageInfo = page;
      break;
    }
  } catch {}
  await new Promise(resolve => setTimeout(resolve, 250));
}
if (!globalThis.pageInfo) throw new Error("Chrome DevTools endpoint unavailable");

const socket = new WebSocket(globalThis.pageInfo.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let nextId = 1;
const pending = new Map();
socket.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});
function command(method, params = {}) {
  const id = nextId++;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}
async function evaluate(expression) {
  const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Runtime evaluation failed");
  return result.result.value;
}
async function wait(ms = 400) { await new Promise(resolve => setTimeout(resolve, ms)); }
async function viewport(width, height) {
  await command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 });
  await wait(250);
}
async function screenshot(name) {
  const result = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  await fs.writeFile(new URL(`${name}.png`, outputDir), Buffer.from(result.data, "base64"));
}

await command("Page.enable");
await command("Runtime.enable");
await viewport(1440, 900);
await command("Page.navigate", { url: site });
await wait(1600);

const checks = {};
checks.initial = await evaluate(`(() => ({
  title: document.title,
  view: document.body.dataset.view,
  cards: document.querySelectorAll('.assignment-card').length,
  imagesLoaded: [...document.images].every(img => img.complete && img.naturalWidth > 0),
  overflow: document.documentElement.scrollWidth - innerWidth,
  oldCopy: document.body.innerText.includes('答辩模式') || document.body.innerText.includes('作业 01'),
  offenders: [...document.querySelectorAll('*')].map(el=>({el,r:el.getBoundingClientRect()})).filter(x=>getComputedStyle(x.el).display!=='none'&&(x.r.right>innerWidth+1||x.r.left<-1)).slice(0,12).map(x=>({tag:x.el.tagName,cls:x.el.className,id:x.el.id,left:Math.round(x.r.left),right:Math.round(x.r.right),width:Math.round(x.r.width)})),
  unloadedVisible: [...document.images].filter(img=>getComputedStyle(img).display!=='none'&&!img.loading&&(!img.complete||!img.naturalWidth)).map(img=>img.getAttribute('src'))
}))()`);
await screenshot("01-home-1440");

await evaluate(`document.querySelector('[data-view-target="module1"]').click()`); await wait(700);
checks.module1 = await evaluate(`({view:document.body.dataset.view,hero:!!document.querySelector('.hero-platform-image'),hotspots:document.querySelectorAll('.platform-hotspot').length,overflow:document.documentElement.scrollWidth-innerWidth})`);
await screenshot("02-explore-1440");

await evaluate(`document.querySelector('[data-view-target="module2"]').click()`); await wait(650);
checks.module2 = await evaluate(`({view:document.body.dataset.view,scenario:!!document.querySelector('.scenario-visual img'),requirements:document.querySelectorAll('#strsTableBody tr').length})`);
await screenshot("03-define-1440");

await evaluate(`document.querySelector('[data-view-target="module3"]').click()`); await wait(800);
checks.module3 = await evaluate(`({view:document.body.dataset.view,archLines:document.querySelectorAll('#architectureLines line').length,traceSteps:document.querySelectorAll('[data-trace-step]').length,overflow:document.documentElement.scrollWidth-innerWidth})`);
await screenshot("04-architect-1440");

await evaluate(`document.querySelector('#a3-architecture').scrollIntoView(); document.querySelector('[data-arch-node="safety"]').click()`); await wait(500);
checks.architecture = await evaluate(`({detail:document.querySelector('#architectureDetail h3').textContent,lines:[...document.querySelectorAll('#architectureLines line')].every(line=>[...line.attributes].filter(a=>/^x|^y/.test(a.name)).every(a=>Number.isFinite(Number(a.value))))})`);
await screenshot("05-architecture-map-1440");

await evaluate(`document.querySelector('#a3-control').scrollIntoView(); document.querySelector('[data-safety-scenario="comms"]').click()`); await wait(450);
checks.safety = await evaluate(`({title:document.querySelector('#safetyState h3').textContent,active:document.querySelectorAll('#controlFlow article.active').length})`);
await screenshot("06-safety-comms-1440");

await evaluate(`document.querySelector('#presentationButton').click()`); await wait(900);
checks.presentationEnter = await evaluate(`({active:document.body.classList.contains('presentation-active'),slide:document.querySelector('#presentationStage>section')?.id,controls:document.querySelectorAll('.presentation-controls button').length})`);
await screenshot("07-presentation-1440");
await evaluate(`document.querySelector('#presentationNext').click()`); await wait(650);
checks.presentationNext = await evaluate(`({progress:document.querySelector('#presentationProgressText').textContent,slide:document.querySelector('#presentationStage>section')?.id})`);
await evaluate(`document.querySelector('#presentationAutoplay').click()`); await wait(150); checks.autoplay = await evaluate(`document.querySelector('#presentationAutoplay').getAttribute('aria-pressed')`);
await evaluate(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}))`); await wait(650);
checks.presentationExit = await evaluate(`({active:document.body.classList.contains('presentation-active'),view:document.body.dataset.view,button:document.querySelector('#presentationButton').innerText.trim()})`);

await evaluate(`document.querySelector('[data-view-target="game"]').click()`); await wait(650);
checks.game = await evaluate(`({view:document.body.dataset.view,canvas:!!document.querySelector('#gameCanvas'),questionCount:Object.values(compactQuestions).reduce((n,q)=>n+q.length,0)})`);
await evaluate(`document.querySelector('#gameStartButton').click()`); await wait(250);
checks.gamePhysics = await evaluate(`(() => {
  wlxGame.paused=true;
  const startX=wlxGame.player.x;
  wlxGame.keys.add('d');
  for(let i=0;i<90;i++) wlxGame.update(1/60);
  wlxGame.keys.delete('d');
  const moved=wlxGame.player.x>startX+40;
  const stableGround=wlxGame.player.y+wlxGame.player.h<=481;
  wlxGame.player.x=wlxGame.gates[0].x-wlxGame.player.w-20;
  wlxGame.paused=false;
  wlxGame.interact();
  const questionPaused=!document.querySelector('#gameQuestion').hidden&&wlxGame.paused;
  const correct=wlxGame.currentQuestion.shuffledAnswer;
  document.querySelector('input[name="game-answer"][value="'+correct+'"]').checked=true;
  wlxGame.submitAnswer();
  const gateUnlocked=wlxGame.gates[0].unlocked;
  return {moved,stableGround,questionPaused,gateUnlocked};
})()`);
await screenshot("08-game-1440");
await evaluate(`document.querySelector('#gameContinue').click(); wlxGame.paused=true`);

for (const [name, width, height] of [["tablet",768,1024],["mobile",390,844],["mobile-small",375,812]]) {
  await viewport(width, height);
  await evaluate(`document.querySelector('[data-view-target="hub"]').click()`); await wait(500);
  checks[name] = await evaluate(`({width:innerWidth,overflow:document.documentElement.scrollWidth-innerWidth,cards:document.querySelectorAll('.assignment-card').length,visibleCards:[...document.querySelectorAll('.assignment-card')].filter(x=>getComputedStyle(x).display!=='none').length})`);
  await screenshot(`09-${name}-home`);
  await evaluate(`document.querySelector('[data-view-target="module3"]').click(); document.querySelector('#a3-architecture').scrollIntoView()`); await wait(600);
  checks[`${name}Architecture`] = await evaluate(`({overflow:document.documentElement.scrollWidth-innerWidth,lines:document.querySelectorAll('#architectureLines line').length,mapHeight:Math.round(document.querySelector('#architectureMap').getBoundingClientRect().height)})`);
  await screenshot(`10-${name}-architecture`);
}

await fs.writeFile(new URL("results.json", outputDir), JSON.stringify(checks, null, 2), "utf8");
socket.close();
console.log(JSON.stringify(checks, null, 2));
