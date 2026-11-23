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

const brsRequirements = [
  ["BRS-01","项目应使高危任务区域内的人员直接暴露相较有人先遣基线降低。","暴露人次降低 ≥60%","使命 / MOE-01"],
  ["BRS-02","任务体系应在规定时间窗内向指挥节点提供经过置信度标注的态势产品。","有效线索端到端时延 ≤120 s","信息优势 / MOE-03"],
  ["BRS-03","项目应在典型侦察场景中达到规定的端到端任务完成水平。","场景任务完成率 ≥90%","任务效能 / MOE-02"],
  ["BRS-04","解决方案应覆盖轮式平台难以持续通行的规定复杂地形任务区域。","规定障碍谱区域可达率 ≥85%","能力差距 / MOE-04"],
  ["BRS-05","解决方案应支持侦察警戒、通信中继、物资伴随、危险区探测和伤员后送任务类。","5 类任务均完成场景演示","任务组合"],
  ["BRS-06","组织应能按任务快速重构平台载荷与权限配置。","任务转换准备 ≤30 min","开放体系"],
  ["BRS-07","平台运行应与现有任务指挥、战术通信导航和综合保障体系互操作。","关键接口符合率 100%","体系协同"],
  ["BRS-08","所有高风险行为应处于授权人员监督、确认或可接管的控制链内。","未经授权高风险动作 0 起","安全政策 / MOE-06"],
  ["BRS-09","项目应保证任务、授权、告警、接管与软件版本事件可审计。","关键事件记录完整率 100%","治理与问责"],
  ["BRS-10","解决方案应在弱 GNSS、链路退化和部分故障条件下维持安全可控。","偏离场景全部进入规定降级状态","体系韧性"],
  ["BRS-11","标准任务剖面下应满足一次部署周期内的持续任务需求。","持续任务时间 ≥8 h","使用效能 / MOE-05"],
  ["BRS-12","项目应建立覆盖采购、部署、运行、支持和弃置的全寿命保障闭环。","5 类生命周期概念均有责任人与证据","全寿命成本"],
  ["BRS-13","项目应采用开放、模块化和可演进的架构原则控制供应与升级风险。","关键任务载荷与软件接口开放率 100%","演进能力"],
  ["BRS-14","项目应以场景化试验和可追溯证据证明需求得到满足。","BRS—StRS—验证双向追溯率 100%","验收治理"]
];

const stakeholders = [
  {id:"SH-01",group:"决策与治理",name:"任务指挥员 / 作战决策机构",role:"定义任务效果、优先级、规则与授权边界",influence:"高",strategy:"持续参与；批准 BRS、ConOps 与任务规则"},
  {id:"SH-02",group:"直接用户",name:"平台操作员 / 任务载荷操作员",role:"监督自主任务、复核线索、接管与急停；关注态势可理解性",influence:"高",strategy:"访谈、人在环原型、每轮场景评审"},
  {id:"SH-03",group:"直接用户",name:"伴随作战分队",role:"接收平台态势与支援；关注协同安全、噪声和队形适配",influence:"高",strategy:"任务演练、现场观察、联合验收"},
  {id:"SH-04",group:"保障用户",name:"运输、补能与维修保障人员",role:"部署、回收、维护、换件与软件更新；关注可达性和工时",influence:"中",strategy:"维修任务分析、保障性演示"},
  {id:"SH-05",group:"采购治理",name:"采购 / 项目管理机构",role:"成本、进度、合同、供应链和验收证据",influence:"高",strategy:"里程碑评审、权衡决策与配置控制"},
  {id:"SH-06",group:"研制验证",name:"系统集成与软件算法团队",role:"将相关方需求转化为架构和系统需求并集成验证",influence:"高",strategy:"需求工作坊、接口评审、模型与试验闭环"},
  {id:"SH-07",group:"研制验证",name:"试验鉴定 / 安全评估机构",role:"独立验证性能、安全、网络韧性与适用性",influence:"高",strategy:"早期介入，联合定义验证方法和通过准则"},
  {id:"SH-08",group:"外部体系",name:"战术指挥、通信导航与无人机系统",role:"交换任务、态势、授时、定位增强和协同状态",influence:"中",strategy:"接口控制文件、联试与互操作试验"},
  {id:"SH-09",group:"治理约束",name:"网络安全、频谱与数据管理机构",role:"身份认证、密码、频谱使用、数据分级与审计",influence:"高",strategy:"合规审查、渗透试验、频谱协调"},
  {id:"SH-10",group:"生命周期",name:"训练组织 / 院校",role:"操作维护训练、场景库、资格认证与绩效评估",influence:"中",strategy:"训练需求分析、模拟器与教材评审"},
  {id:"SH-11",group:"生命周期",name:"退役与环境处置单位",role:"密钥清除、电池危险品处置、敏感部件销毁与材料回收",influence:"中",strategy:"退役方案与环境合规检查"},
  {id:"SH-12",group:"受影响方",name:"任务区域友军、非战斗人员与基础设施管理方",role:"可能受平台运动、传感、通信和安全风险影响",influence:"中",strategy:"安全区域、告警、隐私与损害控制评审"}
];

