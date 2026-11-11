const systems = [
  {
    id: "S01", category: "mission", title: "任务管理与自主控制系统", subtitle: "把上级意图转换为可安全执行的机器行为",
    purpose: "负责任务接收、约束检查、行为编排、路径规划、协同与人机权限管理，是平台的任务级“指挥层”。",
    subsystems: [
      { name: "任务规划子系统", modules: ["任务包解析", "规则与禁行区管理", "任务分解器", "资源评估器"] },
      { name: "行为决策子系统", modules: ["行为树执行器", "风险评估", "模式管理器", "异常重规划"] },
      { name: "路径规划子系统", modules: ["全局路径规划", "局部轨迹规划", "动态避障", "可通行性代价地图"] },
      { name: "协同控制子系统", modules: ["编队管理", "任务协商", "冲突消解", "协同状态同步"] },
      { name: "人机交互子系统", modules: ["操作员终端", "权限与授权", "态势可视化", "接管与急停"] }
    ]
  },
  {
    id: "S02", category: "mission", title: "环境感知与组合定位系统", subtitle: "在昼夜、烟尘和弱 GNSS 条件下形成环境模型",
    purpose: "采集多模态环境信息，完成时间空间对齐、目标线索提取、地形理解和鲁棒定位，为规划控制提供可信状态。",
    subsystems: [
      { name: "视觉感知子系统", modules: ["环视相机组", "低照度相机", "热成像组件", "图像预处理"] },
      { name: "主动探测子系统", modules: ["三维激光雷达", "毫米波雷达", "超声近场传感器", "传感器清洁组件"] },
      { name: "组合导航子系统", modules: ["GNSS/RTK", "惯性测量单元", "轮速里程计", "视觉/激光里程计"] },
      { name: "环境理解子系统", modules: ["目标检测跟踪", "语义分割", "地形分类", "可通行域生成"] },
      { name: "时空基准子系统", modules: ["统一授时", "外参标定", "坐标转换", "定位完整性监测"] }
    ]
  },
  {
    id: "S03", category: "platform", title: "轮腿机动与底盘系统", subtitle: "轮式效率与腿式地形适应性的融合载体",
    purpose: "完成承载、推进、转向、主动悬架、越障、调平和制动，并将上层运动指令转换为各轮腿的协调动作。",
    subsystems: [
      { name: "轮腿执行子系统 ×4", modules: ["髋关节执行器", "膝关节执行器", "轮毂电机", "关节编码器", "末端力传感器"] },
      { name: "车体结构子系统", modules: ["承载框架", "防护壳体", "载荷安装面", "检修舱门"] },
      { name: "运动控制子系统", modules: ["全身控制器", "姿态稳定器", "轮速控制器", "足端轨迹控制"] },
      { name: "制动与驻车子系统", modules: ["再生制动", "机械制动", "失电抱闸", "坡道驻车"] },
      { name: "地形接触子系统", modules: ["防爆轮胎", "可更换胎面", "胎压监测", "防滑控制"] }
    ]
  },
  {
    id: "S04", category: "platform", title: "能源与配电系统", subtitle: "支撑机动、计算、感知和任务载荷的能量骨架",
    purpose: "负责储能、功率变换、高低压配电、补能与能量预测，在故障或低电量时实施分级卸载和安全隔离。",
    subsystems: [
      { name: "储能子系统", modules: ["动力电池包", "电池管理单元", "高压接触器", "绝缘监测"] },
      { name: "功率变换子系统", modules: ["牵引逆变器", "高压直流母线", "DC/DC 模块", "稳压滤波模块"] },
      { name: "配电保护子系统", modules: ["智能配电盒", "电子熔断器", "负载优先级控制", "应急低压电源"] },
      { name: "补能子系统", modules: ["有线充电口", "快速换电接口", "外接供电口", "充电联锁"] },
      { name: "能量管理子系统", modules: ["SOC/SOH 估算", "任务能耗预测", "功率限额管理", "低电返航策略"] }
    ]
  },
  {
    id: "S05", category: "mission", title: "通信、数据链与协同系统", subtitle: "连接平台、人员、无人机与上级指挥节点",
    purpose: "提供多链路接入、战术自组网、数据交换、链路选择和失联处置，使平台在带宽变化和电磁干扰下保持可控。",
    subsystems: [
      { name: "战术无线子系统", modules: ["宽带电台", "窄带保底电台", "多频段天线", "射频前端"] },
      { name: "自组网子系统", modules: ["MANET 路由", "网络拓扑管理", "中继服务", "服务质量控制"] },
      { name: "数据交换子系统", modules: ["消息总线", "视频编码", "态势数据适配", "时间敏感网络网关"] },
      { name: "链路管理子系统", modules: ["链路质量估计", "多链路切换", "带宽分配", "静默与低截获模式"] },
      { name: "失联处置子系统", modules: ["失联计时器", "保底指令缓存", "自主撤离策略", "安全驻停策略"] }
    ]
  },
  {
    id: "S06", category: "mission", title: "任务载荷与效应系统", subtitle: "通过标准接口快速切换侦察、中继、运输等能力",
    purpose: "为各类任务载荷提供机械、电气、数据和冷却接口，并实施载荷识别、能力注册、联锁与人在回路的授权控制。",
    subsystems: [
      { name: "通用载荷接口子系统", modules: ["机械快锁", "电源连接器", "高速数据接口", "液冷快接", "载荷身份芯片"] },
      { name: "侦察警戒载荷", modules: ["升降桅杆", "光电转塔", "声源定位阵列", "远距观察组件"] },
      { name: "支援保障载荷", modules: ["通信中继舱", "物资货架", "伤员担架模块", "工程探测模块"] },
      { name: "特种探测载荷", modules: ["核辐射探测", "化学检测", "气象组件", "爆炸物探测接口"] },
      { name: "效应控制与安全", modules: ["授权状态机", "双通道联锁", "指向禁区管理", "人工确认接口"] }
    ]
  },
  {
    id: "S07", category: "platform", title: "计算、软件与数据基础平台", subtitle: "分区承载实时控制、智能算法和任务应用",
    purpose: "提供异构计算、实时网络、容器化应用、数据记录和数字孪生接口，使功能可升级、故障可隔离、过程可复盘。",
    subsystems: [
      { name: "计算硬件子系统", modules: ["安全控制计算机", "实时运动控制器", "AI 加速计算机", "数据记录器"] },
      { name: "车载网络子系统", modules: ["确定性以太网", "CAN-FD 总线", "传感器高速链路", "网络交换机"] },
      { name: "软件平台子系统", modules: ["实时操作系统", "机器人中间件", "容器运行环境", "硬件抽象层"] },
      { name: "数据管理子系统", modules: ["任务日志", "事件回放", "数据脱敏导出", "模型/地图版本库"] },
      { name: "升级与孪生子系统", modules: ["安全启动", "签名升级", "配置管理", "仿真与硬件在环接口"] }
    ]
  },
  {
    id: "S08", category: "platform", title: "热管理与环境适应系统", subtitle: "在温度、尘水、振动等边界内维持性能",
    purpose: "对电池、电驱、计算和载荷实施分区散热与环境控制，并在极端条件下根据热裕度限制功率、保护关键设备。",
    subsystems: [
      { name: "液冷热管理子系统", modules: ["冷却泵", "板式换热器", "冷却液回路", "三通比例阀"] },
      { name: "风冷热管理子系统", modules: ["可调速风扇", "防尘滤网", "风道组件", "压差监测"] },
      { name: "加热与保温子系统", modules: ["电池加热片", "关键舱保温", "镜窗除雾", "低温启动管理"] },
      { name: "环境防护子系统", modules: ["密封组件", "呼吸阀", "排水结构", "防腐涂层"] },
      { name: "热控策略子系统", modules: ["温度传感器网络", "热模型估计", "风泵协同控制", "过温降额"] }
    ]
  },
  {
    id: "S09", category: "assurance", title: "安全、防护与网络韧性系统", subtitle: "把危险约束落实为独立、可验证的保护链",
    purpose: "覆盖功能安全、人员接近安全、网络安全、电磁兼容和被动防护；关键保护不依赖单一智能算法或单一通信链路。",
    subsystems: [
      { name: "功能安全子系统", modules: ["独立安全控制器", "双通道急停", "速度/区域限制", "故障安全状态"] },
      { name: "接近安全子系统", modules: ["近场检测", "声光告警", "维护联锁", "拖车/救援模式"] },
      { name: "网络安全子系统", modules: ["可信根", "身份认证", "加密通信", "入侵检测", "安全审计"] },
      { name: "电磁与信息防护", modules: ["EMI 滤波", "线缆屏蔽", "浪涌保护", "发射控制"] },
      { name: "车体防护子系统", modules: ["模块化防护板", "防飞溅内衬", "关键部件隔离", "抑火组件"] }
    ]
  },
  {
    id: "S10", category: "assurance", title: "健康管理与综合保障系统", subtitle: "让平台可诊断、可维修、可训练、可持续使用",
    purpose: "贯通状态监测、故障诊断、维修决策、备件与训练数据，形成从任务使用到设计改进的闭环保障。",
    subsystems: [
      { name: "状态监测子系统", modules: ["电流电压采集", "振动监测", "温度压力采集", "结构应变监测"] },
      { name: "故障诊断子系统", modules: ["故障码管理", "异常检测", "故障隔离", "剩余寿命估计"] },
      { name: "维修保障子系统", modules: ["内建测试", "维修终端", "快换件识别", "电子技术手册"] },
      { name: "任务保障子系统", modules: ["出车检查", "备件建议", "能源补给计划", "任务后数据归档"] },
      { name: "训练评估子系统", modules: ["操作训练器", "维护训练器", "场景仿真库", "人员绩效评估"] }
    ]
  }
];

