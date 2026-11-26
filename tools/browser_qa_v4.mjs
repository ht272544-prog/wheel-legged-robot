import fs from "node:fs/promises";

const endpoint = process.argv[2] || "http://127.0.0.1:9226";
const site = process.argv[3] || "http://127.0.0.1:4174/index.html#module4-top";
const out = new URL("../qa/v4/", import.meta.url);
await fs.mkdir(out, { recursive: true });
let page;
for (let i = 0; i < 60; i++) {
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
  if (message.method === "Network.loadingFailed") failedRequests.push(message.params.errorText);
});
const command = (method, params = {}) => new Promise((resolve, reject) => { const callId = id++; pending.set(callId, { resolve, reject }); socket.send(JSON.stringify({ id: callId, method, params })); });
const evaluate = async expression => {
  const result = await command("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
};
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const viewport = async (width, height) => { await command("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 600 }); await wait(250); };
const screenshot = async name => { const image = await command("Page.captureScreenshot", { format: "png", captureBeyondViewport: false }); await fs.writeFile(new URL(`${name}.png`, out), Buffer.from(image.data, "base64")); };

await command("Page.enable");
await command("Runtime.enable");
await command("Network.enable");
await viewport(1440, 1000);
await command("Page.navigate", { url: `${site.split("#")[0]}?qa=${Date.now()}#module4-top` });
await wait(5000);
const report = {};
report.boot = await evaluate(`({view:document.body.dataset.view,title:document.title,sections:['module4-top','a4-hierarchy','a4-elements','a4-odc','a4-case','a4-risks'].every(id=>!!document.getElementById(id)),nav:!!document.querySelector('[data-view-target="module4"]'),card:!!document.querySelector('[data-open-view="module4"]'),metaLanguage:/作业|老师要求|完成作业|按作业内容|用户提供|可提交/.test(document.body.innerText)})`);
await evaluate(`scrollTo(0,0)`);
await wait(300);
await screenshot("desktop-hero");
await evaluate(`(async()=>{for(const img of document.querySelectorAll('.module-four img')){img.scrollIntoView({block:'center'});await new Promise(resolve=>setTimeout(resolve,500));}document.querySelector('#module4-top').scrollIntoView();await new Promise(resolve=>setTimeout(resolve,500));return true;})()`);
report.content = await evaluate(`({branches:document.querySelectorAll('[data-tree-branch]').length,elements:document.querySelectorAll('#a4-elements [data-element]').length,odcRows:document.querySelectorAll('[data-odc-row]').length,phases:document.querySelectorAll('[data-phase]').length,risks:document.querySelectorAll('[data-risk]').length,images:[...document.querySelectorAll('.module-four img')].map(img=>({src:img.getAttribute('src'),loaded:img.complete&&img.naturalWidth>0,w:img.naturalWidth}))})`);
await evaluate(`document.querySelector('#a4-elements').scrollIntoView({block:'start'})`);
await wait(500);
await screenshot("desktop-elements");
report.typography = await evaluate(`(()=>{const px=s=>parseFloat(getComputedStyle(document.querySelector(s)).fontSize);return{display:px('#module4-top h1'),section:px('#a4-hierarchy h2'),body:px('#a4-hierarchy p'),card:px('#a4-hierarchy .a4-detail h3'),rail:[...document.querySelectorAll('.process-rail.module-four b')].map(e=>parseFloat(getComputedStyle(e).fontSize))};})()`);
report.interactions = await evaluate(`(()=>{document.querySelector('[data-element="A5"]').click();const element=document.querySelector('#elementDetail h3').textContent;document.querySelector('[data-condition-key="terrain"][data-condition-value="blocked"]').click();const condition=document.querySelector('#conditionResult>b').textContent;document.querySelector('[data-phase="SCN-05"]').click();const phase=document.querySelector('#stageDetail h3').textContent;document.querySelector('[data-risk="RS-003"]').click();const risk=document.querySelector('#riskDetail h3').textContent;return{element,condition,phase,risk};})()`);
report.desktop = await evaluate(`({overflow:document.documentElement.scrollWidth-innerWidth,visible:document.querySelector('#module4-top').offsetParent!==null})`);
await screenshot("desktop-module4");
await viewport(390, 844);
report.mobile = await evaluate(`({overflow:document.documentElement.scrollWidth-innerWidth,navOverflow:document.querySelector('.assignment-switch').scrollWidth-document.querySelector('.assignment-switch').clientWidth,bodySize:parseFloat(getComputedStyle(document.querySelector('#a4-hierarchy p')).fontSize),visible:document.querySelector('#module4-top').offsetParent!==null})`);
await screenshot("mobile-module4");
report.consoleErrors = consoleErrors;
report.failedRequests = failedRequests;
await fs.writeFile(new URL("report.json", out), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
socket.close();
