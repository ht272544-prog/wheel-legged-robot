import fs from "node:fs/promises";

const endpoint = process.argv[2] || "http://127.0.0.1:9228";
const site = process.argv[3] || "http://127.0.0.1:4176/index.html#briefing-top";
const out = new URL("../qa/briefing/", import.meta.url);
await fs.mkdir(out, { recursive: true });
let page;
for (let i = 0; i < 80; i++) {
  try {
    const pages = await (await fetch(`${endpoint}/json`)).json();
    page = pages.find(item => item.type === "page");
    if (page) break;
  } catch {}
  await new Promise(resolve => setTimeout(resolve, 200));
}
if (!page) throw new Error("Chrome endpoint unavailable");
const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 1;
const pending = new Map();
const consoleErrors = [];
const failedRequests = [];
socket.addEventListener("message", event => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const task = pending.get(message.id); pending.delete(message.id);
    message.error ? task.reject(new Error(message.error.message)) : task.resolve(message.result);
  }
  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") consoleErrors.push(message.params.args.map(arg => arg.value || arg.description).join(" "));
  if (message.method === "Network.loadingFailed" && message.params.type !== "Document") failedRequests.push(message.params.errorText);
});
const command = (method, params = {}) => new Promise((resolve, reject) => { const callId = id++; pending.set(callId, { resolve, reject }); socket.send(JSON.stringify({ id: callId, method, params })); });
const evaluate = async expression => {
  const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
};
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const viewport = async (width, height) => { await command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: false }); await wait(200); };
const screenshot = async name => { const image = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }); await fs.writeFile(new URL(`${name}.png`, out), Buffer.from(image.data, "base64")); };

await command("Page.enable");
await command("Runtime.enable");
await command("Network.enable");
await viewport(1920, 1080);
await command("Page.navigate", { url: `${site.split("#")[0]}?qa=${Date.now()}#briefing-top` });
await wait(4500);