const categoryNames = { mission: "任务能力", platform: "平台基础", assurance: "安全保障" };
const systemsGrid = document.querySelector("#systemsGrid");
const systemTabs = document.querySelector("#systemTabs");
const subsystemPanel = document.querySelector("#subsystemPanel");
const moduleCatalog = document.querySelector("#moduleCatalog");
const moduleSearch = document.querySelector("#moduleSearch");
const moduleSummary = document.querySelector("#moduleSummary");
const moduleEmpty = document.querySelector("#moduleEmpty");
const expandModules = document.querySelector("#expandModules");
let activeSystemId = systems[0].id;
let moduleFilter = "all";

function systemModuleCount(system) {
  return system.subsystems.reduce((sum, subsystem) => sum + subsystem.modules.length, 0);
}

function systemSearchText(system) {
  return [system.id, system.title, system.subtitle, system.purpose, ...system.subsystems.flatMap(subsystem => [subsystem.name, ...subsystem.modules])].join(" ").toLowerCase();
}

function renderSystemOverview() {
  systemsGrid.innerHTML = systems.map(system => `
    <article class="system-overview reveal visible" data-system-link="${system.id}" data-category="${system.category}" tabindex="0" role="button" aria-label="查看${system.title}的子系统">
      <span class="system-no">${system.id}</span>
      <div class="system-body">
        <span>${categoryNames[system.category]} / ${system.subsystems.length} SUBSYSTEMS / ${systemModuleCount(system)} MODULES</span>
        <h3>${system.title}</h3>
        <p>${system.purpose}</p>
        <ol class="system-points">${system.subsystems.slice(0, 3).map(subsystem => `<li>${subsystem.name}</li>`).join("")}</ol>
      </div>
    </article>
  `).join("");
  document.querySelectorAll("[data-system-link]").forEach(card => {
    const openSystem = () => {
      activeSystemId = card.dataset.systemLink;
      renderSubsystemExplorer();
      document.querySelector("#subsystems").scrollIntoView({ behavior: "smooth" });
    };
    card.addEventListener("click", openSystem);
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openSystem(); }
    });
  });
}