const strsRequirements = [
  {id:"StR-MIS-01",cat:"mission",text:"平台应接收包含任务区域、时间窗、优先信息需求、禁行区与授权规则的任务包。",source:"SH-01 指挥员",priority:"Must",verify:"演示",trace:"BRS-02/08"},
  {id:"StR-MIS-02",cat:"mission",text:"操作员应能在任务开始前检查、修改并批准系统生成的任务计划。",source:"SH-02 操作员",priority:"Must",verify:"演示",trace:"BRS-08"},
  {id:"StR-MIS-03",cat:"mission",text:"平台应在有效线索产生后 120 秒内向指挥节点提交带位置、时间和置信度的态势产品。",source:"SH-01 指挥员",priority:"Must",verify:"试验",trace:"BRS-02"},
  {id:"StR-MIS-04",cat:"mission",text:"平台应支持侦察警戒、通信中继、物资伴随、危险区探测和伤员后送五类任务配置。",source:"SH-01/03",priority:"Must",verify:"演示",trace:"BRS-05"},
  {id:"StR-MIS-05",cat:"mission",text:"操作员应能在不终止安全监控的条件下暂停、恢复或终止当前任务。",source:"SH-02 操作员",priority:"Must",verify:"试验",trace:"BRS-08"},
  {id:"StR-MIS-06",cat:"mission",text:"平台应向伴随分队提供自身位置、预计路线、运动意图和危险告警。",source:"SH-03 伴随分队",priority:"Should",verify:"演示",trace:"BRS-07"},
  {id:"StR-MIS-07",cat:"mission",text:"系统应保存任务计划、关键态势产品和任务结果，供授权人员复盘导出。",source:"SH-01/09",priority:"Must",verify:"检查",trace:"BRS-09"},
  {id:"StR-MOB-01",cat:"mobility",text:"平台应在规定障碍谱条件下达到不低于 85% 的任务区域可达率。",source:"SH-01/03",priority:"Must",verify:"试验",trace:"BRS-04"},
  {id:"StR-MOB-02",cat:"mobility",text:"平台应在标准混合机动与侦察载荷剖面下连续执行任务不少于 8 小时。",source:"SH-01/04",priority:"Must",verify:"试验",trace:"BRS-11"},
  {id:"StR-MOB-03",cat:"mobility",text:"平台应根据地形风险在轮式巡航、腿式越障和车体调平能力之间安全切换。",source:"SH-02 操作员",priority:"Must",verify:"试验",trace:"BRS-04"},
  {id:"StR-MOB-04",cat:"mobility",text:"平台应在 GNSS 不可用时持续提供带完整性状态的相对定位与局部地图。",source:"SH-01/08",priority:"Must",verify:"试验",trace:"BRS-10"},
  {id:"StR-MOB-05",cat:"mobility",text:"平台应在昼夜、低照度、烟尘和雨雾代表性条件下生成可通行域。",source:"SH-03 伴随分队",priority:"Should",verify:"试验",trace:"BRS-03/04"},
  {id:"StR-MOB-06",cat:"mobility",text:"感知产品应标记传感源、采集时间、坐标基准和算法置信度。",source:"SH-01/07",priority:"Must",verify:"分析",trace:"BRS-02/14"},
  {id:"StR-MOB-07",cat:"mobility",text:"平台应在能源不足以完成剩余任务时向操作员报告可解释的能量预测与撤离建议。",source:"SH-02/04",priority:"Must",verify:"试验",trace:"BRS-10/11"},
  {id:"StR-MOB-08",cat:"mobility",text:"平台任务载荷机械、电气和数据接口应支持在 30 分钟内完成授权载荷转换与识别。",source:"SH-04/06",priority:"Should",verify:"演示",trace:"BRS-06/13"},
  {id:"StR-SAF-01",cat:"safety",text:"任何高风险动作开始前，系统应获得与人员身份、任务和时限绑定的有效授权。",source:"SH-01/07",priority:"Must",verify:"试验",trace:"BRS-08"},
  {id:"StR-SAF-02",cat:"safety",text:"平台不得在缺少授权人员确认时自主决定对人员施加致命效应。",source:"SH-01 安全政策",priority:"Must",verify:"分析+试验",trace:"BRS-08"},
  {id:"StR-SAF-03",cat:"safety",text:"操作员应能通过独立于任务自治软件的控制链触发紧急停车。",source:"SH-02/07",priority:"Must",verify:"试验",trace:"BRS-08/10"},
  {id:"StR-SAF-04",cat:"safety",text:"平台检测到人员进入动态安全区时应按风险等级告警、限速或停车。",source:"SH-03/12",priority:"Must",verify:"试验",trace:"BRS-08"},
  {id:"StR-SAF-05",cat:"safety",text:"通信中断超过任务预设时限时，平台应停止高风险行为并转入撤离或安全驻停状态。",source:"SH-01/02",priority:"Must",verify:"试验",trace:"BRS-10"},
  {id:"StR-SAF-06",cat:"safety",text:"操作界面应同时显示平台模式、授权状态、链路质量、定位完整性、能源和关键故障。",source:"SH-02 操作员",priority:"Must",verify:"演示",trace:"BRS-08/10"},
  {id:"StR-SAF-07",cat:"safety",text:"系统应对任务命令、授权、告警、人工接管、配置和软件版本变更形成防篡改审计记录。",source:"SH-09 治理机构",priority:"Must",verify:"检查+试验",trace:"BRS-09"},
  {id:"StR-SAF-08",cat:"safety",text:"关键网络接口应对设备与人员进行身份认证，并保护传输数据的机密性和完整性。",source:"SH-09 网安机构",priority:"Must",verify:"试验",trace:"BRS-07/10"},
  {id:"StR-SUP-01",cat:"support",text:"保障人员应能在不拆解相邻关键组件的条件下更换规定的现场可更换单元。",source:"SH-04 维修人员",priority:"Should",verify:"演示",trace:"BRS-12/13"},
  {id:"StR-SUP-02",cat:"support",text:"平台应在任务前后提供自动健康检查、故障隔离结果和备件建议。",source:"SH-04 保障人员",priority:"Must",verify:"试验",trace:"BRS-12"},
  {id:"StR-SUP-03",cat:"support",text:"软件、地图和模型更新应验证来源、完整性、兼容性并支持受控回退。",source:"SH-06/09",priority:"Must",verify:"试验",trace:"BRS-09/13"},
  {id:"StR-SUP-04",cat:"support",text:"训练系统应提供正常、失联、定位退化、动力故障和急停场景供操作与维护人员训练。",source:"SH-10 训练组织",priority:"Should",verify:"检查+演示",trace:"BRS-10/12"},
  {id:"StR-SUP-05",cat:"support",text:"系统验收应为每条 Must 级相关方需求提供经批准的验证方法、通过准则和结果证据。",source:"SH-05/07",priority:"Must",verify:"检查",trace:"BRS-14"},
  {id:"StR-SUP-06",cat:"support",text:"平台应提供与任务指挥、战术网络、运输固定、补能和载荷相关的受控接口资料。",source:"SH-05/08",priority:"Must",verify:"检查",trace:"BRS-07/13"},
  {id:"StR-SUP-07",cat:"support",text:"退役时应能清除密钥与任务数据，并对电池和敏感部件执行可审计的合规处置。",source:"SH-09/11",priority:"Must",verify:"演示+检查",trace:"BRS-12"}
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

function renderAssignmentTwo() {
  const brsBody = document.querySelector("#brsTableBody");
  if (brsBody) {
    brsBody.innerHTML = brsRequirements.map(item => `<tr><td>${item[0]}</td><td>${item[1]}</td><td>${item[2]}</td><td>${item[3]}</td></tr>`).join("");
  }

  const groupCounts = stakeholders.reduce((counts, stakeholder) => {
    counts[stakeholder.group] = (counts[stakeholder.group] || 0) + 1;
    return counts;
  }, {});
  const stakeholderMap = document.querySelector("#stakeholderMap");
  if (stakeholderMap) {
    stakeholderMap.innerHTML = Object.entries(groupCounts).map(([group, count], index) => `<article><span>DOMAIN / ${String(index + 1).padStart(2, "0")}</span><b>${group}</b><small>${count} 类核心相关方</small></article>`).join("");
  }
  const stakeholderBody = document.querySelector("#stakeholderTableBody");
  if (stakeholderBody) {
    stakeholderBody.innerHTML = stakeholders.map(item => `<tr><td>${item.id}</td><td><b>${item.name}</b><br><small>${item.group}</small></td><td>${item.role}</td><td class="influence-${item.influence === "高" ? "high" : "medium"}">${item.influence}</td><td>${item.strategy}</td></tr>`).join("");
  }
}

let strsFilter = "all";
function renderStrs() {
  const searchInput = document.querySelector("#strsSearch");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
  const filtered = strsRequirements.filter(item => {
    const matchesCategory = strsFilter === "all" || item.cat === strsFilter;
    const matchesSearch = !query || Object.values(item).join(" ").toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const strsBody = document.querySelector("#strsTableBody");
  if (strsBody) {
    const categoryLabels = { mission: "任务", mobility: "机动感知", safety: "安全人因", support: "保障全寿命" };
    strsBody.innerHTML = filtered.length ? filtered.map(item => `<tr><td>${item.id}<br><small>${categoryLabels[item.cat]}</small></td><td>${item.text}</td><td>${item.source}</td><td class="priority-${item.priority.toLowerCase()}">${item.priority}</td><td>${item.verify}</td><td>${item.trace}</td></tr>`).join("") : `<tr><td colspan="6">没有匹配需求，请调整关键词或类别。</td></tr>`;
  }
  const count = document.querySelector("#strsCount");
  if (count) count.textContent = String(filtered.length).padStart(2, "0");
}

function viewForHash(hash) {
  if (hash.startsWith("#a3-") || hash === "#module3-top") return "module3";
  if (hash === "#game-top") return "game";
  if (hash.startsWith("#a2-") || hash === "#module2-top") return "module2";
  if (["#module1-top", "#mission", "#sos", "#vehicle", "#systems", "#subsystems", "#modules", "#references"].includes(hash)) return "module1";
  return "hub";
}

function setView(view, targetId, smooth = true) {
  document.body.dataset.view = view;
  document.querySelectorAll("[data-view-target]").forEach(button => button.classList.toggle("active", button.dataset.viewTarget === view));
  const status = document.querySelector(".top-status b");
  if (status) status.textContent = ({ hub: "READY", module1: "EXPLORE", module2: "DEFINE", module3: "ARCHITECT", game: "CHALLENGE" })[view] || "READY";
  const footerFlow = document.querySelector("footer>p");
  if (footerFlow) footerFlow.textContent = ({ module1: "任务 → 体系 → 整机 → 系统 → 子系统 → 模块", module2: "BMA → BRS → ConOps → OpsCon → Stakeholders → StRS", module3: "SyRS → 架构 → 控制闭环 → STPA", game: "移动 → 越障 → 问答 → 安全返回" })[view] || "认识系统 → 定义需求 → 构建架构 → 互动挑战";
  const id = targetId || ({ module1: "module1-top", module2: "module2-top", module3: "module3-top", game: "game-top", hub: "top" })[view];
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

document.querySelectorAll("[data-view-target]").forEach(button => {
  button.addEventListener("click", () => {
    const view = button.dataset.viewTarget;
    const id = ({ module1: "module1-top", module2: "module2-top", module3: "module3-top", game: "game-top", hub: "top" })[view] || "top";
    history.replaceState(null, "", `#${id}`);
    setView(view, id);
  });
});

document.querySelectorAll("[data-open-view]").forEach(card => {
  const open = () => {
    const view = card.dataset.openView;
    const id = ({ module1: "module1-top", module2: "module2-top", module3: "module3-top", game: "game-top" })[view] || "top";
    history.replaceState(null, "", `#${id}`);
    setView(view, id);
  };
  card.addEventListener("click", open);
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
  });
});

document.querySelector(".brand")?.addEventListener("click", event => {
  event.preventDefault();
  history.replaceState(null, "", "#top");
  setView("hub", "top");
});

document.querySelector("#strsSearch")?.addEventListener("input", renderStrs);
document.querySelectorAll("[data-strs-filter]").forEach(button => {
  button.addEventListener("click", () => {
    strsFilter = button.dataset.strsFilter;
    document.querySelectorAll("[data-strs-filter]").forEach(item => item.classList.toggle("active", item === button));
    renderStrs();
  });
});

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
    document.body.dataset.view = viewForHash(window.location.hash);
    document.querySelectorAll("[data-view-target]").forEach(button => button.classList.toggle("active", button.dataset.viewTarget === document.body.dataset.view));
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
renderAssignmentTwo();
renderStrs();

const initialView = viewForHash(window.location.hash);
document.body.dataset.view = initialView;
document.querySelectorAll("[data-view-target]").forEach(button => button.classList.toggle("active", button.dataset.viewTarget === initialView));

/* Interactive visual assets */
const hotspotCopy = {
  sensor: { title: "多模态感知与定位", text: "相机、激光雷达、惯性与轮速信息共同输出环境模型、平台状态及置信度；完整性不足时触发降级。" },
  body: { title: "任务计算与模块化车体", text: "承载任务计算、通信、能源和载荷接口；任务软件与安全监督保持受控隔离。" },
  leg: { title: "独立轮腿执行机构", text: "轮端负责高效滚行，关节负责越障与车体调平；闭环控制限制速度、姿态和接触力。" }
};
document.querySelectorAll("[data-hotspot]").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll("[data-hotspot]").forEach(item => item.classList.toggle("active", item === button));
  const copy = hotspotCopy[button.dataset.hotspot];
  const detail = document.querySelector("#hotspotDetail");
  if (detail && copy) detail.innerHTML = `<b>${copy.title}</b><p>${copy.text}</p>`;
}));

