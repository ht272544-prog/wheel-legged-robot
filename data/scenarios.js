window.WLX_SCENARIO_DATA = {
  hierarchy: [
    {
      id: "ODD", name: "外部运行环境", en: "OPERATIONAL DESIGN DOMAIN",
      summary: "定义平台外部可以观察、理解并安全运行的环境边界。",
      children: [
        { id: "A1", name: "地形与道路", en: "TERRAIN", icon: "⌁" },
        { id: "A2", name: "设施与边界", en: "FACILITIES", icon: "⌂" },
        { id: "A3", name: "参与者与目标物", en: "ACTORS", icon: "◎" },
        { id: "A4", name: "天气与自然环境", en: "WEATHER", icon: "◌" },
        { id: "A5", name: "数字信息环境", en: "DIGITAL", icon: "⌖" }
      ]
    },
    {
      id: "PER", name: "人员状态", en: "PERSONNEL STATE",
      summary: "定义操控、监督和现场保障人员可承担职责的状态。",
      children: [
        { id: "B1", name: "远程操控员", en: "OPERATOR", icon: "◉" },
        { id: "B2", name: "任务监督员", en: "SUPERVISOR", icon: "◇" },
        { id: "B3", name: "现场保障人员", en: "FIELD SUPPORT", icon: "△" }
      ]
    },
    {
      id: "VEH", name: "平台状态", en: "PLATFORM STATE",
      summary: "定义整机、任务设备和自治控制链处于可接受状态的条件。",
      children: [
        { id: "C1", name: "整机一般状态", en: "PLATFORM", icon: "▰" },
        { id: "C2", name: "任务与支撑系统", en: "ONBOARD SYSTEMS", icon: "⬡" },
        { id: "C3", name: "自治与安全控制", en: "AUTONOMY", icon: "⎔" }
      ]
    }
  ],
  elements: {
    A1: { definition: "描述平台与地面的几何、材料和接触条件。", values: ["铺装 / 碎石 / 砂土 / 泥地", "直路 / 弯道 / 坡道 / 横坡", "岩石 / 沟槽 / 台阶 / 坑洼", "路宽 / 净空 / 路肩 / 禁入边界"], impact: "决定轮式滚行、轮腿越障或调平模式，并影响速度和稳定裕度。", odc: ["ODC-ENV-01"], risks: ["RS-001", "RS-007"] },
    A2: { definition: "描述影响通行和任务组织的固定、临时设施与区域边界。", values: ["桥梁 / 涵洞 / 建筑", "围栏 / 路障 / 检查点", "补给点 / 通信中继", "任务区 / 禁入区 / 撤离走廊"], impact: "约束路径宽度、通信覆盖、驻停位置和安全撤离路线。", odc: ["ODC-ENV-01", "ODC-DIG-02"], risks: ["RS-001", "RS-003"] },
    A3: { definition: "描述人员、车辆、动物、目标物和动态障碍的行为特征。", values: ["有人分队 / 保障人员", "友方车辆 / 无人机", "非合作车辆 / 行人", "落石 / 滚动物 / 临时障碍"], impact: "决定避障距离、通行优先级、人员接近告警和人工确认要求。", odc: ["ODC-ENV-03"], risks: ["RS-002", "RS-009"] },
    A4: { definition: "描述对感知、附着和热管理产生影响的自然条件。", values: ["昼 / 夜 / 逆光", "雨 / 雾 / 扬尘", "高温 / 低温", "风 / 积水 / 湿滑"], impact: "改变可见度、传感质量、制动距离和能源消耗。", odc: ["ODC-ENV-02"], risks: ["RS-001", "RS-005"] },
    A5: { definition: "描述定位、地图、通信和任务数据的可用性与完整性。", values: ["GNSS / 惯性 / 里程计", "地形地图 / 禁入区", "任务链路 / 中继链路", "时间同步 / 数据新鲜度"], impact: "决定定位完整性、远程监督能力和任务包是否仍可执行。", odc: ["ODC-DIG-01", "ODC-DIG-02"], risks: ["RS-003", "RS-004"] },
    B1: { definition: "描述远程操控员的在岗、负荷、态势理解和接管能力。", values: ["在岗 / 离岗", "正常 / 高负荷", "态势明确 / 不确定", "可接管 / 接管延迟"], impact: "影响授权确认、接管时限与失联后的处置模式。", odc: ["ODC-PER-01"], risks: ["RS-003", "RS-008"] },
    B2: { definition: "描述任务监督员的任务授权、风险复核和终止能力。", values: ["任务已授权", "规则已确认", "异常已复核", "终止通道可用"], impact: "决定任务是否可启动、变更、继续或终止。", odc: ["ODC-PER-01"], risks: ["RS-008"] },
    B3: { definition: "描述现场人员的位置、隔离状态和保障准备度。", values: ["安全区内 / 接近平台", "警戒已建立", "救援通道可用", "检修互锁有效"], impact: "直接约束平台启动、运动和维护模式。", odc: ["ODC-PER-02"], risks: ["RS-009"] },
    C1: { definition: "描述动力、制动、轮腿机构、能源和车体的基本健康状态。", values: ["驱动 / 制动健康", "轮腿关节健康", "能源余量", "车体姿态与载荷"], impact: "决定平台是否具备持续机动、受控停车和安全返回能力。", odc: ["ODC-VEH-01", "ODC-VEH-03"], risks: ["RS-006", "RS-007"] },
    C2: { definition: "描述感知、通信、计算、载荷和健康管理系统状态。", values: ["传感器完整性", "任务计算健康", "链路状态", "载荷与热管理"], impact: "影响环境理解、任务产品质量与故障隔离。", odc: ["ODC-VEH-02", "ODC-DIG-02"], risks: ["RS-003", "RS-004", "RS-005"] },
    C3: { definition: "描述自治模式、运动控制和独立安全监督链状态。", values: ["模式明确", "控制闭环稳定", "安全监督在线", "急停链可用"], impact: "决定任务行为能否被持续约束，并在异常时进入限制或安全状态。", odc: ["ODC-VEH-04", "ODC-VEH-05"], risks: ["RS-007", "RS-008", "RS-009"] }
  },
  phases: [
    { id: "SCN-01", no: "01", title: "任务准备", summary: "导入任务区、禁入区和撤离走廊，完成整机自检与人员授权。", location: "前沿保障点", status: "驻停 / 受控上电", person: "监督员授权，操控员在岗", behavior: "校验任务包、时间基准、制动与急停链", output: "已签署任务基线与初始健康快照", odc: ["ODC-PER-01", "ODC-VEH-01", "ODC-VEH-04"], risks: ["RS-008", "RS-009"], x: 14, y: 76 },
    { id: "SCN-02", no: "02", title: "机动展开", summary: "平台从保障点进入碎石坡道，保持中继链路和有人分队间隔。", location: "山地入口", status: "轮式滚行 / 低速", person: "操控员监督，分队先行", behavior: "跟踪路径边界与动态障碍", output: "可通行走廊与链路质量", odc: ["ODC-ENV-01", "ODC-ENV-03", "ODC-DIG-02"], risks: ["RS-002", "RS-003"], x: 29, y: 66 },
    { id: "SCN-03", no: "03", title: "复杂地形通过", summary: "识别岩石与横坡，切换轮腿调平并限制速度。", location: "碎石横坡", status: "轮腿协调 / 限制模式", person: "操控员确认模式切换", behavior: "越障、调平、接触状态估计", output: "路径通过性与稳定裕度", odc: ["ODC-ENV-01", "ODC-ENV-02", "ODC-VEH-01"], risks: ["RS-001", "RS-007"], x: 48, y: 58 },
    { id: "SCN-04", no: "04", title: "前沿侦察", summary: "在目标区驻停扫描，融合无人机与地面感知数据形成态势产品。", location: "任务目标区", status: "稳定驻停 / 任务载荷工作", person: "监督员复核产品置信度", behavior: "三维建图、目标线索发现、数据回传", output: "带时间、坐标与置信度的态势产品", odc: ["ODC-ENV-02", "ODC-DIG-01", "ODC-VEH-02"], risks: ["RS-004", "RS-005"], x: 75, y: 36 },
    { id: "SCN-05", no: "05", title: "异常撤离", summary: "链路降级且能源进入返航阈值，停止扩展任务并沿撤离走廊返回。", location: "山谷遮挡区", status: "降级返航", person: "操控员保持监督，监督员确认任务终止", behavior: "降速、重定位、转入预设撤离路线", output: "撤离状态与关键事件记录", odc: ["ODC-DIG-01", "ODC-DIG-02", "ODC-VEH-03"], risks: ["RS-003", "RS-004", "RS-006"], x: 59, y: 64 },
    { id: "SCN-06", no: "06", title: "安全返回", summary: "进入保障区前确认人员隔离，完成驻停、下电和任务数据封存。", location: "前沿保障点", status: "安全驻停", person: "现场保障人员接管", behavior: "制动、互锁、健康检查与数据归档", output: "任务记录、故障记录与维护建议", odc: ["ODC-PER-02", "ODC-VEH-04", "ODC-VEH-05"], risks: ["RS-009"], x: 18, y: 80 }
  ]
};
