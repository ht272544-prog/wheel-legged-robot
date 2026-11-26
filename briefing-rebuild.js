(() => {
  const root = document.getElementById("briefing-top");
  if (!root) return;

  const A = "assets/";
  const chapters = [
    { no: "01", title: "系统认知", en: "SYSTEM SCAN", presenter: "黄玮", start: 2, items: ["任务", "体系", "整机", "系统", "子系统", "模块"] },
    { no: "02", title: "需求定义", en: "MISSION PLANNING", presenter: "杨薪田", start: 9, items: ["业务/任务", "BRS", "运营概念", "运行概念", "相关方", "StRS"] },
    { no: "03", title: "架构构建", en: "ARCHITECTURE", presenter: "杨子恒", start: 16, items: ["系统需求规格书", "初始系统架构", "系统控制框图", "安全需求与架构"] },
    { no: "04", title: "场景与风险", en: "TERRAIN SIM", presenter: "郭恺", start: 21, items: ["场景分层", "场景要素", "运行设计条件", "典型场景", "安全风险场景"] },
    { no: "05", title: "综合总结", en: "DEBRIEF", presenter: "高赫 · 段欣雨", start: 27, items: ["系统认知", "需求定义", "架构构建", "场景与风险", "综合结论", "工程验证"] }
  ];

  const top = (chapter, code) => `<div class="briefing-topline rebuilt-top"><span><i></i>轮腿式无人作战平台 · 综合汇报</span><b>${code} / ${chapter}</b></div>`;
  const person = name => `<div class="briefing-presenter"><small>汇报人</small><b>${name}</b></div>`;
  const footer = `<div class="briefing-content-footer">轮腿式无人作战平台｜复杂系统工程</div>`;
  const rail = (ci, active) => `<nav class="briefing-chapter-rail">${chapters[ci].items.map((x, i) => `<button type="button" data-goto="${chapters[ci].start + 1 + i}" class="${i === active ? "active" : ""}"><span>${String(i + 1).padStart(2, "0")}</span><b>${x}</b></button>`).join("")}</nav>`;
  const title = (kicker, heading, intro = "") => `<header class="structured-heading anim"><p class="briefing-kicker">${kicker}</p><h2>${heading}</h2>${intro ? `<p>${intro}</p>` : ""}</header>`;
  const img = (src, alt, cap) => `<figure class="brief-figure anim"><img src="${A + src}" alt="${alt}"><figcaption>${cap}</figcaption></figure>`;
  const chips = items => `<div class="data-chips">${items.map(x => `<span>${x}</span>`).join("")}</div>`;
  const slide = (ci, ai, kicker, heading, intro, body, extra = "") => ({
    section: chapters[ci].title,
    html: `<article class="briefing-slide structured-slide content-slide ${extra}" data-tone="${["blueprint", "planning", "architecture", "terrain", "debrief"][ci]}">${top(chapters[ci].title, `${chapters[ci].no} / ${chapters[ci].en}`)}${person(chapters[ci].presenter)}${rail(ci, ai)}${title(kicker, heading, intro)}<div class="structured-body">${body}</div>${footer}</article>`
  });
  const gate = (ci, image, lead, claim) => ({
    section: chapters[ci].title,
    html: `<article class="briefing-slide briefing-gate" style="--gate-image:url('${A + image}')" data-tone="${["blueprint", "planning", "architecture", "terrain", "debrief"][ci]}">${top(chapters[ci].title, `${chapters[ci].no} / ${chapters[ci].en}`)}${person(chapters[ci].presenter)}<div class="gate-shade"></div><div class="gate-copy anim"><span>${chapters[ci].no}</span><p>${chapters[ci].en}</p><h1>${chapters[ci].title}</h1><h3>${lead}</h3><p class="gate-claim">${claim}</p>${chips(chapters[ci].items)}</div><button class="gate-enter anim" type="button" data-goto="${chapters[ci].start + 1}">进入本章 →</button></article>`
  });
  const conclusionBody = (items, closing) => `<div class="conclusion-grid">${items.map((x,i)=>`<article><span>0${i+1}</span><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div><div class="conclusion-closing">${closing}</div>`;
  const architectureViews = {
    function: [
      ["F01","感知环境与自身状态","融合地形、障碍、位姿、接触与健康信息。","8,16"],
      ["F02","管理任务与运行模式","解释任务包并确定当前任务阶段和工作模式。","38,8"],
      ["F03","规划并控制运动","生成安全路径、速度包络与轮腿协同动作。","70,16"],
      ["F04","交换任务与态势","完成任务授权、状态回传和态势产品交付。","8,66"],
      ["F05","监督安全与健康","独立评估完整性并发布许可、限速、驻停或失能。","38,64"],
      ["F06","保障能源与任务载荷","管理供电、热状态、载荷接口与剩余任务能力。","70,66"]
    ],
    logical: [
      ["L01","感知定位域","形成统一时空基准、环境模型与完整性标志。","8,16"],
      ["L02","任务自治域","执行任务分解、行为决策与异常恢复。","38,8"],
      ["L03","实时控制域","完成轮腿协调、姿态控制、制动和执行反馈。","70,16"],
      ["L04","通信人机域","管理链路、授权、接管、告警和态势呈现。","8,66"],
      ["L05","独立安全域","与任务控制隔离，拥有危险动作否决和失能权。","38,64"],
      ["L06","保障管理域","负责能源、热、载荷、维护和审计数据。","70,66"]
    ],
    physical: [
      ["P01","多模态传感器","激光、视觉、惯导、轮速、关节与近距传感器。","8,16"],
      ["P02","任务计算机","承载定位、规划、任务自治和数据融合软件。","38,8"],
      ["P03","轮腿执行机构","轮端电机、腿部关节、驱动器与制动器。","70,16"],
      ["P04","通信与操作终端","车载电台、任务链路、操作席与急停终端。","8,66"],
      ["P05","安全控制器","独立采样关键状态并控制许可、接触器和制动。","38,64"],
      ["P06","能源载荷单元","电池、配电、热管理和标准化任务载荷接口。","70,66"]
    ]
  };
  const architectureView = (key, active=false) => `<div class="arch-network-view ${active?"active":""}" data-arch-view="${key}"><svg viewBox="0 0 1000 520" aria-hidden="true"><path d="M190 130 C320 50 410 50 500 90"/><path d="M500 90 C620 50 720 70 820 130"/><path d="M190 130 C300 230 310 330 190 390"/><path d="M500 90 L500 415"/><path d="M820 130 C700 230 700 330 820 390"/><path d="M190 390 C330 470 410 470 500 415"/><path d="M500 415 C610 470 710 470 820 390"/><path class="orange" d="M190 130 C390 260 610 260 820 390"/><path class="orange" d="M820 130 C610 260 390 260 190 390"/></svg>${architectureViews[key].map((n,i)=>`<button class="arch-node ${i===0?"active":""}" style="--x:${n[3].split(",")[0]}%;--y:${n[3].split(",")[1]}%" type="button" data-arch-node data-code="${n[0]}" data-title="${n[1]}" data-detail="${n[2]}"><span>${n[0]}</span><b>${n[1]}</b></button>`).join("")}</div>`;

  const slides = [
    { section: "封面", html: `<article class="briefing-slide rebuilt-cover"><img src="${A}briefing/cover-engineering-analysis-hd.png" alt="轮腿式无人作战平台工程分析封面"><div class="cover-model-credit">封面机器人模型：段欣雨绘制</div></article>` },
    { section: "任务总览", html: `<article class="briefing-slide briefing-map rebuilt-map" data-tone="blueprint">${top("任务总览", "BRIEFING MAP")}<header class="briefing-map-head anim"><p class="briefing-kicker">战术任务简报</p><h2>综合汇报任务总览</h2><p>沿工程证据链依次完成系统认知、需求定义、架构构建、场景验证与综合收束。</p></header><div class="mission-route">${chapters.map((c, i) => `<button class="mission-node anim" style="--d:${i}" type="button" data-goto="${c.start}"><span>${c.no}</span><b>${c.title}</b><small>${c.en}</small><em>${["从任务到系统组成", "从任务目标到相关方需求", "从系统需求到控制与安全", "从运行条件到风险场景", "从分析结果到最终结论"][i]}</em></button>`).join("")}</div></article>` },

    gate(0, "briefing/system-blueprint-wall.png", "从任务到模块，建立六级系统认知。", "系统不是零件清单，而是任务效果、体系协同、整机能力与模块接口共同形成的有机整体。"),
    slide(0, 0, "01 / MISSION", "任务：先定义平台必须带回什么结果", "任务边界决定系统边界。平台的价值不是“能走”，而是在人员不宜先行进入的区域持续获得可信信息并安全返回。", `<div class="image-story">${img("briefing/mission-control-terrain.png", "复杂山地任务控制与路线规划", "任务现场：山地机动、路线规划、通信回传与人在回路协同")}</div><div class="story-list"><article><b>复杂地形前沿侦察</b><p>先于有人分队完成路径探测、三维建图与威胁线索采集，降低人员直接暴露。</p></article><article><b>通信中继</b><p>在山谷、建筑与地下空间建立临时自组网节点，维持指令和态势产品传输。</p></article><article><b>物资伴随</b><p>运输能源、弹药、医疗与工程物资，按分队节奏自主跟随并保持安全距离。</p></article><article><b>危险区探测</b><p>对坍塌、污染、爆炸物或工程障碍区域执行先期探测，形成带位置与置信度的报告。</p></article></div>`),
    slide(0, 1, "02 / SOS", "体系：平台必须嵌入更大的任务网络", "单机能力只有与指挥、通信、导航、保障和有人分队正确交换信息时，才能转化为整体任务效果。", `<div class="sos-network"><div class="sos-center"><span>WL-X / SYSTEM OF INTEREST</span><b>轮腿式无人平台</b><p>接收任务与授权，输出状态、态势产品和保障信息。</p></div><div class="sos-links">${["任务指挥节点|任务包、授权、终止条件", "有人分队|路线产品、威胁线索、支援请求", "通信导航系统|链路质量、时间同步、定位辅助", "情报处理系统|目标确认、态势融合、结果归档", "保障维护系统|能源补给、故障隔离、配置恢复"].map((x, i) => { const [a,b]=x.split("|"); return `<article style="--i:${i}"><span>0${i+1}</span><b>${a}</b><p>${b}</p></article>`; }).join("")}</div></div><div class="sos-exchange"><b>体系接口基线</b><span>任务命令</span><span>平台状态</span><span>态势产品</span><span>接管请求</span><span>保障信息</span></div>`),
    slide(0, 2, "03 / VEHICLE", "整机：四轮腿构型兼顾效率、通过性与稳定", "构型不是外观选择，而是任务地形、载荷、能耗、控制复杂度、失效模式和维护保障的联合权衡。", `<div class="vehicle-board">${img("vehicles/wlx-multiview.webp", "轮腿式无人平台多视图", "整机多视图用于核对外廓、轮腿行程、载荷位置与传感器视场")}<div class="vehicle-options"><article><span>CRUISE / 巡航</span><b>轮式高效滚行</b><p>平坦道路降低能耗并提高任务半径，适合长距离快速部署。</p><small>关键指标：续航、滚阻、最高安全速度</small></article><article><span>ADAPT / 适应</span><b>主动调平与混合支撑</b><p>坡地和碎石上保持载荷姿态与感知稳定，降低机体扰动。</p><small>关键指标：横坡、姿态误差、支撑裕度</small></article><article><span>STEP / 越障</span><b>腿式落足与跨越</b><p>沟坎、台阶和障碍处主动选择落足点并保持连续通过。</p><small>关键指标：台阶高度、沟宽、落足精度</small></article><article><span>SAFE / 失效</span><b>限速、降级与安全驻停</b><p>执行器异常时保持可控并阻断危险动作，保留恢复条件。</p><small>关键指标：检测时限、停车距离、冗余度</small></article></div></div>`),
    slide(0, 3, "04 / SYSTEMS", "系统：十个一级系统围绕任务闭环协同", "十个一级系统通过控制、数据、能源和安全接口协同，形成持续机动、感知、决策与安全处置能力。", `<div class="focus-console"><div class="focus-grid">${["机动执行", "感知定位", "任务自治", "通信组网", "任务载荷", "能源热管", "健康保障", "人机协同", "数据审计", "安全监督"].map((x,i)=>`<button class="${i===0?"active":""}" type="button" data-focus="${i}"><span>SYS-${String(i+1).padStart(2,"0")}</span><b>${x}</b></button>`).join("")}</div><div class="focus-readout" id="focusReadout"><span>SYS-01 / MOBILITY</span><h3>机动执行系统</h3><p>接收参考轨迹、速度包络和模式许可，协调轮端驱动、腿部关节与制动器，输出位姿、接触状态和可用能力。</p><div><b>输入：轨迹、模式、地形代价</b><b>输出：动作、制动、执行反馈</b><b>安全边界：姿态、速度、接触力</b></div></div></div>`, "image-backed blueprint-wall"),
    slide(0, 4, "05 / SUBSYSTEMS", "子系统：把一级职责分配到可集成单元", "子系统分解要同时保持功能完整、接口可控和验证可执行，避免把物理设备误当成系统架构。", `<div class="subsystem-board">${img("systems/wlx-exploded.webp", "轮腿式无人平台爆炸分解图", "爆炸视图用于核对结构、能源、计算、传感和执行单元的物理集成关系")}<div class="subsystem-grid">${["环境感知|视觉、激光与近距探测", "组合定位|惯导、轮速、视觉里程计", "任务规划|任务分解、路径与行为选择", "实时控制|轮腿协调、姿态与制动", "通信接口|任务链路、车载网络与网关", "能源保障|储能、配电、热管理与续航估计", "平台健康|自检、故障诊断与剩余能力", "独立安全|许可、限速、急停与失能"].map(x=>{const[a,b]=x.split("|");return `<article><b>${a}</b><p>${b}</p></article>`}).join("")}</div></div>`),
    slide(0, 5, "06 / MODULES", "模块：终端组件必须带着接口和证据进入集成", "模块层关注可采购、可制造、可替换的终端单元；每个模块都要声明机械、电气、数据、时间与安全接口。", `<div class="module-layout"><div class="module-wall">${["激光雷达", "视觉相机", "惯性测量单元", "轮速编码器", "关节驱动器", "轮端电机", "制动执行器", "任务计算机", "安全控制器", "通信电台", "电池与配电", "载荷接口"].map((x,i)=>`<article><span>M-${String(i+1).padStart(2,"0")}</span><b>${x}</b><p>${["环境测距与地形建模", "目标识别与视觉定位", "姿态与运动状态测量", "轮速反馈与打滑判断", "腿部姿态和力矩执行", "巡航与转向驱动", "驻车和紧急制动", "自治算法与任务软件", "独立安全监督", "指令与态势传输", "能源供给和隔离", "任务载荷快速集成"][i]}</p></article>`).join("")}</div><div class="module-interface"><b>统一接口规则</b><span>物理边界</span><span>供电等级</span><span>数据字典</span><span>时间同步</span><span>故障码</span><span>安全状态</span></div></div>`),

    gate(1, "briefing/mission-control-terrain.png", "从任务差距到可验证需求。", "需求定义不是罗列功能，而是把任务问题、预期效果、运行方式和相关方承诺逐级收敛为可验证基线。"),
    slide(1, 0, "01 / BMA", "业务/任务：先回答为什么需要这个系统", "业务任务分析聚焦现有方式的不足、任务期望效果以及应选择哪一类解决方案。", `<div class="gap-effect"><article><span>GAP</span><h3>任务差距</h3><p>人员先期侦察暴露风险高；纯轮式平台在碎石、坡地和台阶组合地形中连续可达性不足；弱链路环境中的信息回传不稳定。</p></article><article><span>EFFECT</span><h3>期望效果</h3><p>由无人平台承担先期环境侦察，持续提供带位置、时间和置信度的态势产品，并在异常状态下保持可控。</p></article><article><span>DECISION</span><h3>方案选择</h3><p>采用四轮腿无人平台，以复杂地形机动为底座，融合持续感知、任务自治、通信中继、人在回路与独立安全监督。</p></article></div><div class="moe-strip"><b>效能度量</b><span>人员暴露显著减少</span><span>组合地形任务连续完成</span><span>有效线索可定位可复核</span><span>异常任务全部进入规定状态</span></div>`),
    slide(1, 1, "02 / BUSINESS REQS", "BRS：把预期效果写成业务级承诺", "业务需求规格描述任务层必须取得的结果，不提前限定具体技术实现，为后续方案权衡保留空间。", `<div class="brs-grid">${["BRS-01|平台应承担危险区域先期侦察，减少人员直接暴露。", "BRS-02|平台应在规定组合地形中保持任务连续性。", "BRS-03|态势产品应包含时间、位置、置信度和质量标记。", "BRS-04|弱链路下应保持关键任务自治并支持缓存补传。", "BRS-05|高风险动作应受明确授权和独立安全约束。", "BRS-06|异常任务应进入可预测、可审计的降级或终止状态。"].map(x=>{const[a,b]=x.split("|");return `<article><span>${a}</span><p>${b}</p><small>来源：任务差距 / 验收：任务演示与效能评估</small></article>`}).join("")}</div>`),
    slide(1, 2, "03 / CONOPS", "运营概念：说明多组织如何共同完成任务", "运营概念站在体系和组织视角，明确指挥、平台、有人分队、通信导航和保障力量在任务全周期的分工。", `<div class="ops-flow">${["任务策划|指挥节点下发区域、目标、时限、禁行区和终止条件", "配置放行|操作员核对平台健康、载荷、能源、链路和授权", "前沿执行|平台先行机动、持续建图、发现线索并回传态势", "异常协同|平台请求改道、降级或接管，指挥节点确认任务取舍", "返回归档|保障人员回收平台，校验日志、维护状态和任务证据"].map((x,i)=>{const[a,b]=x.split("|");return `<article><span>0${i+1}</span><b>${a}</b><p>${b}</p></article>`}).join("")}</div><div class="conops-note"><b>组织级关键问题</b><span>谁拥有任务授权？</span><span>谁监视平台状态？</span><span>谁确认高风险动作？</span><span>谁接收和复核任务证据？</span></div>`),
    slide(1, 3, "04 / OPSCON", "运行概念：说明平台在每个状态怎样工作", "运行概念聚焦系统本身，定义正常、受限、降级与安全状态的进入条件、控制权限、反馈和退出条件。", `<div class="state-machine">${["待命|配置自检通过，等待有效任务包", "任务执行|按授权路线自主机动并持续回传", "受限运行|链路或环境能力下降，降低速度和自主等级", "降级处置|定位、能源或执行器异常，停止新动作并请求处理", "安全驻停|保持制动、撤销危险使能并等待授权恢复", "安全返回|满足剩余能力和路线条件时返回交接点"].map((x,i)=>{const[a,b]=x.split("|");return `<article><span>S${i}</span><b>${a}</b><p>${b}</p></article>`}).join("")}</div><div class="opscon-boundary"><b>任何状态转换都必须记录</b><span>触发条件</span><span>决策主体</span><span>控制动作</span><span>反馈确认</span><span>恢复授权</span></div>`),
    slide(1, 4, "05 / STAKEHOLDERS", "相关方：识别谁提出需求、谁承担影响", "相关方分析覆盖直接使用者、协同系统、约束机构和受影响群体，避免只从操作员视角定义系统。", `<div class="stakeholder-console"><div class="stakeholder-orbit"><b>20</b><span>类相关方</span></div><div class="stakeholder-groups"><article><span>DIRECT / 04</span><b>直接使用</b><p>任务指挥、平台操作员、伴随分队、任务载荷操作员</p></article><article><span>INTERACT / 08</span><b>协同交互</b><p>通信、导航、情报、保障、维护、训练、运输和接口系统</p></article><article><span>CONSTRAIN / 04</span><b>施加约束</b><p>安全、频谱、鉴定、信息治理与部署管理</p></article><article><span>AFFECTED / 04</span><b>承受影响</b><p>附近人员、设施、环境以及后续维护人员</p></article></div></div><div class="stakeholder-question"><b>四个追问</b><span>谁需要它？</span><span>谁与它交互？</span><span>谁限制它？</span><span>谁会被它影响？</span></div>`),
    slide(1, 5, "06 / STAKEHOLDER REQS", "StRS：把相关方诉求写成可验收需求", "一条合格的相关方需求必须同时回答主张者、条件、系统行为、性能门槛和验证方式。", `<div class="req-workbench"><div class="req-card"><span>StR-MOB-01 / MUST</span><h3>复杂地形连续通过</h3><p>当任务路线包含规定碎石、坡地和台阶组合地形时，平台应在授权速度包络内完成无碰撞通过；若稳定裕度或定位完整性低于阈值，应停止进入并报告原因。</p><div><b>主张者：操作员 / 伴随分队</b><b>来源：BRS-02</b><b>验证：10 次场地试验</b></div></div><div class="req-quality-buttons">${["必要|删除后任务目标无法满足", "清晰|条件、主语、动作无歧义", "可验证|存在判据与试验方法", "可追溯|上追业务、下接系统需求"].map((x,i)=>{const[a,b]=x.split("|");return `<button class="${i===0?"active":""}" type="button" data-quality="${i}"><span>0${i+1}</span><b>${a}</b><small>${b}</small></button>`}).join("")}</div></div><div class="quality-readout" id="qualityReadout"><b>必要性判定</b><span>该需求直接支撑复杂地形可达性与人员暴露降低，若删除，核心任务效应无法成立。</span></div>`),

    gate(2, "scenarios/wlx-odc-dashboard.png", "从系统需求到控制与安全机制。", "架构把需求分配到功能、逻辑与物理元素，并通过控制闭环和独立安全链保证系统在许可范围内运行。"),
    slide(2, 0, "01 / SyRS", "系统需求规格书：建立可分配、可验证的技术基线", "系统需求用统一陈述方式约束功能、性能、接口和安全行为，并明确上游来源、下游分配和验证出口。", `<div class="sysreq-table"><div class="sysreq-head"><span>ID</span><span>类型</span><span>需求陈述</span><span>追溯</span><span>验证</span></div>${["SYS-DAT-01|功能|态势产品生成：输出采集时间、坐标基准、位置和置信度|StR-MIS-02|检查加试验", "SYS-MOB-01|性能|组合地形通过：生成无碰撞轨迹并完成规定路线|StR-MOB-01|场地试验", "SYS-MOB-02|功能|运动形态切换：滚行、越障和调平间受控切换|StR-MOB-01/03|试验", "SYS-PER-01|性能|位姿估计：统一时间基准输出位姿、速度和协方差|StR-MOB-02|试验", "SYS-SAF-01|安全|安全状态转换：完整性不足时限速、驻停并发布审计状态|StR-SAF-02|故障注入"].map(x=>{const[a,b,c,d,e]=x.split("|");return `<div><b>${a}</b><span>${b}</span><p>${c}</p><span>${d}</span><span>${e}</span></div>`}).join("")}</div>`),
    slide(2, 1, "02 / ARCHITECTURE", "初始系统架构：用多视图回答做什么、谁负责、如何落地", "功能视图定义必须完成的作用，逻辑视图形成协作职责，物理视图给出初始实现单元；三种视图通过需求与接口保持一致。", `<div class="architecture-lab"><div class="arch-tabs"><button class="active" data-arch="function" type="button">功能视图</button><button data-arch="logical" type="button">逻辑视图</button><button data-arch="physical" type="button">物理视图</button></div><div class="arch-network-shell"><div class="arch-canvas">${architectureView("function",true)}${architectureView("logical")}${architectureView("physical")}</div><aside class="arch-inspector" id="archInspector"><span>F01 / FUNCTION</span><h3>感知环境与自身状态</h3><p>融合地形、障碍、位姿、接触与健康信息。</p><div><b>输入</b><em>环境观测 · 平台状态 · 时间基准</em></div><div><b>输出</b><em>环境模型 · 位姿 · 完整性标志</em></div></aside></div></div>`),
    slide(2, 2, "03 / CONTROL LOOP", "系统控制框图：控制权和反馈必须形成闭环", "控制框图不只表示信息流，更要说明谁能发出动作、谁反馈状态、谁拥有否决权以及异常时如何切换。", `<div class="control-diagram"><div class="control-row">${["任务指挥与操作员", "任务规划与决策", "安全监督与运动控制", "轮腿平台与环境"].map((x,i)=>`<article><span>0${i+1}</span><b>${x}</b></article>`).join("<i>→</i>")}</div><div class="feedback-path"><b>状态反馈 ← 位姿 · 地形 · 接触 · 链路 · 能源 · 健康 ←</b></div><div class="control-rules"><article><b>控制动作</b><p>任务授权、模式许可、速度轨迹、关节力矩、制动与急停。</p></article><article><b>反馈证据</b><p>每次状态转换都由时间同步的传感、执行和安全状态共同确认。</p></article><article><b>权限边界</b><p>高风险动作需要人工授权，独立安全链拥有否决与失能权。</p></article></div></div>`),
    slide(2, 3, "04 / SAFETY", "安全需求与架构：把危险改写为可验证约束", "基于系统理论过程分析，从不可接受损失追溯危险状态和不安全控制动作，再把约束落到独立架构机制。", `<div class="safety-page-grid">${img("scenarios/wlx-risk-scene.png", "轮腿平台山地安全风险场景", "风险图将坡面、落石、弱链路、低能量和执行器异常映射到安全约束")}<div class="safety-cascade">${["LOSS|人员、设备、任务信息或平台受损", "HAZARD|不可信状态下仍继续高速运动或释放载荷", "UCA|应限速时未限速、无授权时启动或反馈过期仍执行", "CONSTRAINT|完整性不足必须降级、停车并保留审计证据", "MECHANISM|独立监督器、双通道急停、互锁与驱动使能链"].map(x=>{const[a,b]=x.split("|");return `<article><span>${a}</span><p>${b}</p></article>`}).join("")}</div></div><div class="safety-architecture-strip"><b>任务控制负责“完成”</b><i>安全许可</i><b>安全控制负责“允许”</b><i>驱动使能</i><b>执行机构只接受双重成立</b></div>`),

    gate(3, "scenarios/wlx-scenario-hero-v2.png", "从运行条件到可复现的风险场景。", "场景工程把环境、人员、平台状态和任务阶段组合成可执行用例，让需求、架构和安全约束在真实条件下接受检验。"),
    slide(3, 0, "01 / SCENARIO LAYERS", "场景分层：先固定范围，再叠加动态变化", "分层避免把“复杂环境”写成无法复现的模糊条件，每一层都提供独立参数和明确的进入、退出判据。", `<div class="visual-analysis-grid">${img("scenarios/wlx-scenario-layers.png", "场景分层结构图", "场景实例由运行范围、动态环境、平台状态、人员状态和任务阶段共同形成")}<div class="layer-list">${["设计运行范围|地形、坡度、障碍、天气、光照、通信和定位环境", "动态环境|移动人员、临时障碍、链路波动与突发天气", "平台状态|能源、载荷、健康、制动、定位完整性与运行模式", "人员状态|授权、在岗、接管能力、装卸与区域隔离", "任务阶段|准备、进入、感知、执行、降级、返回与归档"].map((x,i)=>{const[a,b]=x.split("|");return `<article><span>0${i+1}</span><b>${a}</b><p>${b}</p></article>`}).join("")}</div></div>`),
    slide(3, 1, "02 / ELEMENTS", "场景要素：用参数替代“恶劣、复杂、危险”", "场景要素必须用可度量参数描述，明确范围、状态与判据，才能形成可重复、可比较的验证条件。", `<div class="element-workbench"><div class="element-buttons">${["地形", "天气", "通信", "人员", "平台"].map((x,i)=>`<button class="${i===0?"active":""}" type="button" data-element="${i}"><span>0${i+1}</span><b>${x}</b></button>`).join("")}</div><div class="element-visual">${img("scenarios/wlx-odc-dashboard.png", "运行条件仪表板", "运行条件通过地形、气象、通信、人员与平台参数共同定义")}</div><div class="element-readout" id="elementReadout"><span>TERRAIN</span><h3>碎石山地与 12° 连续坡</h3><p>记录粒径、松散度、可通行宽度、纵横坡、台阶高度、附着水平和安全停车区。</p><b>判据：平台外廓、落足范围和稳定裕度同时满足</b></div></div>`),
    slide(3, 2, "03 / ODC", "运行设计条件：范围、平台与人员共同决定能否进入", "运行设计条件不仅是外部环境，还包含平台自身健康状态和人员能否履行授权、监视与接管职责。", `<div class="odc-cards"><article><span>ODD</span><h3>设计运行范围</h3><p>地形、坡度、障碍、天气、光照、通信、定位和禁行区域。</p><ul><li>碎石粒径与松散度</li><li>连续坡、横坡与台阶</li><li>能见度、降雨和温度</li><li>链路时延、丢包与失联时长</li></ul></article><article><span>PLATFORM</span><h3>平台状态</h3><p>能源、载荷、健康、制动、定位完整性、配置和运行模式。</p><ul><li>剩余任务时间与安全余量</li><li>关键传感器一致性</li><li>制动和急停自检</li><li>最高故障等级与降级能力</li></ul></article><article><span>HUMAN</span><h3>人员状态</h3><p>任务授权、操作在岗、接管能力、区域隔离、装卸与交接状态。</p><ul><li>高风险动作确认</li><li>接管时限与注意力</li><li>危险区人员隔离</li><li>恢复与解锁权限</li></ul></article></div>`),
    slide(3, 3, "04 / TYPICAL SCENARIO", "典型场景：复杂山地前沿侦察与信息回传", "平台由安全区域进入碎石坡地，完成路径侦察、三维建图和目标线索采集，并回传带时间、坐标与置信度的态势产品。", `<div class="route-visual">${img("scenarios/wlx-mountain-route.png", "复杂山地任务路线", "绿色区域表示可通行走廊，橙色路径表示任务路线与关键检查点")}</div><div class="route-steps">${["任务放行|核对区域、目标、禁行区、授权和终止条件", "路径进入|评估地形、规划路线并限制速度包络", "持续建图|更新位姿完整性、地形栅格和障碍信息", "线索确认|多源观测、目标置信度与人工核认", "态势回传|附带时间、坐标、质量标记和链路状态", "安全返回|按能源门槛选择原路或替代路线并归档"].map((x,i)=>{const[a,b]=x.split("|");return `<article><span>S-0${i+1}</span><b>${a}</b><p>${b}</p></article>`}).join("")}</div>`),
    slide(3, 4, "05 / RISK SCENARIOS", "安全风险场景：风险必须绑定触发、响应、证据与验证", "风险场景把触发条件、系统响应、证据记录和验证方法连接起来，使异常行为能够被约束和复核。", `<div class="risk-workbench"><div class="risk-image">${img("scenarios/wlx-risk-scene.png", "山地运行风险标注", "风险源包括坡面失稳、落石、链路衰减、低能量与执行机构异常")}</div><div class="risk-panel"><div class="risk-select">${["R-01 表面打滑", "R-02 路径阻断", "R-03 定位失效", "R-04 急停无效"].map((x,i)=>`<button class="${i===0?"active":""}" type="button" data-risk="${i}">${x}</button>`).join("")}</div><div id="riskReadout"><span>R-01 / HIGH</span><h3>湿滑横坡导致稳定裕度下降</h3><p><b>触发：</b>附着估计下降、横向滑移持续增加或姿态接近许可边界。</p><p><b>响应：</b>降低速度、扩大支撑多边形并重新选择低横坡路线。</p><p><b>证据：</b>轮速差、惯导姿态、接触估计、限速指令和路线变更记录。</p><p><b>验证：</b>在可控湿滑横坡注入附着变化，检查限速时限与稳定裕度。</p></div></div></div>`),

    gate(4, "briefing/system-summary-wide.png", "从四章分析结果到综合工程判断。", "综合总结核对任务、需求、架构、场景与安全证据是否形成同一条可追溯、可实现、可验证的工程链路。"),
    slide(4, 0, "01 / SYSTEM SCAN", "系统认知结论：从任务目标建立完整的系统层级", "从任务、体系、整机逐步分解至系统、子系统和末端模块，明确平台“为什么存在、与谁协同、由什么组成、各部分承担什么职责”。", conclusionBody([
      ["构型选择","四轮腿独立驱动兼顾机动效率与复杂地形适应","通过不同轮腿构型比较，四轮腿方案在稳定性、越障能力、冗余和任务载荷之间取得较好的综合平衡。"],
      ["系统分解","任务能力逐级落实到明确的系统职责","从 Mission、SoS 到 Vehicle，再向 Systems、Subsystems 和 Modules 分解，使整机能力能够落实到具体功能单元。"],
      ["层级追溯","末端模块能够向上追溯其任务来源","系统、子系统和模块之间保持明确的上下级关系，使每个组成单元都能够回答“为什么需要、服务于什么任务”。"]
    ], "完成了从任务目标到末端模块的逐级分解，建立了轮腿式无人作战平台清晰的系统边界与组成框架。"), "conclusion-slide"),
    slide(4, 1, "02 / REQUIREMENTS", "需求定义结论：从任务场景形成可追溯、可验证的需求基线", "通过业务/任务分析、BRS、ConOps、OpsCon、相关方识别与 StRS，将任务目标逐步转化为具有来源、对象和验证方式的工程需求。", conclusionBody([
      ["任务需求","先明确“为什么需要”，再讨论“系统做什么”","从复杂地形任务、人员暴露、持续侦察和信息回传等实际问题出发，确定项目需要实现的业务和任务效果。"],
      ["运行需求","通过 ConOps 与 OpsCon 描述体系协同和平台运行方式","分别从组织体系和关注系统两个层级明确参与者、任务阶段、控制权限、异常出口及运行边界。"],
      ["需求收敛","相关方诉求最终转化为可验证的 StRS","明确需求提出者、需求内容、成功判据和验证方法，使需求能够继续向系统需求和架构设计传递。"]
    ], "把任务中的问题和期望转化为可追溯、可验证的相关方需求，为后续系统架构设计建立输入基线。"), "conclusion-slide"),
    slide(4, 2, "03 / ARCHITECTURE", "架构构建结论：让需求、功能、控制与安全形成闭环", "将相关方需求转化为 SyRS，并通过初始系统架构、控制框图和安全架构明确功能分配、信息交互、控制关系以及异常状态下的安全约束。", conclusionBody([
      ["需求落地","SyRS 将相关方期望转化为系统必须履行的义务","功能、性能、接口与安全要求获得明确编号，并与来源、架构分配和验证方式建立对应关系。"],
      ["架构分配","功能、逻辑和物理视图共同回答“谁来实现”","通过多视图架构，将感知、计算、通信、能源、安全监督和轮腿执行等能力落实到具体系统单元及接口。"],
      ["安全闭环","正常控制链之外建立独立的安全监督与干预机制","利用控制框图与 STPA 分析异常控制行为，使检测、降级、急停和安全停车等约束真正进入系统架构。"]
    ], "实现了从系统需求到功能分配、控制闭环和安全约束的逐层落地，使平台架构具备可实现、可追溯和可验证的基础。"), "conclusion-slide"),
    slide(4, 3, "04 / TERRAIN SIM", "场景与风险结论：用真实运行条件检验系统设计", "通过场景分层、场景要素、运行设计条件、典型场景和风险场景，将环境、人员与平台状态纳入统一分析，检验系统在条件变化和异常情况下的运行边界。", conclusionBody([
      ["运行边界","环境、人员和平台状态共同决定系统是否允许进入任务","ODC 不只是地形和天气，还需要同时考虑通信、定位、平台健康状态及人员监督条件。"],
      ["场景验证","典型场景把静态需求转化为连续运行过程","通过任务准备、部署、机动、探测、信息回传和安全返回，检查需求和架构是否能够支撑完整任务流程。"],
      ["风险约束","风险场景将条件偏离与安全响应建立联系","当地形、通信、定位、能源或人员状态发生异常时，系统通过限速、降级、驻停或安全返回等方式保持风险可控。"]
    ], "通过运行条件和风险场景验证平台设计是否真正能够在复杂环境中安全、连续地完成任务。"), "conclusion-slide"),
    slide(4, 4, "05 / INTEGRATED DECISION", "综合结论：以任务需求牵引系统设计，以场景验证闭合工程链路", "四个阶段从系统认知、需求定义、架构构建到场景与风险分析逐步推进，使轮腿式无人作战平台从概念构想形成具有层级、需求、架构、控制和安全约束的完整系统工程方案。", conclusionBody([
      ["系统认知","从任务到模块，建立平台完整组成框架","明确平台在体系中的位置，完成整机、系统、子系统和末端模块的逐层分解。"],
      ["需求定义","从场景到需求，建立可追溯需求基线","将任务目标、运行方式和相关方诉求转化为具有来源和验证方式的工程需求。"],
      ["架构构建","从需求到安全，建立功能与控制实现路径","通过 SyRS、初始架构、控制框图和安全架构，把需求落实到具体系统单元和控制关系。"],
      ["场景与风险","从环境到风险，验证系统运行边界","利用 ODC、典型场景和风险场景检验系统在正常及异常条件下的运行与安全响应。"]
    ], "轮腿式无人作战平台的工程价值不只在于“能走、能越障”，而在于通过需求、架构、控制和场景验证形成一套可追溯、可实现、可验证的复杂系统方案。"), "conclusion-slide comprehensive-conclusion"),
    slide(4, 5, "06 / ENGINEERING ROADMAP", "从系统定义走向工程验证", "现阶段已经形成完整的系统定义与工程分析基线，后续工作将沿整机集成、联合仿真、数字孪生与真实环境试验逐级推进。", `<div class="achievement-future"><section><span>CURRENT / 当前成果</span><h3>当前成果</h3>${["六级系统认知","需求链建立","系统架构形成","控制与安全分析","场景与风险模型建立"].map((x,i)=>`<article><b>0${i+1}</b><p>${x}</p></article>`).join("")}</section><i></i><section><span>NEXT / 后续方向</span><h3>后续方向</h3>${["实物样机与整机集成","联合仿真与故障注入","数字孪生验证","真实环境测试","多平台协同与任务扩展"].map((x,i)=>`<article><b>0${i+1}</b><p>${x}</p></article>`).join("")}</section></div>`, "roadmap-slide"),
    { section: "团队分工", html: `<article class="briefing-slide structured-slide team-slide" data-tone="debrief">${top("团队分工", "TEAM")} ${title("协同贡献", "从专业分析到综合呈现", "系统认知、需求定义、架构构建、场景验证与综合收束共同形成完整的工程证据链。")}
      <div class="rebuilt-team-grid">${[["01","系统认知","黄玮"],["02","需求定义","杨薪田"],["03","架构构建","杨子恒"],["04","场景与风险","郭恺"],["05","综合汇总与演示制作","高赫 · 段欣雨"],["3D","封面机器人模型","段欣雨"]].map(x=>`<article><span>${x[0]}</span><b>${x[1]}</b><p>${x[2]}</p></article>`).join("")}</div></article>` },
    { section: "完成", html: `<article class="briefing-slide briefing-end thanks-slide" data-tone="debrief">${top("汇报结束", "MISSION COMPLETE")}<div class="thanks-copy"><p class="briefing-kicker">MISSION COMPLETE</p><h1>汇报完毕</h1><h3>敬请老师同学们批评指正</h3><p>系统 · 需求 · 架构 · 场景 · 安全</p><button class="briefing-primary" type="button" data-action="map">返回任务总览</button></div><div class="thanks-robot"><img src="${A}briefing/robot-model-dan-xinyu-cutout.png" alt="段欣雨绘制的轮腿式机器人模型"><span>机器人三维模型：段欣雨</span></div></article>` }
  ];

  root.innerHTML = `<div class="briefing-frame rebuilt-frame" id="briefingFrame"><div class="briefing-start" id="briefingStart"><div class="briefing-start-inner"><div class="briefing-start-mark">WL-X</div><h1>战术任务简报</h1><p>TACTICAL MISSION BRIEFING</p><div class="briefing-start-line"></div><button type="button" data-action="start">进入简报</button><small>系统状态就绪 · 任务序列已载入</small></div></div><div class="briefing-stage">${slides.map(s=>s.html).join("")}</div><nav class="briefing-nav"><button type="button" data-action="prev">← 上一页</button><button type="button" data-action="map">目录</button><button type="button" data-action="next">下一页 →</button><button type="button" data-action="fullscreen">全屏</button><button type="button" data-action="print">导出 PDF</button><div class="briefing-progress"><i id="briefingProgress"></i><b id="briefingCurrent"></b></div><span class="briefing-page" id="briefingPage"></span></nav></div>`;

  const frame = root.querySelector("#briefingFrame");
  const start = root.querySelector("#briefingStart");
  const nodes = [...root.querySelectorAll(".briefing-slide")];
  const progress = root.querySelector("#briefingProgress");
  const page = root.querySelector("#briefingPage");
  let current = 0;
  nodes.forEach((node,i)=>node.insertAdjacentHTML("beforeend",`<div class="slide-page-stamp">${String(i+1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}</div>`));
  const go = n => { current = Math.max(0, Math.min(slides.length - 1, Number(n))); nodes.forEach((x,i)=>x.classList.toggle("is-active", i===current)); progress.style.width = `${(current+1)/slides.length*100}%`; frame.style.setProperty("--current-progress",`${(current+.5)/slides.length*100}%`); page.textContent = `${String(current+1).padStart(2,"0")} / ${String(slides.length).padStart(2,"0")}`; frame.dataset.slide = current; wakeControls(); };
  const fullscreen = () => document.fullscreenElement ? document.exitFullscreen?.() : frame.requestFullscreen?.();
  const exit = () => { start.hidden=false; history.replaceState(null,"","#top"); if(typeof setView==="function") setView("hub","top",false); else document.body.dataset.view="hub"; };
  let controlsTimer;
  const wakeControls = () => { frame.classList.remove("controls-idle"); clearTimeout(controlsTimer); controlsTimer=setTimeout(()=>frame.classList.add("controls-idle"),2800); };

  root.addEventListener("click", e => {
    const t=e.target.closest("button,[data-goto],a"); if(!t) return;
    if(t.dataset.goto!==undefined){go(t.dataset.goto);return;}
    const a=t.dataset.action;
    if(a==="start"){start.hidden=true;go(0)} if(a==="prev")go(current-1); if(a==="next")go(current+1); if(a==="map")go(1); if(a==="fullscreen")fullscreen();
    if(a==="print"){document.body.classList.add("print-briefing");frame.classList.remove("controls-idle");setTimeout(()=>window.print(),80)}
  });
  frame.addEventListener("pointermove",wakeControls);
  frame.addEventListener("click",e=>{if(e.target.closest("button,a")||!start.hidden)return;const r=frame.getBoundingClientRect(),q=(e.clientX-r.left)/r.width;if(q<.08)go(current-1);if(q>.92)go(current+1)});
  frame.addEventListener("dblclick",e=>{if(!e.target.closest("button,a"))fullscreen()});
  window.addEventListener("afterprint",()=>document.body.classList.remove("print-briefing"));

  const focusData=[
    ["SYS-01 / MOBILITY","机动执行系统","接收参考轨迹、速度包络和模式许可，协调轮端驱动、腿部关节与制动器，输出位姿、接触状态和可用能力。","输入：轨迹、模式、地形代价","输出：动作、制动、执行反馈","安全边界：姿态、速度、接触力"],
    ["SYS-02 / PERCEPTION","感知定位系统","融合视觉、激光、惯导、轮速与关节状态，生成带统一时间基准的环境模型、位姿与完整性判断。","输入：多源观测、地图、时间同步","输出：位姿、障碍、地形与完整性","安全边界：数据新鲜度与协方差"],
    ["SYS-03 / AUTONOMY","任务自治系统","依据任务包、环境模型和安全约束完成任务分解、路线规划、行为选择与异常恢复。","输入：目标、环境、控制权限","输出：行为、路径、任务状态","安全边界：禁行区与终止条件"],
    ["SYS-04 / COMMUNICATION","通信组网系统","传输指令、态势、健康与接管信息，在弱链路下执行分级发送、缓存与补传。","输入：任务链路与消息优先级","输出：指令确认与数据产品","安全边界：时延、丢包与身份认证"],
    ["SYS-05 / PAYLOAD","任务载荷系统","承载侦察、中继、伴随或危险区探测载荷，并通过标准机械、电气、数据和安全接口接入。","输入：任务、供电许可、平台状态","输出：观测产品与载荷健康","安全边界：质量、功率和互锁"],
    ["SYS-06 / ENERGY","能源与热管理系统","完成储能、配电、功率限制、剩余任务时间估算和关键设备热管理。","输入：功率需求、温度、路程","输出：供电、剩余时间、限功率","安全边界：过流、过温与隔离"],
    ["SYS-07 / HEALTH","健康保障系统","持续监测传感器、计算机、执行器和链路状态，识别故障并评估剩余能力。","输入：自检、运行参数、故障码","输出：健康等级与维护建议","安全边界：误报、漏报与故障传播"],
    ["SYS-08 / HMI","人机协同系统","呈现任务进度、平台意图、风险与接管请求，并接收授权、模式选择和急停。","输入：状态、风险、平台意图","输出：提示、命令、授权记录","安全边界：认知负荷与控制权冲突"],
    ["SYS-09 / DATA","数据与审计系统","统一时间、坐标和标识，记录任务、控制、故障与人员操作，为复盘和安全论证提供证据。","输入：系统事件、配置与版本","输出：日志、证据包、追溯索引","安全边界：完整性与保存周期"],
    ["SYS-10 / SAFETY","独立安全监督系统","独立判断定位、姿态、速度、人员隔离和急停状态，对任务控制实施许可、限速、驻停或失能。","输入：安全传感与急停通道","输出：许可、制动、失能与告警","安全边界：独立性与故障安全"]
  ];
  const qualityData=[["必要性判定","该需求直接支撑复杂地形可达性与人员暴露降低，若删除，核心任务效应无法成立。"],["清晰性判定","条件、主语、动作、受控边界和异常出口均被明确限定，不依赖模糊词。"],["可验证判定","规定场景、无碰撞通过、稳定裕度和停止报告均可由试验与日志核验。"],["可追溯判定","向上连接业务需求，向下分配至机动、感知、控制和安全需求。"]];
  const elementData=[["TERRAIN","碎石山地与 12° 连续坡","记录粒径、松散度、可通行宽度、纵横坡、台阶高度、附着水平和安全停车区。","判据：平台外廓、落足范围和稳定裕度同时满足"],["WEATHER","薄雾、小雨与逆光","记录能见度、降雨强度、路面湿滑程度、环境温度和传感器污染水平。","判据：感知置信度与附着估计持续有效"],["NETWORK","间歇弱链路","记录时延、丢包、带宽、失联持续时间、恢复条件与消息优先级。","判据：关键状态可上报，失联时进入规定自治等级"],["HUMAN","授权与接管能力","记录操作员在岗、注意力、确认时限、危险区隔离和接管资源。","判据：高风险动作获得授权且恢复权限清晰"],["PLATFORM","健康与剩余能力","记录能源、载荷、定位完整性、制动、关键故障和可用运行模式。","判据：剩余能力覆盖任务与安全返回余量"]];
  const riskData=[
    ["R-01 / HIGH","湿滑横坡导致稳定裕度下降","附着估计下降、横向滑移持续增加或姿态接近许可边界。","降低速度、扩大支撑多边形并重新选择低横坡路线。","轮速差、惯导姿态、接触估计、限速指令和路线变更记录。","在可控湿滑横坡注入附着变化，检查限速时限与稳定裕度。"],
    ["R-02 / HIGH","路线被落石或塌方阻断","前方可通行宽度低于安全包络，替代落足点不可用。","停止前进、退至安全点并重规划；无解则安全驻停。","障碍栅格、规划失败码、停车位置与操作员确认。","仿真和实地障碍注入，检查停车距离与告警完整性。"],
    ["R-03 / CRITICAL","定位完整性持续低于许可阈值","位姿协方差增大、传感器不一致或地图匹配连续失败。","冻结新路径、降速至零并请求人工核验或安全返回。","原始观测、完整性标志、状态转换和制动反馈。","注入遮挡、漂移与同步故障，检查停止时限。"],
    ["R-04 / CRITICAL","急停请求未产生预期失能","急停输入有效但驱动使能未撤销，或制动反馈不一致。","第二独立通道切断驱动能源并机械驻停，锁定恢复权限。","双通道输入、接触器、轮速、制动力和恢复授权。","注入断线、粘连和单点故障，验证任一通道均可驻停。"]
  ];
  root.addEventListener("click",e=>{
    const f=e.target.closest("[data-focus]"); if(f){root.querySelectorAll("[data-focus]").forEach(x=>x.classList.toggle("active",x===f));const d=focusData[+f.dataset.focus],r=root.querySelector("#focusReadout");r.innerHTML=`<span>${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p><div><b>${d[3]}</b><b>${d[4]}</b><b>${d[5]}</b></div>`}
    const q=e.target.closest("[data-quality]"); if(q){root.querySelectorAll("[data-quality]").forEach(x=>x.classList.toggle("active",x===q));const d=qualityData[+q.dataset.quality];root.querySelector("#qualityReadout").innerHTML=`<b>${d[0]}</b><span>${d[1]}</span>`}
    const a=e.target.closest("[data-arch]"); if(a){root.querySelectorAll("[data-arch]").forEach(x=>x.classList.toggle("active",x===a));root.querySelectorAll("[data-arch-view]").forEach(x=>x.classList.toggle("active",x.dataset.archView===a.dataset.arch));const first=root.querySelector(`[data-arch-view="${a.dataset.arch}"] [data-arch-node]`);if(first)first.click()}
    const an=e.target.closest("[data-arch-node]"); if(an){const view=an.closest("[data-arch-view]");view.querySelectorAll("[data-arch-node]").forEach(x=>x.classList.toggle("active",x===an));const box=root.querySelector("#archInspector");box.innerHTML=`<span>${an.dataset.code} / ${view.dataset.archView.toUpperCase()}</span><h3>${an.dataset.title}</h3><p>${an.dataset.detail}</p><div><b>关联关系</b><em>需求分配 · 接口约束 · 验证证据</em></div><div><b>工程输出</b><em>职责边界 · 输入输出 · 安全约束</em></div>`}
    const el=e.target.closest("[data-element]"); if(el){root.querySelectorAll("[data-element]").forEach(x=>x.classList.toggle("active",x===el));const d=elementData[+el.dataset.element];root.querySelector("#elementReadout").innerHTML=`<span>${d[0]}</span><h3>${d[1]}</h3><p>${d[2]}</p><b>${d[3]}</b>`}
    const rr=e.target.closest("[data-risk]"); if(rr){root.querySelectorAll("[data-risk]").forEach(x=>x.classList.toggle("active",x===rr));const d=riskData[+rr.dataset.risk];root.querySelector("#riskReadout").innerHTML=`<span>${d[0]}</span><h3>${d[1]}</h3><p><b>触发：</b>${d[2]}</p><p><b>响应：</b>${d[3]}</p><p><b>证据：</b>${d[4]}</p><p><b>验证：</b>${d[5]}</p>`}
  });
  document.addEventListener("keydown",e=>{if(document.body.dataset.view!=="briefing")return;if(e.key==="ArrowRight"||e.key===" "){e.preventDefault();if(!start.hidden)start.hidden=true;else go(current+1)}if(e.key==="ArrowLeft"){e.preventDefault();go(current-1)}if(e.key.toLowerCase()==="f")fullscreen();if(e.key==="Escape"&&!document.fullscreenElement){if(current!==1&&start.hidden)go(1);else exit()}});
  go(0);
  const qa=new URLSearchParams(location.search).get("briefing-slide"); if(qa!==null){start.hidden=true;go(+qa)}
})();