const traceExplanations = [
  "业务目标首先形成相关方约束：任务不能因链路异常演变为不可控状态。",
  "相关方需求把目标转成可验证期望：失联时必须停止高风险行为并进入安全状态。",
  "系统需求定义计时、模式判定和撤离或驻停响应，并为试验指定通过准则。",
  "架构将该需求分配给通信监测、模式管理器、安全监督器和执行制动链。",
  "安全约束禁止在链路完整性未知时继续高风险动作，形成可追溯的 STPA 控制约束。"
];
let traceTimer = 0;
function setTraceStep(index) {
  const steps = [...document.querySelectorAll("[data-trace-step]")];
  steps.forEach((step, itemIndex) => {
    step.classList.toggle("active", itemIndex === index);
    step.classList.toggle("dimmed", itemIndex !== index);
  });
  const explanation = document.querySelector("#traceExplanation");
  if (explanation) explanation.textContent = traceExplanations[index] || traceExplanations[0];
}
function playTrace() {
  clearInterval(traceTimer);
  let index = 0;
  setTraceStep(index);
  traceTimer = window.setInterval(() => {
    index += 1;
    if (index >= traceExplanations.length) return clearInterval(traceTimer);
    setTraceStep(index);
  }, 1050);
}
document.querySelector("#playTrace")?.addEventListener("click", playTrace);
document.querySelectorAll("[data-trace-step]").forEach(button => button.addEventListener("click", () => {
  clearInterval(traceTimer);
  setTraceStep(Number(button.dataset.traceStep));
}));

const architectureCopy = {
  platform: { title: "WL-X 关注系统", text: "六个逻辑能力域通过受控接口形成感知—决策—执行—反馈闭环。", input: "任务、环境、健康与人工控制", output: "机动、态势产品、状态与安全告警", req: "SYS-FUN-01 至 SYS-QUA-06" },
  sensing: { title: "感知与定位", text: "融合环境感知、平台状态和定位完整性，为规划与安全监督提供带置信度的数据。", input: "相机、雷达、惯性、轮速、GNSS", output: "环境模型、位姿、完整性标志", req: "SYS-PER-02 / StR-MOB-03" },
  planning: { title: "任务与运动规划", text: "把任务目标与地形约束转换为可执行路径、速度和姿态参考。", input: "任务包、环境模型、安全包络", output: "轨迹、模式请求、重规划事件", req: "SYS-FUN-01 / StR-MIS-02" },
  control: { title: "运动控制", text: "协调轮端和关节执行器，在接触约束内跟踪轨迹并稳定车体。", input: "轨迹、位姿、轮腿状态", output: "轮端转矩、关节位置与制动指令", req: "SYS-FUN-01 / SYS-SAF-04" },
  network: { title: "通信与人机接口", text: "交换任务、态势、健康和审计数据，并向人员提供监督、接管与急停通道。", input: "任务网络、操作员控制、平台状态", output: "任务确认、态势产品、告警与审计", req: "SYS-INT-03 / StR-SAF-06" },
  energy: { title: "能源与健康管理", text: "管理供电、热状态和故障诊断，并根据可用能源限制任务能力。", input: "电池、电机、热与故障传感", output: "能量预算、健康状态、隔离建议", req: "SYS-QUA-06 / StR-SUP-02" },
  safety: { title: "安全监督", text: "独立检查授权、速度、位置、链路和健康约束，必要时请求降级、驻停或急停。", input: "控制命令、完整性、链路、人工急停", output: "允许/抑制、限速、降级、制动", req: "SYS-SAF-04 / SYS-SAF-05" }
};

function renderArchitectureDetail(key) {
  const copy = architectureCopy[key];
  const detail = document.querySelector("#architectureDetail");
  if (!copy || !detail) return;
  document.querySelectorAll("[data-arch-node]").forEach(node => node.classList.toggle("active", node.dataset.archNode === key));
  detail.innerHTML = `<span>ARCHITECTURE NODE</span><h3>${copy.title}</h3><p>${copy.text}</p><dl><div><dt>输入</dt><dd>${copy.input}</dd></div><div><dt>输出</dt><dd>${copy.output}</dd></div><div><dt>关联需求</dt><dd>${copy.req}</dd></div></dl>`;
}
document.querySelectorAll("[data-arch-node]").forEach(node => node.addEventListener("click", () => renderArchitectureDetail(node.dataset.archNode)));