const report = {};
report.boot = await evaluate(`(()=>{const f=document.querySelector('#briefingFrame').getBoundingClientRect();return{view:document.body.dataset.view,slides:document.querySelectorAll('.briefing-slide').length,start:!document.querySelector('#briefingStart').hidden,frame:{w:f.width,h:f.height,ratio:+(f.width/f.height).toFixed(4)},pageScroll:document.documentElement.scrollHeight-innerHeight,forbidden:/作业要求|完成作业|课程作业|交互演示|15 分钟|点击查看|点击切换|点击风险/.test(document.querySelector('#briefing-top').innerText)}})()`);
await screenshot("00-start-1920");
await evaluate(`document.querySelector('[data-action="start"]').click()`);
await wait(600);
report.cover = await evaluate(`(()=>{const img=document.querySelector('.rebuilt-cover img');const r=img.getBoundingClientRect(),f=document.querySelector('#briefingFrame').getBoundingClientRect();return{loaded:img.complete&&img.naturalWidth>0,natural:[img.naturalWidth,img.naturalHeight],inside:r.left>=f.left&&r.top>=f.top&&r.right<=f.right&&r.bottom<=f.bottom,credit:document.querySelector('.cover-model-credit').textContent.trim(),active:[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active'))}})()`);
await screenshot("01-cover-1920");
await evaluate(`document.querySelector('[data-action="next"]').click()`);
await wait(500);
report.map = await evaluate(`({active:[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active')),nodes:document.querySelectorAll('.mission-node').length,labels:[...document.querySelectorAll('.mission-node b')].map(x=>x.textContent)})`);
await screenshot("02-map-1920");
await evaluate(`document.querySelector('[data-goto="4"]').click()`);
await wait(350);
await screenshot("02a-sos-1920");
await evaluate(`document.querySelector('[data-goto="8"]').click()`);
await wait(350);
await screenshot("02b-modules-1920");
await evaluate(`document.querySelector('[data-goto="2"]').click()`);
await wait(500);
await screenshot("03-system-visual-1920");
await evaluate(`document.querySelector('[data-action="map"]').click();document.querySelector('[data-goto="16"]').click()`);
await wait(400);
await screenshot("04-syrs-1920");
await evaluate(`document.querySelector('[data-action="next"]').click();document.querySelector('[data-action="next"]').click();document.querySelector('[data-arch="physical"]').click();document.querySelector('[data-arch-view="physical"] [data-arch-node]:nth-of-type(3)').click()`);
await wait(400);
report.architecture = await evaluate(`({active:[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active')),tab:document.querySelector('[data-arch].active').textContent.trim(),view:document.querySelector('.arch-network-view.active').dataset.archView,detail:document.querySelector('#archInspector h3').textContent.trim()})`);
await screenshot("05-architecture-1920");
await evaluate(`document.querySelector('[data-action="map"]').click();document.querySelector('[data-goto="21"]').click();document.querySelector('[data-action="next"]').click()`);
await wait(400);
await screenshot("06-odc-1920");
await evaluate(`document.querySelector('[data-action="next"]').click();document.querySelector('[data-element="2"]').click()`);
await wait(400);
report.terrain = await evaluate(`({active:[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active')),mode:document.querySelector('#briefing-top [data-element].active').textContent.trim(),readout:document.querySelector('#elementReadout h3').textContent.trim()})`);
await screenshot("07-terrain-1920");
await evaluate(`document.querySelector('[data-action="next"]').click();document.querySelector('[data-action="next"]').click();document.querySelector('[data-action="next"]').click();document.querySelector('#briefing-top [data-risk="3"]').click()`);
report.risk = await evaluate(`({active:[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active')),selected:document.querySelector('#briefing-top [data-risk].active').textContent.trim(),detail:document.querySelector('#riskReadout h3').textContent.trim(),codes:[...document.querySelectorAll('#briefing-top [data-risk]')].map(x=>x.textContent.trim())})`);
await wait(500);
await screenshot("08-risk-console-1920");
await evaluate(`document.querySelector('.briefing-nav [data-action="map"]').click()`);
report.returnMap = await evaluate(`[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active'))`);
report.layout1920 = await evaluate(`(()=>{const slides=[...document.querySelectorAll('.briefing-slide')];const frame=document.querySelector('#briefingFrame').getBoundingClientRect();const nav=document.querySelector('.briefing-nav').getBoundingClientRect();return{overflow:slides.map((s,i)=>({i,x:s.scrollWidth-s.clientWidth,y:s.scrollHeight-s.clientHeight})).filter(v=>v.x>1||v.y>1),minBody:Math.min(...[...document.querySelectorAll('.briefing-slide p,.briefing-slide li')].map(e=>parseFloat(getComputedStyle(e).fontSize))),bodyOverflow:document.documentElement.scrollWidth-innerWidth,frameBottom:frame.bottom,navTop:nav.top}})()`);