function renderSubsystemExplorer() {
  systemTabs.innerHTML = systems.map(system => `
    <button type="button" role="tab" aria-selected="${system.id === activeSystemId}" class="${system.id === activeSystemId ? "active" : ""}" data-system-tab="${system.id}">
      <span>${system.id}</span><b>${system.title.replace("系统", "")}</b>
    </button>
  `).join("");
  const system = systems.find(item => item.id === activeSystemId);
  subsystemPanel.innerHTML = `
    <div class="subsystem-panel-head">
      <div><span>${system.id} / ${categoryNames[system.category]}</span><h3>${system.title}</h3></div>
      <p>${system.purpose}</p>
    </div>
    <div class="subsystem-list">
      ${system.subsystems.map((subsystem, index) => `
        <article class="subsystem-row">
          <span>${system.id}-${String(index + 1).padStart(2, "0")}</span>
          <h4>${subsystem.name}</h4>
          <div class="subsystem-modules">${subsystem.modules.map(module => `<span>${module}</span>`).join("")}</div>
        </article>
      `).join("")}
    </div>
  `;
  document.querySelectorAll("[data-system-tab]").forEach(button => {
    button.addEventListener("click", () => {
      activeSystemId = button.dataset.systemTab;
      renderSubsystemExplorer();
    });
  });
}