function rectangleEdgePoint(rect, toward, rootRect) {
  const center = { x: rect.left - rootRect.left + rect.width / 2, y: rect.top - rootRect.top + rect.height / 2 };
  const dx = toward.x - center.x;
  const dy = toward.y - center.y;
  const safeX = Math.abs(dx) < .001 ? Infinity : (rect.width / 2) / Math.abs(dx);
  const safeY = Math.abs(dy) < .001 ? Infinity : (rect.height / 2) / Math.abs(dy);
  const scale = Math.min(safeX, safeY);
  return { x: center.x + dx * scale, y: center.y + dy * scale, center };
}
function drawArchitectureLines() {
  const map = document.querySelector("#architectureMap");
  const svg = document.querySelector("#architectureLines");
  const core = map?.querySelector(".arch-core");
  if (!map || !svg || !core) return;
  const rootRect = map.getBoundingClientRect();
  if (!rootRect.width || !rootRect.height) return;
  const coreRect = core.getBoundingClientRect();
  const coreCenter = { x: coreRect.left - rootRect.left + coreRect.width / 2, y: coreRect.top - rootRect.top + coreRect.height / 2 };
  svg.setAttribute("viewBox", `0 0 ${rootRect.width} ${rootRect.height}`);
  svg.innerHTML = [...map.querySelectorAll(".arch-node")].map(node => {
    const nodeRect = node.getBoundingClientRect();
    const nodeCenter = { x: nodeRect.left - rootRect.left + nodeRect.width / 2, y: nodeRect.top - rootRect.top + nodeRect.height / 2 };
    const start = rectangleEdgePoint(coreRect, nodeCenter, rootRect);
    const end = rectangleEdgePoint(nodeRect, coreCenter, rootRect);
    return `<line x1="${start.x.toFixed(1)}" y1="${start.y.toFixed(1)}" x2="${end.x.toFixed(1)}" y2="${end.y.toFixed(1)}"></line>`;
  }).join("");
}
window.addEventListener("resize", drawArchitectureLines, { passive: true });
new ResizeObserver(drawArchitectureLines).observe(document.querySelector("#architectureMap"));

const safetyScenarios = {
  normal: { code: "NOMINAL", title: "正常任务闭环", text: "任务控制器在授权包络内规划运动；安全监督器持续检查速度、地形置信度、链路与健康状态。", bullets: ["状态：M3 自主任务", "约束：轨迹不得超出可通行域和授权区域", "响应：保持闭环控制并持续审计"], active: ["mission","controller","planner","actuator","plant","feedback","safety"] },
  comms: { code: "COMMS LOSS", title: "通信中断：转入受限自主与安全处置", text: "链路质量跌破阈值后，网络接口上报异常；任务控制器停止接收新任务，安全监督器启动失联计时并限制行为。", bullets: ["状态：M3 → M4 降级运行", "异常链路：通信反馈缺失", "响应：限速、撤向恢复点；超时则驻停"], active: ["controller","planner","actuator","plant","feedback","safety"] },
  perception: { code: "PERCEPTION DEGRADED", title: "感知异常：降低速度并收紧可行域", text: "定位或地形完整性不足时，规划器不得继续使用未验证的环境模型；安全监督器限制速度并请求重新定位。", bullets: ["状态：M3 → M4", "异常链路：感知置信度不足", "响应：减速、驻停扫描或人工接管"], active: ["planner","actuator","plant","feedback","safety","human"] },
  estop: { code: "EMERGENCY STOP", title: "紧急停车：独立链路覆盖任务控制", text: "人工急停或安全监督触发后，独立安全链直接请求受控制动并抑制新的运动控制命令。", bullets: ["状态：任意运行态 → 安全驻停", "异常链路：任务控制被覆盖", "响应：制动保持、切断驱动使能、记录事件"], active: ["actuator","plant","feedback","safety","human"] }
};
function setSafetyScenario(key) {
  const scenario = safetyScenarios[key];
  if (!scenario) return;
  document.querySelectorAll("[data-safety-scenario]").forEach(button => button.classList.toggle("active", button.dataset.safetyScenario === key));
  const activeSet = new Set(scenario.active);
  document.querySelectorAll("[data-control-node]").forEach(node => {
    node.classList.toggle("active", activeSet.has(node.dataset.controlNode));
    node.classList.toggle("dimmed", !activeSet.has(node.dataset.controlNode));
  });
  document.querySelectorAll("#controlFlow>i").forEach((arrow, index) => arrow.classList.toggle("active", key === "normal" || index < 2 || (key !== "estop" && index > 2)));
  const state = document.querySelector("#safetyState");
  if (state) state.innerHTML = `<span>${scenario.code}</span><h3>${scenario.title}</h3><p>${scenario.text}</p><ul>${scenario.bullets.map(item => `<li>${item}</li>`).join("")}</ul>`;
}
document.querySelectorAll("[data-safety-scenario]").forEach(button => button.addEventListener("click", () => setSafetyScenario(button.dataset.safetyScenario)));

const lightbox = document.querySelector("#mediaLightbox");
function closeLightbox() { if (lightbox) lightbox.hidden = true; }
document.querySelectorAll("[data-lightbox-src]").forEach(item => {
  const open = () => {
    const image = document.querySelector("#mediaLightboxImage");
    if (!lightbox || !image) return;
    image.src = item.dataset.lightboxSrc;
    image.alt = item.querySelector("img")?.alt || "结构大图";
    lightbox.hidden = false;
    document.querySelector("#mediaLightboxClose")?.focus();
  };
  item.addEventListener("click", open);
  item.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
});
document.querySelector("#mediaLightboxClose")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });

/* Immersive presentation mode */
class PresentationController {
  constructor() {
    this.shell = document.querySelector("#presentationShell");
    this.stage = document.querySelector("#presentationStage");
    this.button = document.querySelector("#presentationButton");
    this.active = false;
    this.index = 0;
    this.slides = [];
    this.current = null;
    this.placeholder = null;
    this.savedScroll = 0;
    this.autoplay = false;
    this.autoplayTimer = 0;
    this.suppressFullscreenExit = false;
    this.requestedFullscreen = false;
    this.slideSets = {
      hub: ["#top","#module1-top","#mission","#sos","#vehicle","#systems","#module2-top","#a2-bma","#a2-brs","#a2-conops","#a2-opscon","#a2-strs","#module3-top","#a3-syrs","#a3-architecture","#a3-control"],
      module1: ["#module1-top","#mission","#sos","#vehicle","#systems","#subsystems","#modules"],
      module2: ["#module2-top","#a2-bma","#a2-brs","#a2-conops","#a2-opscon","#a2-stakeholders","#a2-strs"],
      module3: ["#module3-top","#a3-syrs","#a3-architecture","#a3-control"],
      game: ["#game-top"]
    };
    this.bind();
  }
  bind() {
    this.button?.addEventListener("click", () => {
      if (this.active) return this.exit();
      this.button.classList.add("is-scanning");
      window.setTimeout(() => { this.button.classList.remove("is-scanning"); this.enter(); }, 420);
    });
    document.querySelectorAll("[data-start-presentation]").forEach(button => button.addEventListener("click", () => this.enter(button.dataset.startPresentation)));
    document.querySelector("#presentationPrev")?.addEventListener("click", () => this.go(-1, true));
    document.querySelector("#presentationNext")?.addEventListener("click", () => this.go(1, true));
    document.querySelector("#presentationAutoplay")?.addEventListener("click", () => this.toggleAutoplay());
    document.querySelector("#presentationReplay")?.addEventListener("click", () => this.animateCurrent());
    document.querySelector("#presentationFullscreen")?.addEventListener("click", () => this.toggleFullscreen());
    document.querySelector("#presentationExit")?.addEventListener("click", () => this.exit());
    document.querySelector("#presentationExitTop")?.addEventListener("click", () => this.exit());
    document.addEventListener("keydown", event => this.onKey(event));
    document.addEventListener("fullscreenchange", () => {
      if (!document.fullscreenElement && this.active && this.requestedFullscreen && !this.suppressFullscreenExit) this.exit(false);
      this.suppressFullscreenExit = false;
    });
  }
  async enter(forcedView) {
    if (this.active) return;
    const view = forcedView || document.body.dataset.view || "hub";
    this.slides = (this.slideSets[view] || this.slideSets.hub).map(selector => document.querySelector(selector)).filter(Boolean);
    if (!this.slides.length) return;
    this.active = true;
    this.savedScroll = window.scrollY;
    this.savedFocus = document.activeElement;
    this.index = 0;
    document.body.classList.add("presentation-active");
    this.shell.setAttribute("aria-hidden", "false");
    this.shell.classList.add("entering");
    this.button?.setAttribute("aria-pressed", "true");
    this.button?.querySelector("span") && (this.button.querySelector("span").textContent = "退出演示");
    this.show(0);
    window.setTimeout(() => this.shell.classList.remove("entering"), 600);
    this.requestedFullscreen = false;
    try {
      if (!document.fullscreenElement && this.shell.requestFullscreen) {
        await this.shell.requestFullscreen();
        this.requestedFullscreen = true;
      }
    } catch (_) {
      showToast("未能进入全屏，已切换为沉浸演示视图。");
    }
  }
  restoreCurrent() {
    if (!this.current || !this.placeholder?.parentNode) return;
    this.placeholder.parentNode.insertBefore(this.current, this.placeholder);
    this.placeholder.remove();
    this.current.classList.remove("presentation-animate");
    this.current = null;
    this.placeholder = null;
  }
  show(index) {
    this.restoreCurrent();
    this.index = Math.max(0, Math.min(this.slides.length - 1, index));
    const slide = this.slides[this.index];
    this.placeholder = document.createComment(`presentation-placeholder:${slide.id}`);
    slide.parentNode.insertBefore(this.placeholder, slide);
    this.stage.replaceChildren(slide);
    this.current = slide;
    this.stage.scrollTop = 0;
    const title = slide.querySelector("h2,h1")?.textContent.replace(/\s+/g, " ").trim() || "演示模式";
    document.querySelector("#presentationChapterTitle").textContent = title;
    document.querySelector("#presentationProgressText").textContent = `${this.index + 1} / ${this.slides.length}`;
    document.querySelector("#presentationProgressBar").style.width = `${((this.index + 1) / this.slides.length) * 100}%`;
    document.querySelector("#presentationPrev").disabled = this.index === 0;
    document.querySelector("#presentationNext").disabled = this.index === this.slides.length - 1;
    this.stage.classList.remove("slide-enter");
    this.shell.classList.remove("transitioning");
    void this.stage.offsetWidth;
    this.stage.classList.add("slide-enter");
    this.shell.classList.add("transitioning");
    window.setTimeout(() => this.shell.classList.remove("transitioning"), 580);
    this.animateCurrent();
    if (slide.id === "a3-architecture") window.setTimeout(drawArchitectureLines, 80);
    if (this.autoplay) this.scheduleAutoplay();
  }
  animateCurrent() {
    if (!this.current) return;
    this.current.classList.remove("presentation-animate");
    void this.current.offsetWidth;
    this.current.classList.add("presentation-animate");
    if (this.current.id === "a3-syrs") playTrace();
    if (this.current.id === "a3-control") setSafetyScenario("normal");
  }
  go(delta, manual = false) {
    if (!this.active) return;
    if (manual && this.autoplay) this.toggleAutoplay(false);
    const next = this.index + delta;
    if (next < 0 || next >= this.slides.length) return;
    this.show(next);
  }
  scheduleAutoplay() {
    clearTimeout(this.autoplayTimer);
    const length = this.current?.innerText.length || 0;
    const delay = Math.max(8000, Math.min(12000, 8000 + length * 4));
    this.autoplayTimer = window.setTimeout(() => {
      if (this.index < this.slides.length - 1) this.show(this.index + 1);
      else this.toggleAutoplay(false);
    }, delay);
  }
  toggleAutoplay(force) {
    this.autoplay = typeof force === "boolean" ? force : !this.autoplay;
    const button = document.querySelector("#presentationAutoplay");
    button.setAttribute("aria-pressed", String(this.autoplay));
    button.textContent = this.autoplay ? "暂停" : "自动播放";
    clearTimeout(this.autoplayTimer);
    if (this.autoplay) this.scheduleAutoplay();
  }
  async toggleFullscreen() {
    try {
      if (document.fullscreenElement) {
        this.suppressFullscreenExit = true;
        await document.exitFullscreen();
      } else if (this.shell.requestFullscreen) {
        await this.shell.requestFullscreen();
        this.requestedFullscreen = true;
      }
    } catch (_) { showToast("当前设备暂不支持切换全屏。"); }
  }
  onKey(event) {
    if (!this.active) {
      if (event.key === "Escape" && !lightbox?.hidden) closeLightbox();
      return;
    }
    if (["INPUT","TEXTAREA","SELECT"].includes(event.target.tagName)) return;
    if (event.key === "ArrowRight") { event.preventDefault(); this.go(1, true); }
    else if (event.key === "ArrowLeft") { event.preventDefault(); this.go(-1, true); }
    else if (event.code === "Space") { event.preventDefault(); this.toggleAutoplay(); }
    else if (event.key.toLowerCase() === "f") { event.preventDefault(); this.toggleFullscreen(); }
    else if (event.key === "Escape") { event.preventDefault(); this.exit(); }
  }
  async exit(exitFullscreen = true) {
    if (!this.active) return;
    this.toggleAutoplay(false);
    this.restoreCurrent();
    this.active = false;
    document.body.classList.remove("presentation-active");
    this.shell.setAttribute("aria-hidden", "true");
    this.stage.replaceChildren();
    this.button?.setAttribute("aria-pressed", "false");
    this.button?.querySelector("span") && (this.button.querySelector("span").textContent = "演示模式");
    if (exitFullscreen && document.fullscreenElement) {
      this.suppressFullscreenExit = true;
      try { await document.exitFullscreen(); } catch (_) {}
    }
    requestAnimationFrame(() => window.scrollTo({ top: this.savedScroll, behavior: "auto" }));
    this.savedFocus?.focus?.();
    showToast("已退出演示模式，并返回原阅读位置。");
  }
}
const presentationController = new PresentationController();

