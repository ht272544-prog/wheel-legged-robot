/* WL-X scenario and risk analysis module. */
(() => {
  "use strict";
  const S = window.WLX_SCENARIO_DATA;
  const O = window.WLX_ODC_DATA;
  const R = window.WLX_RISK_DATA;
  if (!S || !O || !R) return;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const join = (items, separator = " · ") => items.map(esc).join(separator);
  const head = (number, code, label, title, summary) => `<header class="v3-head a4-head"><div class="v3-code"><span>${number}</span><small>${code}</small></div><div><p class="overline">${label}</p><h2>${title}</h2></div><p class="v3-summary">${summary}</p></header>`;

  const elementButtons = S.hierarchy.flatMap(branch => branch.children.map(item => `<button type="button" class="a4-leaf" data-element="${item.id}"><i>${item.icon}</i><span>${item.id}</span><b>${item.name}</b><small>${item.en}</small></button>`)).join("");
  const treeBranches = S.hierarchy.map(branch => `<section class="a4-tree-branch" data-tree-branch="${branch.id}"><button type="button" class="a4-branch-node" data-branch="${branch.id}"><span>${branch.id}</span><b>${branch.name}</b><small>${branch.en}</small></button><div class="a4-tree-leaves">${branch.children.map(item => `<button type="button" class="a4-leaf" data-element="${item.id}"><i>${item.icon}</i><span>${item.id}</span><b>${item.name}</b><small>${item.en}</small></button>`).join("")}</div></section>`).join("");
  const odcRows = O.conditions.map(item => `<tr data-odc-row="${item.id}"><td><button class="id-link" type="button" data-odc="${item.id}">${item.id}</button><small>${item.group}</small></td><td><b>${item.name}</b><br>${item.normal}</td><td>${item.monitor}</td><td>${item.response}</td></tr>`).join("");
  const selectorGroups = O.selectors.map((group, groupIndex) => `<fieldset class="a4-condition-group"><legend><span>${String(groupIndex + 1).padStart(2, "0")}</span>${group.label}</legend><div>${group.options.map((option, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-condition-key="${group.key}" data-condition-value="${option.value}">${option.label}</button>`).join("")}</div></fieldset>`).join("");
  const phaseButtons = S.phases.map((phase, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-phase="${phase.id}"><span>${phase.no}</span><b>${phase.title}</b><small>${phase.location}</small></button>`).join("");
  const riskButtons = R.map((risk, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-risk="${risk.id}"><span>${risk.id}</span><b>${risk.name}</b><small class="risk-${risk.level}">${risk.level}风险 · S${risk.severity} / L${risk.likelihood}</small></button>`).join("");
  const riskRows = R.map(risk => `<tr data-risk-row="${risk.id}"><td><button class="id-link" type="button" data-risk-open="${risk.id}">${risk.id}</button></td><td><b>${risk.name}</b><br><small>${risk.source}</small></td><td>${risk.trigger}</td><td>${risk.hazard}</td><td><span class="risk-pill risk-${risk.level}">${risk.level}</span></td><td>${join(risk.req)}</td></tr>`).join("");

  $("#module4-top").innerHTML = `<div class="chapter-shell v3-hero-grid"><div><div class="kicker"><span></span>SYSTEMS ENGINEERING / ANALYZE</div><p class="v3-index">04 / SCENARIO & RISK</p><h1>从运行环境<br><em>走到安全边界</em></h1><p class="v3-lead">把外部环境、人员状态与平台状态放入同一运行条件模型，再用典型任务线程识别异常演化、风险场景和系统级安全约束。</p><div class="hero-actions"><a class="primary-action" href="#a4-hierarchy">进入分析链路</a><button class="secondary-action text-button" type="button" data-v4-present="module4">启动演示</button></div></div><div class="a4-hero-visual"><img src="assets/scenarios/wlx-scenario-hero-v2.png" alt="完整展示 WL-X 平台及外部环境、人员状态和平台状态三类运行条件" width="1122" height="1434"><div class="a4-hero-metrics"><span><b>03</b>条件域</span><span><b>11</b>要素族</span><span><b>12</b>ODC 条件</span><span><b>09</b>风险场景</span></div></div></div>`;

  $("#a4-hierarchy").innerHTML = `<div class="chapter-shell">${head("01", "LAYERS", "SCENARIO LAYERING", "先分清条件域，<br>再描述具体场景。", "运行设计条件由外部运行环境、人员状态和平台状态共同构成；条件组合随任务阶段变化，形成可判定、可追溯的场景状态。")}
    <div class="a4-tree-toolbar"><div><button type="button" data-tree-zoom="in">放大</button><button type="button" data-tree-zoom="out">缩小</button><button type="button" data-tree-zoom="reset">复位</button></div><p>点击任一分支或叶节点，查看定义、条件与风险追溯。</p></div>
    <div class="a4-tree-workbench"><div class="a4-tree-viewport" id="a4TreeViewport"><div class="a4-tree-canvas" id="a4TreeCanvas"><button type="button" class="a4-root-node" data-root><span>WL-X</span><b>运行设计条件</b><small>OPERATIONAL DESIGN CONDITIONS</small></button><div class="a4-tree-trunks">${treeBranches}</div></div></div><aside class="a4-detail" id="hierarchyDetail"><span>ODC / ROOT</span><h3>三类条件共同决定平台能否运行</h3><p>外部环境回答“在哪里运行”，人员状态回答“谁在监督与保障”，平台状态回答“系统当前是否具备能力”。</p><dl><div><dt>运行判定</dt><dd>正常 / 受限 / 暂停 / 安全状态</dd></div><div><dt>下游证据</dt><dd>典型场景、风险场景与安全需求</dd></div></dl></aside></div>
  </div>`;

  $("#a4-elements").innerHTML = `<div class="chapter-shell">${head("02", "ELEMENTS", "SCENARIO ELEMENTS", "十一类要素，<br>覆盖环境、人和平台。", "每类要素均明确可观察取值、平台行为影响、关联 ODC 条件和风险场景，构成统一的场景分析基线。")}
    <div class="a4-elements-overview"><figure><img src="assets/scenarios/wlx-scenario-hero-v2.png" alt="WL-X 平台与外部环境、人员状态、平台状态三类场景要素" width="1122" height="1434" loading="lazy"></figure><div class="a4-element-picker">${elementButtons}</div></div>
    <article class="a4-element-detail" id="elementDetail" aria-live="polite"></article>
  </div>`;

  $("#a4-odc").innerHTML = `<div class="chapter-shell">${head("03", "ODC", "OPERATIONAL DESIGN CONDITIONS", "定义可运行条件，<br>也定义退出条件。", "ODD 描述外部环境域；ODC 在此基础上纳入人员与平台状态。每项条件同时规定正常范围、监测量与越界响应。")}
    <div class="a4-concept-grid"><article><span>ODD</span><h3>外部运行环境</h3><p>地形、设施、参与者、天气与数字信息环境。</p></article><i>+</i><article><span>PERSONNEL</span><h3>人员状态</h3><p>在岗、授权、态势理解、接管和现场隔离状态。</p></article><i>+</i><article><span>PLATFORM</span><h3>平台状态</h3><p>驱动、感知、能源、自治与独立安全链健康状态。</p></article><i>=</i><article class="selected"><span>ODC</span><h3>运行设计条件</h3><p>决定正常、受限、暂停或进入安全状态。</p></article></div>
    <figure class="a4-wide-figure"><img src="assets/scenarios/wlx-odc-dashboard.png" alt="WL-X 山地运行设计条件视觉面板，包含地形、天气、通信、人员和平台状态" width="1672" height="973" loading="lazy"><figcaption><b>CONDITION MAP</b><span>地形、天气、通信、人员与平台状态共同限定当前运行包络。</span></figcaption></figure>
    <div class="a4-condition-explorer"><div class="a4-condition-controls">${selectorGroups}</div><aside class="a4-condition-result nominal" id="conditionResult" aria-live="polite"><span>CURRENT ENVELOPE</span><h3>正常运行</h3><b>NOMINAL</b><p>所选条件处于已定义运行包络内，可按任务计划运行并持续监测。</p><dl><div><dt>受影响条件</dt><dd>无越界项</dd></div><div><dt>控制响应</dt><dd>保持任务闭环与安全监督</dd></div><div><dt>关联风险</dt><dd>持续监测</dd></div></dl></aside></div>
    <div class="table-scroll"><table class="professional-table a4-odc-table"><thead><tr><th>条件 ID</th><th>正常运行条件</th><th>监测量</th><th>越界响应</th></tr></thead><tbody>${odcRows}</tbody></table></div>
  </div>`;

  $("#a4-case").innerHTML = `<div class="chapter-shell">${head("04", "CASE", "TYPICAL OPERATIONAL SCENARIO", "沿一条任务线程，<br>观察条件如何变化。", "复杂山地侦察与安全返回场景贯穿准备、展开、越障、侦察、异常撤离和任务收束六个阶段，每一阶段都绑定 ODC 与风险场景。")}
    <div class="a4-case-stage"><figure><img src="assets/scenarios/wlx-mountain-route.png" alt="WL-X 在复杂山地沿规划路线执行侦察任务" width="1672" height="973" loading="lazy"><div class="a4-stage-marker" id="stageMarker"><span>01</span></div><div class="a4-case-hud"><span>SCENARIO / S-01</span><b>复杂山地侦察与安全返回</b><small>前沿保障点 → 碎石坡道 → 侦察目标区 → 撤离走廊</small></div></figure><aside class="a4-stage-detail" id="stageDetail"></aside></div>
    <div class="a4-phase-tabs" role="tablist" aria-label="典型场景阶段">${phaseButtons}</div>
    <div class="a4-thread-strip"><article><span>MISSION</span><b>复杂地形侦察</b></article><i></i><article><span>ODC</span><b>条件持续判定</b></article><i></i><article><span>EVENT</span><b>异常触发变化</b></article><i></i><article><span>RISK</span><b>识别危险演化</b></article><i></i><article><span>CONTROL</span><b>约束与安全响应</b></article></div>
  </div>`;

  $("#a4-risks").innerHTML = `<div class="chapter-shell">${head("05", "RISK", "SAFETY RISK SCENARIOS", "从触发条件，<br>追到安全约束。", "每条风险场景描述触发条件、状态变化、危险、后果、控制约束和系统响应，并与场景要素、ODC 条件及第三板块安全需求建立追溯。")}
    <figure class="a4-wide-figure a4-risk-figure"><img src="assets/scenarios/wlx-risk-scene.png" alt="WL-X 山地任务中的坡地、岩石、通信、雾、能源和执行机构风险" width="1672" height="973" loading="lazy"><figcaption><b>RISK FIELD</b><span>坡地、岩石、通信、能源与执行机构异常共同构成任务风险场。</span></figcaption></figure>
    <div class="a4-risk-workbench"><nav class="a4-risk-list" aria-label="风险场景列表">${riskButtons}</nav><div class="a4-risk-main"><div class="a4-risk-chain" id="riskChain"></div><article class="a4-risk-detail" id="riskDetail"></article></div><aside class="a4-risk-matrix"><span>RISK MATRIX</span><h3>严重度 × 可能性</h3><div class="risk-matrix-grid" id="riskMatrix"></div><p>选择风险场景，矩阵中的对应位置将高亮。</p><button type="button" data-go-safety>查看安全需求与架构</button></aside></div>
    <div class="table-scroll"><table class="professional-table a4-risk-table"><thead><tr><th>ID</th><th>风险场景</th><th>触发条件</th><th>危险</th><th>等级</th><th>关联需求</th></tr></thead><tbody>${riskRows}</tbody></table></div>
  </div>`;

  $("#a4-references").innerHTML = `<div class="chapter-shell"><header class="references-head"><div><p class="overline">ANALYZE / REFERENCES</p><h2>方法与标准依据</h2></div><p>道路车辆 ODC/ODD 分类方法用于组织条件维度；WL-X 的地形、人员和平台状态条目是面向无人地面平台的工程化映射。</p></header><ol class="reference-list"><li><span>[C1]</span><p>ISO 34503:2023 — Road vehicles — Test scenarios for automated driving systems — Specification for operational design domain.</p><a href="https://www.iso.org/standard/78952.html" target="_blank" rel="noreferrer">ISO</a></li><li><span>[C2]</span><p>GB/T 45312—2025《智能网联汽车 自动驾驶系统设计运行条件》。</p><a href="https://std.samr.gov.cn/gb/search/gbDetailedCNF?id=2FF37940EB77D753E06397BE0A0A413F" target="_blank" rel="noreferrer">国家标准</a></li><li><span>[C3]</span><p>GB/T 40429—2021《汽车驾驶自动化分级》。</p><a href="https://std.samr.gov.cn/gb/search/gbDetailed?id=CA6C0E542CB4C983E05397BE0A0AED11" target="_blank" rel="noreferrer">国家标准</a></li><li><span>[C4]</span><p>ISO/IEC/IEEE 15288:2023 — System life cycle processes.</p><a href="https://www.iso.org/standard/81702.html" target="_blank" rel="noreferrer">ISO</a></li><li><span>[C5]</span><p>Leveson, N.; Thomas, J. STPA Handbook, 2018.</p><a href="https://psas.scripts.mit.edu/home/get_file.php?name=STPA_handbook.pdf" target="_blank" rel="noreferrer">MIT</a></li></ol></div>`;

  let treeScale = 1;
  const treeCanvas = $("#a4TreeCanvas");
  const applyTreeScale = () => treeCanvas.style.setProperty("--tree-scale", treeScale.toFixed(2));
  $$('[data-tree-zoom]').forEach(button => button.addEventListener("click", () => {
    treeScale = button.dataset.treeZoom === "in" ? Math.min(1.35, treeScale + .1) : button.dataset.treeZoom === "out" ? Math.max(.72, treeScale - .1) : 1;
    applyTreeScale();
  }));

  const elementName = id => S.hierarchy.flatMap(branch => branch.children).find(item => item.id === id)?.name || id;
  function showBranch(id) {
    const branch = S.hierarchy.find(item => item.id === id);
    if (!branch) return;
    $$("[data-branch]").forEach(button => button.classList.toggle("active", button.dataset.branch === id));
    $("#hierarchyDetail").innerHTML = `<span>${branch.id} / ${esc(branch.en)}</span><h3>${esc(branch.name)}</h3><p>${esc(branch.summary)}</p><dl><div><dt>要素族</dt><dd>${branch.children.map(child => `${child.id} ${child.name}`).join(" · ")}</dd></div><div><dt>分析用途</dt><dd>生成条件组合、运行边界和风险触发项</dd></div></dl>`;
  }
  function showElement(id) {
    const item = S.elements[id];
    if (!item) return;
    $$("[data-element]").forEach(button => button.classList.toggle("active", button.dataset.element === id));
    const branch = S.hierarchy.find(group => group.children.some(child => child.id === id));
    const content = `<span>${id} / ${esc(branch?.name || "场景要素")}</span><h3>${esc(elementName(id))}</h3><p>${esc(item.definition)}</p><div class="a4-value-chips">${item.values.map(value => `<b>${esc(value)}</b>`).join("")}</div><dl><div><dt>行为影响</dt><dd>${esc(item.impact)}</dd></div><div><dt>ODC 追溯</dt><dd>${join(item.odc)}</dd></div><div><dt>风险追溯</dt><dd>${join(item.risks)}</dd></div></dl>`;
    $("#hierarchyDetail").innerHTML = content;
    $("#elementDetail").innerHTML = content;
  }
  $$('[data-branch]').forEach(button => button.addEventListener("click", () => showBranch(button.dataset.branch)));
  $$('[data-element]').forEach(button => button.addEventListener("click", () => showElement(button.dataset.element)));
  showElement("A1");

  const odcById = id => O.conditions.find(item => item.id === id);
  $$('[data-odc]').forEach(button => button.addEventListener("click", () => {
    const row = button.closest("tr");
    $$('[data-odc-row]').forEach(item => item.classList.toggle("selected", item === row));
    row?.scrollIntoView({ behavior: "smooth", block: "center" });
  }));

  const state = Object.fromEntries(O.selectors.map(group => [group.key, group.options[0].value]));
  function evaluateConditions() {
    const affected = new Set(), risks = new Set();
    let level = "nominal";
    if (state.terrain === "blocked") { level = "safe"; affected.add("ODC-ENV-01"); risks.add("RS-001"); }
    if (state.positioning === "lost") { level = "safe"; affected.add("ODC-DIG-01"); risks.add("RS-004"); }
    if (state.energy === "critical") { level = "safe"; affected.add("ODC-VEH-03"); risks.add("RS-006"); }
    if (level !== "safe" && (state.comms === "lost" || state.operator === "offline" || state.visibility === "poor")) level = "pause";
    if (state.comms !== "normal") { affected.add("ODC-DIG-02"); risks.add("RS-003"); }
    if (state.operator !== "ready") { affected.add("ODC-PER-01"); risks.add("RS-008"); }
    if (state.visibility !== "good" || state.weather !== "clear") { affected.add("ODC-ENV-02"); risks.add("RS-005"); }
    if (state.positioning !== "reliable") { affected.add("ODC-DIG-01"); risks.add("RS-004"); }
    if (state.energy !== "sufficient") { affected.add("ODC-VEH-03"); risks.add("RS-006"); }
    if (state.terrain === "wet" || (state.weather === "rain" && state.terrain !== "gravel")) { affected.add("ODC-ENV-01"); risks.add("RS-001"); }
    if (level === "nominal" && affected.size) level = "restricted";
    const copy = {
      nominal: ["正常运行", "NOMINAL", "所选条件处于已定义运行包络内，可按任务计划运行并持续监测。", "保持任务闭环与安全监督"],
      restricted: ["受限运行", "RESTRICTED", "一个或多个条件接近运行边界，平台必须降低任务强度并提高监测频率。", "限速、扩大安全距离并准备退出"],
      pause: ["暂停任务", "MISSION HOLD", "人员监督、通信或环境理解不足以支持继续扩展任务。", "停止新动作，重建条件或沿预案撤离"],
      safe: ["进入安全状态", "SAFE STATE", "关键条件已超出可接受包络，继续运动将放大风险。", "受控停车、保持制动并请求人工处置"]
    }[level];
    const result = $("#conditionResult");
    result.className = `a4-condition-result ${level}`;
    result.innerHTML = `<span>CURRENT ENVELOPE</span><h3>${copy[0]}</h3><b>${copy[1]}</b><p>${copy[2]}</p><dl><div><dt>受影响条件</dt><dd>${affected.size ? [...affected].join(" · ") : "无越界项"}</dd></div><div><dt>控制响应</dt><dd>${copy[3]}</dd></div><div><dt>关联风险</dt><dd>${risks.size ? [...risks].join(" · ") : "持续监测"}</dd></div></dl>`;
    $$('[data-odc-row]').forEach(row => row.classList.toggle("affected", affected.has(row.dataset.odcRow)));
  }
  $$('[data-condition-key]').forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.conditionKey;
    state[key] = button.dataset.conditionValue;
    $$(`[data-condition-key="${key}"]`).forEach(item => item.classList.toggle("active", item === button));
    evaluateConditions();
  }));

  function showPhase(id) {
    const phase = S.phases.find(item => item.id === id);
    if (!phase) return;
    $$('[data-phase]').forEach(button => button.classList.toggle("active", button.dataset.phase === id));
    const marker = $("#stageMarker");
    marker.style.left = `${phase.x}%`; marker.style.top = `${phase.y}%`; marker.innerHTML = `<span>${phase.no}</span>`;
    $("#stageDetail").innerHTML = `<span>${phase.id} / ${phase.location}</span><h3>${phase.title}</h3><p>${phase.summary}</p><dl><div><dt>平台状态</dt><dd>${phase.status}</dd></div><div><dt>人员状态</dt><dd>${phase.person}</dd></div><div><dt>系统行为</dt><dd>${phase.behavior}</dd></div><div><dt>形成产品</dt><dd>${phase.output}</dd></div><div><dt>条件 / 风险</dt><dd>${join(phase.odc)}<br>${join(phase.risks)}</dd></div></dl>`;
  }
  $$('[data-phase]').forEach(button => button.addEventListener("click", () => showPhase(button.dataset.phase)));
  showPhase("SCN-01");

  const matrixCells = [];
  for (let likelihood = 3; likelihood >= 1; likelihood--) for (let severity = 1; severity <= 3; severity++) matrixCells.push(`<div data-matrix="${severity}-${likelihood}" class="matrix-${severity * likelihood >= 6 ? "high" : severity * likelihood >= 3 ? "medium" : "low"}"><span>S${severity} / L${likelihood}</span>${R.filter(risk => risk.severity === severity && risk.likelihood === likelihood).map(risk => `<i data-matrix-risk="${risk.id}">${risk.id}</i>`).join("")}</div>`);
  $("#riskMatrix").innerHTML = matrixCells.join("");
  function showRisk(id) {
    const risk = R.find(item => item.id === id);
    if (!risk) return;
    $$('[data-risk]').forEach(button => button.classList.toggle("active", button.dataset.risk === id));
    $$('[data-matrix-risk]').forEach(dot => dot.classList.toggle("active", dot.dataset.matrixRisk === id));
    $("#riskChain").innerHTML = `<article><span>TRIGGER</span><b>触发条件</b><p>${risk.trigger}</p></article><i></i><article><span>CHANGE</span><b>状态变化</b><p>${risk.change}</p></article><i></i><article><span>HAZARD</span><b>危险</b><p>${risk.hazard}</p></article><i></i><article><span>CONSTRAINT</span><b>控制约束</b><p>${risk.constraint}</p></article>`;
    $("#riskDetail").innerHTML = `<div><span>${risk.id} / ${risk.source}</span><span class="risk-pill risk-${risk.level}">${risk.level}风险</span></div><h3>${risk.name}</h3><p>${risk.consequence}</p><dl><div><dt>系统响应</dt><dd>${risk.response}</dd></div><div><dt>场景要素</dt><dd>${risk.elements.map(id => `${id} ${elementName(id)}`).join(" · ")}</dd></div><div><dt>ODC 条件</dt><dd>${join(risk.odc)}</dd></div><div><dt>安全追溯</dt><dd>${join(risk.req)}</dd></div></dl>`;
    $$('[data-risk-row]').forEach(row => row.classList.toggle("selected", row.dataset.riskRow === id));
  }
  $$('[data-risk]').forEach(button => button.addEventListener("click", () => showRisk(button.dataset.risk)));
  $$('[data-risk-open]').forEach(button => button.addEventListener("click", () => { showRisk(button.dataset.riskOpen); $("#riskDetail").scrollIntoView({ behavior: "smooth", block: "center" }); }));
  showRisk("RS-001");

  $('[data-go-safety]')?.addEventListener("click", () => {
    history.replaceState(null, "", "#a3-safety");
    if (typeof setView === "function") setView("module3", "a3-safety");
  });

  $$('[data-v4-present]').forEach(button => button.addEventListener("click", () => {
    if (typeof presentationController !== "undefined") presentationController.enter(button.dataset.v4Present);
  }));
  if (typeof presentationController !== "undefined") {
    presentationController.slideSets.module4 = ["#module4-top", "#a4-hierarchy", "#a4-elements", "#a4-odc", "#a4-case", "#a4-risks"];
    const currentHub = presentationController.slideSets.hub || [];
    presentationController.slideSets.hub = [...currentHub, "#module4-top", "#a4-hierarchy", "#a4-odc", "#a4-case", "#a4-risks"];
  }
  $$(".module-four .reveal").forEach(element => { if (typeof revealObserver !== "undefined") revealObserver.observe(element); });
  $$(".module-four [data-chapter]").forEach(element => { if (typeof chapterObserver !== "undefined") chapterObserver.observe(element); });
})();
