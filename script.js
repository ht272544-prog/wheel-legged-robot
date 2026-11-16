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
  if (hash.startsWith("#a2-") || hash === "#module2-top") return "module2";
  if (["#module1-top", "#mission", "#sos", "#vehicle", "#systems", "#subsystems", "#modules", "#references"].includes(hash)) return "module1";
  return "hub";
}

function setView(view, targetId, smooth = true) {
  document.body.dataset.view = view;
  document.querySelectorAll("[data-view-target]").forEach(button => button.classList.toggle("active", button.dataset.viewTarget === view));
  const status = document.querySelector(".top-status b");
  if (status) status.textContent = view === "hub" ? "READY" : view === "module1" ? "A01 ACTIVE" : "A02 ACTIVE";
  const footerFlow = document.querySelector("footer>p");
  if (footerFlow) footerFlow.textContent = view === "module2" ? "BMA → BRS → ConOps → OpsCon → Stakeholders → StRS" : "任务 → 体系 → 整机 → 系统 → 子系统 → 模块";
  const id = targetId || (view === "module1" ? "module1-top" : view === "module2" ? "module2-top" : "top");
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

document.querySelectorAll("[data-view-target]").forEach(button => {
  button.addEventListener("click", () => {
    const view = button.dataset.viewTarget;
    const id = view === "module1" ? "module1-top" : view === "module2" ? "module2-top" : "top";
    history.replaceState(null, "", `#${id}`);
    setView(view, id);
  });
});

document.querySelectorAll("[data-open-view]").forEach(card => {
  const open = () => {
    const view = card.dataset.openView;
    const id = view === "module1" ? "module1-top" : "module2-top";
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