/* Lightweight fixed-step platform challenge */
const compactQuestions = {
  1: [
    ["Mission 层主要回答什么？",["系统为什么存在","每个螺栓规格","单个载荷参数","每次维修步骤"],0,"Mission 定义系统存在的目的、任务效果与边界。"],
    ["SoS 分析关注什么？",["多个独立系统如何协同产生能力","单个传感器内部电路","单一执行器控制律","单个部件材料"],0,"SoS 关注可独立管理的系统之间如何协同实现更高层任务。"],
    ["系统与子系统的合理关系是？",["系统分配职责，子系统进一步承载功能","两者完全等同","子系统只表示外观","系统不需要接口"],0,"系统边界先明确职责，再分解到子系统与模块。"],
    ["四轮腿独立驱动的主要优势是？",["兼顾滚行效率、稳定与主动调平","无需控制器","没有能耗","永不故障"],0,"四个支撑单元带来稳定与冗余，但控制与能量耦合更复杂。"],
    ["轮腿模块属于哪一类职责？",["把控制命令转化为平台运动","定义业务目标","制定运行政策","确定相关方优先级"],0,"轮腿模块是机动执行链的末端执行单元。"],
    ["开放载荷接口的价值是？",["在受控边界内更换任务载荷","取消接口标准","让任何设备直接接入","替代安全分析"],0,"开放接口提高适配性，但仍需机械、电气、数据和安全约束。"],
    ["感知定位系统应输出什么？",["状态估计及其置信度","只有彩色图片","固定答案","武器授权"],0,"规划与安全监督都需要带完整性或置信度的状态信息。"],
    ["模块分解最重要的追溯问题是？",["为什么需要该模块","模块采购价格","模块外观尺寸","模块供应商名称"],0,"末端模块应能向上追溯到系统职责和任务需要。"],
    ["两轮平衡构型的典型限制是？",["静态不稳定且对载荷扰动敏感","不能转弯","没有轮子","不能安装传感器"],0,"两轮平衡依赖主动控制维持姿态。"],
    ["六轮腿重载构型常见代价是？",["质量、功耗和维护复杂度更高","完全没有冗余","一定更小","无需能源"],0,"更多支撑单元提高载荷与冗余，也增加尺寸和复杂度。"],
    ["物理接口不包括哪一项？",["业务成功度量","运输固定","补能连接","载荷快换"],0,"业务成功度量属于需求与评价，不是物理接口。"],
    ["平台分解时不应把什么当作架构？",["未经职责定义的设备清单","功能边界","输入输出","接口约束"],0,"设备清单缺少职责、关系和接口，不能替代架构。"],
    ["传感桅杆的核心作用是？",["获取环境与平台状态信息","直接驱动车轮","储存全部能源","代替操作员授权"],0,"感知设备为估计、规划与安全监督提供信息。"],
    ["轮式与腿式能力结合的目的通常是？",["兼顾效率与复杂地形可达性","取消反馈控制","让结构更简单","只提高外观辨识度"],0,"轮适合高效滚行，腿式关节支持越障与调平。"],
    ["模块接口定义应至少包含什么？",["输入、输出与约束","只有名称","只有供应商","只有图片"],0,"清晰的输入、输出、数据与物理约束是集成基础。"]
  ],
  2: [
    ["BRS 主要描述什么？",["业务或任务为什么需要改变","具体电机型号","传感器布置图","单个焊点工艺"],0,"BRS 表达业务问题、目标、成功度量与约束。"],
    ["ConOps 的分析层级更接近？",["组织与系统之系统运营图景","单一控制器算法","零件装配图","游戏关卡"],0,"ConOps 解释多组织、多系统如何协同产生任务效果。"],
    ["OpsCon 重点回答什么？",["关注系统在环境中如何被使用和监督","企业年度预算","零件材料牌号","单个执行器结构"],0,"OpsCon 聚焦系统边界、外部接口、模式、场景和人机分工。"],
    ["相关方仅指直接操作员吗？",["不是，还包括保障、监管、受影响者等","是","只包括采购人员","只包括设计师"],0,"相关方覆盖全寿命中影响系统或受系统影响的主体。"],
    ["高质量需求通常应当？",["清晰、单一、可验证并可追溯","尽量含糊","同时塞入多个义务","不指定验证方式"],0,"需求质量包括必要、清晰、单一、一致、可行、可验证与可追溯。"],
    ["MOE 用于衡量什么？",["任务或业务效果是否达成","单个螺栓扭矩","单个部件质量","单次电机电流"],0,"有效性度量评价业务或任务层面的成功。"],
    ["偏离场景的作用是？",["暴露异常条件下的新需求和安全约束","替代正常场景","删除接口","只增加戏剧性"],0,"通信中断、定位退化等偏离场景能揭示韧性与安全需要。"],
    ["需求中的“应”通常表示？",["可验证的规定性义务","可选建议","背景故事","视觉装饰"],0,"规定性需求需要明确主语、条件、行为和验证方式。"],
    ["BRS 到 StRS 的过渡依赖什么？",["场景、运营概念和相关方分析","随机编号","图片颜色","硬编码答案"],0,"场景与相关方把业务目标转成可验证期望。"],
    ["失联需求最合理的来源是？",["运行场景中的链路受限风险与安全目标","平台涂装方案","零件编码规则","无关设备参数"],0,"需求来源应能追溯到业务目标、场景、相关方或约束。"],
    ["验证方式不包括哪一项？",["主观想象","试验","分析","检查"],0,"常用验证方式包括试验、分析、演示和检查。"],
    ["运行模式定义有助于？",["明确不同状态下允许的行为与转换","取消安全监督","隐藏需求来源","替代接口设计"],0,"模式与状态把场景约束转成可分析的行为边界。"],
    ["需求追溯的向上方向说明？",["该需求为什么存在","该需求由谁排版","图片来自哪里","动画速度"],0,"向上追溯连接业务目标、场景和相关方来源。"],
    ["需求追溯的向下方向说明？",["如何分配实现并获得验证证据","谁负责排班","需求文字长度","文档页码"],0,"向下追溯连接系统需求、架构分配和验证证据。"],
    ["安全与法规类约束通常应如何处理？",["作为硬约束优先满足","只在最后考虑","用动画替代","与任务无关"],0,"安全、法律和合规约束通常不能用一般性能收益交换。"]
  ],
  3: [
    ["SyRS 的主要对象是？",["关注系统必须实现的可验证能力","组织愿景口号","零件采购单","单项维修工艺"],0,"SyRS 把相关方期望转换为系统层规定。"],
    ["功能架构与物理架构的区别是？",["前者描述做什么，后者描述由什么承担","没有区别","前者只画颜色","后者不含接口"],0,"功能和物理视图应区分并通过分配关系连接。"],
    ["闭环控制为什么需要反馈？",["用实际状态修正控制偏差","让箭头更好看","替代任务输入","取消执行机构"],0,"反馈使控制器能比较期望与实际状态并修正。"],
    ["安全监督器与任务控制器的关系应是？",["安全监督可限制或覆盖不安全控制","完全同一软件且无隔离","安全监督只记录日志","任务控制可绕过安全约束"],0,"关键安全功能需要足够独立，防止共因失效。"],
    ["架构节点的接口至少应说明？",["输入、输出和约束","只有节点名称","只有位置","只有颜色"],0,"接口定义是集成与验证的基础。"],
    ["状态估计完整性不足时合理响应是？",["降级、减速或驻停","继续高速运行","删除告警","扩大任务区"],0,"不可信反馈会破坏闭环，应进入受限状态。"],
    ["架构分配回答什么？",["哪一单元承担哪项功能或需求","需求是谁排版","图片如何压缩","题目如何随机"],0,"分配把逻辑职责映射到物理或软件单元。"],
    ["控制流与数据流是否总是同一方向？",["不一定，反馈常与控制命令方向相反","永远相同","都不需要方向","只与颜色有关"],0,"命令通常向执行链传递，状态反馈返回控制器。"],
    ["验证需求前为什么要定义通过准则？",["让结果可判定且可重复","增加字数","避免试验","替代需求来源"],0,"可验证需求必须有明确条件和判定标准。"],
    ["系统架构节点联动的价值是？",["查看上下游、接口和需求分配","只突出节点颜色","改变逻辑位置","隐藏连接关系"],0,"联动关系用于理解真实接口，不改变架构含义。"],
    ["能源管理对规划器提供什么？",["可用能量与功率约束","未经批准的任务目标","外观配色方案","无关设备参数"],0,"规划需要在能源和热约束内选择可执行任务。"],
    ["任务网络接口输出应包含？",["状态、告警、态势与审计信息","只有视频壁纸","零件尺寸","游戏得分"],0,"系统对外接口需支持任务监督和可追责。"],
    ["独立急停需求应分配给？",["人机接口、安全监督和执行制动链","单一展示层","只有规划算法","参考文献列表"],0,"端到端急停链需要从输入到执行保持独立和可验证。"],
    ["架构图连接线不应？",["穿过节点文字并造成歧义","连接节点边缘","表达数据方向","对应真实接口"],0,"连线应清晰地连接节点边界并避免遮挡。"],
    ["系统需求与架构之间应保持？",["双向追溯与分配证据","完全独立","只靠图片","不可修改"],0,"需求分配和架构验证共同支撑设计闭环。"]
  ],
  4: [
    ["STPA 中 Hazard 指什么？",["与损失相关的系统状态或条件","任意零件编号","任意界面告警","所有故障的同义词"],0,"危险是特定最坏环境下可能导致损失的系统状态或条件。"],
    ["不安全控制行为 UCA 关注？",["控制动作未提供、错误提供、时序错误或持续错误","只有硬件断裂","只有人员失误","只有软件崩溃"],0,"STPA 从控制行为及其上下文分析危险，而不只看部件故障。"],
    ["通信中断后的安全优先响应是？",["限制行为并按预案撤离或驻停","继续扩大任务范围","关闭审计","忽略链路状态"],0,"失联需要进入受限自主并在超时后安全处置。"],
    ["感知置信度不足时为什么要限速？",["降低在不确定环境模型下的风险与制动需求","提高动画帧率","节省文字","增加通信带宽"],0,"更低速度给感知、规划和制动留下更大安全裕度。"],
    ["紧急停车链为什么需要独立性？",["避免任务自治软件失效时急停同时失效","让按钮更醒目","减少传感器数量","替代验证"],0,"独立性降低共因失效风险。"],
    ["安全约束 SC 应当？",["明确禁止危险控制或要求安全行为","只描述损失","只写设备名称","不需要验证"],0,"安全约束把危险分析转成系统必须满足的控制义务。"],
    ["急停触发后最合理的动作是？",["抑制新运动命令并受控制动","继续加速","删除日志","自动重启任务"],0,"急停链应覆盖任务控制并保持可审计。"],
    ["异常事件记录的主要价值是？",["支持诊断、复盘与安全证据","增加存储占用","美化界面","替代操作员"],0,"审计记录支撑事故分析、验证与配置管理。"],
    ["安全状态转换应由什么驱动？",["明确阈值、事件与授权规则","随机时刻","外观颜色","操作者偏好"],0,"状态机需要可验证的守卫条件和动作。"],
    ["人工接管属于哪种控制？",["外部监督与覆盖控制","环境扰动","纯传感反馈","能源输出"],0,"人工监督通过授权、接管或急停影响控制闭环。"],
    ["共因失效会导致什么风险？",["多个冗余通道因同一原因同时失效","单个模块更便宜","动画更慢","文档更长"],0,"冗余只有在足够独立时才能有效降低风险。"],
    ["安全分析与系统架构的关系是？",["安全约束应分配到现有控制与物理单元","安全架构另起一套无关系统","只在文档末尾出现","不影响接口"],0,"安全功能必须落实到真实控制链和架构分配。"],
    ["失联计时器应由什么触发？",["经定义的链路质量和心跳判据","随机数","操作员离开席位","任务得分"],0,"异常检测必须有明确、可测试的判据。"],
    ["安全驻停后恢复任务需要？",["确认状态、恢复授权并通过重新检查","立即自动加速","忽略故障","删除告警"],0,"恢复运行应有受控的确认和放行流程。"],
    ["安全需求验证最合适的手段之一是？",["故障注入与场景试验","只读标题","观看背景图","更换字体"],0,"故障注入能验证异常检测、状态转换和安全响应链。"]
  ]
};

