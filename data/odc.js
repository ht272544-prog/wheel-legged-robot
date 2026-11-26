window.WLX_ODC_DATA = {
  conditions: [
    { id: "ODC-ENV-01", group: "外部环境", name: "地形可通行性", normal: "路面边界可识别，坡度、横坡、障碍和净空处于已验证包络内。", monitor: "地形高程、坡度、接触状态、稳定裕度", response: "超出包络时禁止进入；裕度下降时限速、调平或重规划。" },
    { id: "ODC-ENV-02", group: "外部环境", name: "天气与可见度", normal: "照度、降水、雾尘和风况允许感知链输出满足完整性门限。", monitor: "可见度、图像质量、点云密度、附着变化", response: "质量下降时降速并扩大安全距离；不可用时安全驻停。" },
    { id: "ODC-ENV-03", group: "外部环境", name: "动态参与者", normal: "人员、车辆与动态障碍可被探测、分类并保持安全间隔。", monitor: "目标轨迹、最小间距、碰撞时间", response: "冲突时停车、绕行或请求人工确认。" },
    { id: "ODC-DIG-01", group: "数字环境", name: "定位与地图完整性", normal: "位置、姿态、地图和禁入区数据具有统一时间基准与可接受置信度。", monitor: "定位保护级、地图新鲜度、跨源残差", response: "完整性不足时限制任务；定位丢失时停止高风险运动。" },
    { id: "ODC-DIG-02", group: "数字环境", name: "通信与任务数据", normal: "任务链路或中继链路可支持状态、告警和授权信息交换。", monitor: "时延、丢包、连续失联时间、任务包版本", response: "链路降级时减少数据率并限制任务；超时后返航或驻停。" },
    { id: "ODC-PER-01", group: "人员状态", name: "操控与监督准备度", normal: "操控员和监督员在岗、授权有效、态势理解充分且接管通道可用。", monitor: "在岗确认、告警应答、接管延迟", response: "人员不可用时不得启动新任务，并转入受限或安全状态。" },
    { id: "ODC-PER-02", group: "人员状态", name: "现场人员隔离", normal: "人员处于安全区，警戒与检修互锁有效。", monitor: "人员接近、舱门/检修锁、警戒状态", response: "人员进入危险区立即禁止运动并触发声光告警。" },
    { id: "ODC-VEH-01", group: "平台状态", name: "驱动与轮腿健康", normal: "驱动、制动、转向与轮腿关节自检通过且反馈可信。", monitor: "温度、电流、位置、制动与关节残差", response: "单点降级时限制速度或姿态；失去受控停车能力时禁止运行。" },
    { id: "ODC-VEH-02", group: "平台状态", name: "感知与计算健康", normal: "关键传感器、任务计算和时间同步处于可接受完整性状态。", monitor: "传感心跳、计算负载、同步误差、融合残差", response: "隔离故障源并切换冗余；完整性不足时限制或中止任务。" },
    { id: "ODC-VEH-03", group: "平台状态", name: "能源与热状态", normal: "能源余量覆盖任务、返航和安全储备，温度处于允许范围。", monitor: "SOC、功率裕度、关键温度、返航能耗预测", response: "达到返航阈值时停止扩展任务；达到临界阈值时就近安全驻停。" },
    { id: "ODC-VEH-04", group: "平台状态", name: "模式与安全监督", normal: "当前模式唯一明确，安全监督、急停与事件记录在线。", monitor: "模式一致性、安全链心跳、急停回路", response: "模式冲突或安全链异常时禁止驱动使能并记录事件。" },
    { id: "ODC-VEH-05", group: "平台状态", name: "禁止运行条件", normal: "不存在制动失效、关键结构损伤、能源热失控或安全链离线。", monitor: "最高等级故障、结构与绝缘诊断", response: "命中任一禁止条件即保持安全状态，等待人工处置。" }
  ],
  selectors: [
    { key: "terrain", label: "地形", options: [{ value: "gravel", label: "碎石坡道" }, { value: "wet", label: "湿滑横坡" }, { value: "blocked", label: "不可通行" }] },
    { key: "weather", label: "天气", options: [{ value: "clear", label: "晴 / 夜间" }, { value: "rain", label: "降雨" }, { value: "fog", label: "雾尘" }] },
    { key: "visibility", label: "可见度", options: [{ value: "good", label: "良好" }, { value: "reduced", label: "下降" }, { value: "poor", label: "不足" }] },
    { key: "positioning", label: "定位", options: [{ value: "reliable", label: "可信" }, { value: "degraded", label: "降级" }, { value: "lost", label: "丢失" }] },
    { key: "comms", label: "通信", options: [{ value: "normal", label: "正常" }, { value: "degraded", label: "降级" }, { value: "lost", label: "中断" }] },
    { key: "energy", label: "能源", options: [{ value: "sufficient", label: "充足" }, { value: "low", label: "返航阈值" }, { value: "critical", label: "临界" }] },
    { key: "operator", label: "操控员", options: [{ value: "ready", label: "在岗" }, { value: "delayed", label: "响应延迟" }, { value: "offline", label: "不可用" }] }
  ]
};