function renderModuleCatalog() {
  const query = moduleSearch.value.trim().toLowerCase();
  const filteredSystems = systems
    .filter(system => moduleFilter === "all" || system.category === moduleFilter)
    .map(system => {
      const systemMatch = !query || [system.id, system.title, system.subtitle, system.purpose].join(" ").toLowerCase().includes(query);
      return {
        ...system,
        subsystems: system.subsystems.map(subsystem => {
          const subsystemMatch = systemMatch || subsystem.name.toLowerCase().includes(query);
          return {
            ...subsystem,
            modules: subsystem.modules.filter(module => subsystemMatch || module.toLowerCase().includes(query))
          };
        }).filter(subsystem => subsystem.modules.length)
      };
    }).filter(system => system.subsystems.length);

  moduleCatalog.innerHTML = filteredSystems.map(system => `
    <details class="module-group" data-module-group="${system.id}" ${query ? "open" : ""}>
      <summary><span>${system.id}</span><b>${system.title}</b><small>${system.subsystems.reduce((sum, subsystem) => sum + subsystem.modules.length, 0)} MODULES ＋</small></summary>
      <div class="module-content">
        ${system.subsystems.map((subsystem, index) => `
          <article class="module-subgroup">
            <h4>${system.id}-${String(index + 1).padStart(2, "0")} · ${subsystem.name}</h4>
            <div class="module-chips">${subsystem.modules.map(module => `<span>${module}</span>`).join("")}</div>
          </article>
        `).join("")}
      </div>
    </details>
  `).join("");
  const subsystemCount = filteredSystems.reduce((sum, system) => sum + system.subsystems.length, 0);
  const moduleCount = filteredSystems.reduce((sum, system) => sum + system.subsystems.reduce((inner, subsystem) => inner + subsystem.modules.length, 0), 0);
  moduleSummary.textContent = `当前显示 ${filteredSystems.length} 个系统 / ${subsystemCount} 个子系统 / ${moduleCount} 个模块`;
  moduleEmpty.hidden = filteredSystems.length > 0;
}

moduleSearch.addEventListener("input", renderModuleCatalog);
document.querySelectorAll("[data-module-filter]").forEach(button => {
  button.addEventListener("click", () => {
    moduleFilter = button.dataset.moduleFilter;
    document.querySelectorAll("[data-module-filter]").forEach(item => item.classList.toggle("active", item === button));
    renderModuleCatalog();
  });
});

expandModules.addEventListener("click", () => {
  const groups = [...document.querySelectorAll(".module-group")];
  const shouldOpen = !groups.every(group => group.open);
  groups.forEach(group => group.open = shouldOpen);
  expandModules.textContent = shouldOpen ? "全部折叠" : "全部展开";
});

const toast = document.querySelector("#toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelector("#presentationButton").addEventListener("click", event => {
  document.body.classList.toggle("presentation");
  const active = document.body.classList.contains("presentation");
  event.currentTarget.setAttribute("aria-pressed", String(active));
  event.currentTarget.textContent = active ? "退出答辩" : "答辩模式";
  showToast(active ? "答辩模式已开启；按 Esc 可退出。" : "已退出答辩模式。" );
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && document.body.classList.contains("presentation")) {
    document.body.classList.remove("presentation");
    const button = document.querySelector("#presentationButton");
    button.setAttribute("aria-pressed", "false");
    button.textContent = "答辩模式";
    showToast("已退出答辩模式。" );
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const chapterLinks = [...document.querySelectorAll(".process-rail a")];
const chapterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      chapterLinks.forEach(link => link.classList.toggle("active", link.dataset.step === entry.target.dataset.chapter));
    }
  });
}, { rootMargin: "-35% 0px -58% 0px" });
document.querySelectorAll("[data-chapter]").forEach(chapter => chapterObserver.observe(chapter));

if (typeof window !== "undefined" && window.location.hash) {
  window.addEventListener("load", () => {
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    const previousBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    target.scrollIntoView();
    document.documentElement.style.scrollBehavior = previousBehavior;
  }, { once: true });
}

renderSystemOverview();
renderSubsystemExplorer();
renderModuleCatalog();