class WlxGame {
  constructor() {
    this.canvas = document.querySelector("#gameCanvas");
    this.ctx = this.canvas?.getContext("2d");
    this.level = 1;
    this.score = 0;
    this.correct = 0;
    this.answered = 0;
    this.running = false;
    this.paused = true;
    this.last = 0;
    this.accumulator = 0;
    this.keys = new Set();
    this.player = { x: 70, y: 390, vx: 0, vy: 0, w: 68, h: 42, grounded: false, coyote: 0, jumpBuffer: 0 };
    this.gates = [];
    this.questionQueues = {};
    this.currentGate = null;
    this.currentQuestion = null;
    this.levelConfigs = [1,2,3,4].map((level, index) => ({
      name: ["机械探索区","需求分析区","架构实验区","安全返回区"][index],
      tint: ["#0a7869","#17657a","#54519a","#8a4f35"][index],
      platforms: [
        {x:0,y:480,w:2400,h:60}, {x:330,y:405,w:150,h:24}, {x:610,y:350,w:170,h:24},
        {x:1050,y:400,w:190,h:24}, {x:1320,y:330,w:160,h:24}, {x:1910,y:390,w:170,h:24}
      ],
      obstacles: [{x:500,y:438,w:54,h:42},{x:810,y:420,w:60,h:60},{x:1250,y:430,w:55,h:50},{x:2070,y:420,w:65,h:60}],
      gates: [{x:900,y:330,w:28,h:150,triggerX:840},{x:1740,y:300,w:30,h:180,triggerX:1680}],
      finish: 2290
    }));
    this.bind();
    this.resetLevel(1);
    requestAnimationFrame(time => this.frame(time));
  }
  bind() {
    document.querySelector("#gameStartButton")?.addEventListener("click", () => this.start());
    document.querySelector("#gamePause")?.addEventListener("click", () => this.togglePause());
    document.querySelector("#gameRestart")?.addEventListener("click", () => this.resetLevel(this.level, true));
    document.querySelector("#gameReplay")?.addEventListener("click", () => { document.querySelector("#gameComplete").hidden = true; this.score = this.correct = this.answered = 0; this.resetLevel(1, true); this.running = true; this.paused = false; });
    document.querySelector("#gameSubmit")?.addEventListener("click", () => this.submitAnswer());
    document.querySelector("#gameContinue")?.addEventListener("click", () => this.continueGame());
    window.addEventListener("keydown", event => {
      if (document.body.dataset.view !== "game" || presentationController.active) return;
      const key = event.key.toLowerCase();
      if (["arrowleft","arrowright","arrowup","a","d","w"," "].includes(key)) event.preventDefault();
      this.keys.add(key);
      if (["arrowup","w"," "].includes(key)) this.player.jumpBuffer = .12;
      if (key === "e") this.interact();
      if (key === "escape" && this.running && document.querySelector("#gameQuestion").hidden) this.togglePause();
    });
    window.addEventListener("keyup", event => this.keys.delete(event.key.toLowerCase()));
    document.querySelectorAll("[data-game-control]").forEach(button => {
      const control = button.dataset.gameControl;
      const key = control === "left" ? "arrowleft" : control === "right" ? "arrowright" : control === "jump" ? "arrowup" : "e";
      const down = event => { event.preventDefault(); if (key === "e") this.interact(); else { this.keys.add(key); if (key === "arrowup") this.player.jumpBuffer = .12; } };
      const up = event => { event.preventDefault(); this.keys.delete(key); };
      button.addEventListener("pointerdown", down); button.addEventListener("pointerup", up); button.addEventListener("pointercancel", up); button.addEventListener("pointerleave", up);
    });
  }
  shuffled(items) {
    const result = items.map((item,index) => ({ id:`Q-${this.level}-${String(index+1).padStart(2,"0")}`, level:this.level, difficulty:index<5?"easy":index<12?"medium":"hard", question:item[0], options:item[1], answerIndex:item[2], explanation:item[3] }));
    for (let i=result.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; }
    return result;
  }
  resetLevel(level, keepRunning = false) {
    this.level = level;
    this.config = this.levelConfigs[level-1];
    this.gates = this.config.gates.map(gate => ({...gate, unlocked:false}));
    this.player.x = 70; this.player.y = 390; this.player.vx = 0; this.player.vy = 0; this.player.grounded = false;
    this.camera = 0;
    this.questionQueues[level] = this.shuffled(compactQuestions[level]);
    this.updateHud();
    document.querySelector("#gameObjective").textContent = `目标：穿越${this.config.name}，通过两个知识终端并抵达出口。`;
    if (!keepRunning) { this.running = false; this.paused = true; }
  }
  start() { document.querySelector("#gameStart").hidden = true; this.running = true; this.paused = false; this.last = performance.now(); }
  togglePause() { if (!this.running || !document.querySelector("#gameQuestion").hidden) return; this.paused = !this.paused; document.querySelector("#gamePause").textContent = this.paused ? "继续" : "暂停"; }
  updateHud() {
    document.querySelector("#gameLevel").textContent = `${this.level} / 4`;
    document.querySelector("#gameScore").textContent = String(this.score).padStart(4,"0");
    document.querySelector("#gameAccuracy").textContent = this.answered ? `${Math.round(this.correct/this.answered*100)}%` : "—";
  }
  solids() {
    const solids = [...this.config.platforms,...this.config.obstacles];
    this.gates.filter(gate => !gate.unlocked).forEach(gate => solids.push(gate));
    return solids;
  }
  collideAxis(axis, dt) {
    const p=this.player;
    if (axis === "x") p.x += p.vx*dt; else p.y += p.vy*dt;
    for (const solid of this.solids()) {
      if (!(p.x < solid.x+solid.w && p.x+p.w > solid.x && p.y < solid.y+solid.h && p.y+p.h > solid.y)) continue;
      if (axis === "x") {
        if (p.vx>0) p.x=solid.x-p.w; else if (p.vx<0) p.x=solid.x+solid.w; p.vx=0;
      } else {
        if (p.vy>0) { p.y=solid.y-p.h; p.vy=0; p.grounded=true; p.coyote=.1; }
        else if (p.vy<0) { p.y=solid.y+solid.h; p.vy=0; }
      }
    }
  }
  update(dt) {
    const p=this.player;
    p.grounded=false; p.coyote=Math.max(0,p.coyote-dt); p.jumpBuffer=Math.max(0,p.jumpBuffer-dt);
    const left=this.keys.has("a")||this.keys.has("arrowleft"); const right=this.keys.has("d")||this.keys.has("arrowright");
    const target=(right?1:0)-(left?1:0);
    p.vx += target*900*dt; if (!target) p.vx *= Math.pow(.0008,dt); p.vx=Math.max(-260,Math.min(260,p.vx));
    if (p.jumpBuffer>0 && (p.grounded||p.coyote>0)) { p.vy=-510; p.jumpBuffer=0; p.coyote=0; }
    p.vy=Math.min(820,p.vy+1320*dt);
    const substeps=2;
    for(let i=0;i<substeps;i++){ this.collideAxis("x",dt/substeps); this.collideAxis("y",dt/substeps); }
    p.x=Math.max(0,Math.min(2400-p.w,p.x));
    if(p.y>620){p.x=Math.max(50,p.x-180);p.y=350;p.vx=0;p.vy=0;}
    const targetCamera=Math.max(0,Math.min(1440,p.x-360)); this.camera+=(targetCamera-this.camera)*Math.min(1,dt*6);
    if(p.x>this.config.finish && this.gates.every(g=>g.unlocked)) this.completeLevel();
  }
  interact() {
    if(!this.running||this.paused) return;
    const gate=this.gates.find(item=>!item.unlocked && Math.abs((this.player.x+this.player.w)-item.x)<130);
    if(gate) this.openQuestion(gate); else showToast("靠近发光知识门后按 E 交互。");
  }
  openQuestion(gate) {
    this.currentGate=gate; this.paused=true;
    const queue=this.questionQueues[this.level]; if(!queue.length) this.questionQueues[this.level]=this.shuffled(compactQuestions[this.level]);
    const question=this.questionQueues[this.level].shift();
    const order=question.options.map((_,index)=>index); for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
    this.currentQuestion={...question, shuffledOptions:order.map(index=>question.options[index]), shuffledAnswer:order.indexOf(question.answerIndex)};
    document.querySelector("#gameQuestionMeta").textContent=`${question.id} · ${question.difficulty.toUpperCase()}`;
    document.querySelector("#gameQuestionTitle").textContent=question.question;
    document.querySelector("#gameOptions").innerHTML=this.currentQuestion.shuffledOptions.map((option,index)=>`<label><input type="radio" name="game-answer" value="${index}"><span>${option}</span></label>`).join("");
    document.querySelector("#gameFeedback").textContent=""; document.querySelector("#gameSubmit").hidden=false; document.querySelector("#gameContinue").hidden=true; document.querySelector("#gameQuestion").hidden=false;
  }
  submitAnswer() {
    const selected=document.querySelector('input[name="game-answer"]:checked'); if(!selected) return showToast("请先选择一个答案。");
    document.querySelectorAll('input[name="game-answer"]').forEach(input=>input.disabled=true);
    const correct=Number(selected.value)===this.currentQuestion.shuffledAnswer; this.answered+=1;
    if(correct){this.correct+=1;this.score+=150;this.currentGate.unlocked=true;document.querySelector("#gameFeedback").textContent=`回答正确。${this.currentQuestion.explanation}`;}
    else{document.querySelector("#gameFeedback").textContent=`暂未解锁。${this.currentQuestion.explanation} 关闭说明后可在同一检查点重试。`;}
    this.updateHud(); document.querySelector("#gameSubmit").hidden=true; document.querySelector("#gameContinue").hidden=false;
  }
  continueGame() { document.querySelector("#gameQuestion").hidden=true; this.currentGate=null; this.currentQuestion=null; this.paused=false; this.last=performance.now(); }
  completeLevel() {
    this.score+=300; this.updateHud();
    if(this.level<4){this.resetLevel(this.level+1,true);this.paused=false;this.last=performance.now();showToast(`进入第 ${this.level} 关：${this.config.name}`);}
    else{this.running=false;this.paused=true;const complete=document.querySelector("#gameComplete");complete.hidden=false;document.querySelector("#gameResult").innerHTML=`<p>总得分 <b>${this.score}</b></p><p>完成关卡 <b>4 / 4</b></p><p>知识正确率 <b>${this.answered?Math.round(this.correct/this.answered*100):0}%</b></p><p>结果用于学习反馈，不代表正式能力认证。</p>`;}
  }
  frame(time) {
    const delta=Math.min(.05,(time-this.last)/1000||0); this.last=time;
    if(this.running&&!this.paused){this.accumulator+=delta;while(this.accumulator>=1/60){this.update(1/60);this.accumulator-=1/60;}}
    this.render(); requestAnimationFrame(next=>this.frame(next));
  }
  render() {
    if(!this.ctx)return; const ctx=this.ctx,c=this.camera||0,p=this.player; ctx.clearRect(0,0,960,540);
    ctx.save();ctx.fillStyle="rgba(3,12,10,.30)";ctx.fillRect(0,0,960,540);ctx.translate(-c,0);
    ctx.fillStyle=this.config.tint+"aa";ctx.fillRect(c,0,960,540);
    for(const platform of this.config.platforms){ctx.fillStyle="#172b25";ctx.fillRect(platform.x,platform.y,platform.w,platform.h);ctx.fillStyle="#58d8bd";ctx.fillRect(platform.x,platform.y,platform.w,4);}
    for(const obstacle of this.config.obstacles){ctx.fillStyle="#35463f";ctx.fillRect(obstacle.x,obstacle.y,obstacle.w,obstacle.h);ctx.strokeStyle="#ff9a50";ctx.strokeRect(obstacle.x+3,obstacle.y+3,obstacle.w-6,obstacle.h-6);}
    for(const gate of this.gates){if(gate.unlocked){ctx.strokeStyle="rgba(142,246,217,.3)";ctx.strokeRect(gate.x,gate.y,gate.w,gate.h);continue;}ctx.fillStyle="#123a31";ctx.fillRect(gate.x,gate.y,gate.w,gate.h);ctx.fillStyle="#ff8b45";ctx.fillRect(gate.x+8,gate.y+12,12,gate.h-24);ctx.beginPath();ctx.arc(gate.triggerX,gate.y+gate.h-45,18,0,Math.PI*2);ctx.fillStyle="#8ef6d9";ctx.fill();ctx.fillStyle="#06100d";ctx.font="bold 16px sans-serif";ctx.fillText("?",gate.triggerX-5,gate.y+gate.h-39);}
    ctx.fillStyle="#ff8b45";ctx.fillRect(this.config.finish,390,9,90);ctx.beginPath();ctx.moveTo(this.config.finish+9,390);ctx.lineTo(this.config.finish+60,410);ctx.lineTo(this.config.finish+9,430);ctx.fill();
    ctx.save();ctx.translate(p.x,p.y);ctx.fillStyle="#18251f";ctx.fillRect(8,9,52,25);ctx.fillStyle="#6e8275";ctx.fillRect(15,3,38,20);ctx.fillStyle="#8ef6d9";ctx.fillRect(18,7,28,4);ctx.fillStyle="#07110e";for(const x of [9,27,45,61]){ctx.beginPath();ctx.arc(x,37,9,0,Math.PI*2);ctx.fill();ctx.strokeStyle="#ff8b45";ctx.lineWidth=2;ctx.stroke();}ctx.fillStyle="#ff8b45";ctx.fillRect(31,-7,5,12);ctx.fillStyle="#8ef6d9";ctx.fillRect(27,-9,13,5);ctx.restore();
    ctx.restore();
    if(this.paused&&this.running&&document.querySelector("#gameQuestion").hidden){ctx.fillStyle="rgba(5,11,9,.68)";ctx.fillRect(0,0,960,540);ctx.fillStyle="#ecf3ef";ctx.font="bold 30px sans-serif";ctx.textAlign="center";ctx.fillText("PAUSED / 已暂停",480,270);ctx.textAlign="left";}
  }
}
const wlxGame = new WlxGame();

setTraceStep(0);
setSafetyScenario("normal");
requestAnimationFrame(drawArchitectureLines);