await viewport(1366, 768);
await wait(400);
report.layout1366 = await evaluate(`(()=>{const f=document.querySelector('#briefingFrame').getBoundingClientRect();const slides=[...document.querySelectorAll('.briefing-slide')];return{frame:{w:f.width,h:f.height,ratio:+(f.width/f.height).toFixed(4)},pageScroll:document.documentElement.scrollHeight-innerHeight,overflow:slides.map((s,i)=>({i,x:s.scrollWidth-s.clientWidth,y:s.scrollHeight-s.clientHeight})).filter(v=>v.x>1||v.y>1)}})()`);
await screenshot("09-map-1366");
await evaluate(`document.querySelector('[data-goto="27"]').click()`);
await wait(300);
await screenshot("10-debrief-1366");
await evaluate(`document.querySelector('[data-action="next"]').click()`);
await wait(300);
report.evidence = await evaluate(`({active:[...document.querySelectorAll('.briefing-slide')].findIndex(x=>x.classList.contains('is-active')),title:document.querySelector('.briefing-slide.is-active h2').textContent.trim(),figures:document.querySelectorAll('.briefing-slide.is-active img').length})`);
await screenshot("11-evidence-1366");
await evaluate(`document.querySelector('[data-goto="32"]').click()`);
await wait(300);
await screenshot("12-comprehensive-1366");
await evaluate(`document.querySelector('[data-goto="33"]').click()`);
await wait(300);
await screenshot("13-roadmap-1366");
await evaluate(`for(let i=0;i<2;i++)document.querySelector('[data-action="next"]').click()`);
await wait(300);
await screenshot("14-thanks-1366");
report.controls = await evaluate(`({prev:!!document.querySelector('[data-action="prev"]'),map:!!document.querySelector('.briefing-nav [data-action="map"]'),next:!!document.querySelector('[data-action="next"]'),fullscreen:!!document.querySelector('[data-action="fullscreen"]'),print:!!document.querySelector('[data-action="print"]'),legacy:!!document.querySelector('[data-action="laser"],[data-action="sources"],[data-action="replay"]')})`);
report.allSlides = await evaluate(`(async()=>{document.querySelector('#briefing-top [data-action="map"]').click();document.querySelector('#briefing-top [data-action="prev"]').click();const out=[];for(let i=0;i<document.querySelectorAll('#briefing-top .briefing-slide').length;i++){await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));const s=document.querySelector('#briefing-top .briefing-slide.is-active'),sr=s.getBoundingClientRect();const bad=[...s.querySelectorAll('h1,h2,h3,p,b,span,small,em,figcaption,button,img')].filter(x=>{const r=x.getBoundingClientRect();if(r.width<1||r.height<1)return false;return r.left<sr.left-2||r.right>sr.right+2||r.top<sr.top-2||r.bottom>sr.bottom+2}).map(x=>({tag:x.tagName,cls:x.className||'',text:(x.textContent||x.alt||'').trim().slice(0,30)}));const imgs=[...s.querySelectorAll('img')].map(x=>({ok:x.complete&&x.naturalWidth>0,natural:[x.naturalWidth,x.naturalHeight],fit:getComputedStyle(x).objectFit}));const pairs=[['.structured-heading','.structured-body'],['.module-wall','.module-interface'],['.conclusion-grid','.conclusion-closing']].map(([a,b])=>{const x=s.querySelector(a),y=s.querySelector(b);if(!x||!y)return null;const xr=x.getBoundingClientRect(),yr=y.getBoundingClientRect();return {a,b,overlap:Math.max(0,Math.min(xr.right,yr.right)-Math.max(xr.left,yr.left))*Math.max(0,Math.min(xr.bottom,yr.bottom)-Math.max(xr.top,yr.top))}}).filter(Boolean).filter(x=>x.overlap>1);out.push({i,title:(s.querySelector('h1,h2')?.textContent||s.querySelector('.briefing-kicker')?.textContent||'封面').trim(),scroll:[s.scrollWidth-s.clientWidth,s.scrollHeight-s.clientHeight],clipped:bad,overlaps:pairs,images:imgs});document.querySelector('#briefing-top [data-action="next"]').click()}return out})()`);
await command("Emulation.setEmulatedMedia",{media:"print"});
report.print = await evaluate(`(()=>{document.body.classList.add('print-briefing');const slides=[...document.querySelectorAll('.briefing-slide')];return{slides:slides.length,visible:slides.filter(x=>getComputedStyle(x).display!=='none'&&getComputedStyle(x).visibility!=='hidden').length,size:slides.slice(0,3).map(x=>[Math.round(x.getBoundingClientRect().width),Math.round(x.getBoundingClientRect().height)]),nav:getComputedStyle(document.querySelector('.briefing-nav')).display}})()`);
await command("Emulation.setEmulatedMedia",{media:"screen"});
report.consoleErrors = consoleErrors;
report.failedRequests = failedRequests;
await fs.writeFile(new URL("report.json", out), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
socket.close();
