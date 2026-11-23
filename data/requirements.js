window.WLX_DATA = {
  meta: {
    title: "玄武 WL-X 轮腿式无人平台系统需求规格说明书",
    version: "1.0",
    status: "概念基线",
    date: "2026-11-23",
    scenario: "WL-X 在复杂地形执行环境侦察、数据回传和安全返回任务"
  },
  brs: [
    {"id":"BRS-01","title":"降低人员暴露","text":"任务组织应减少人员直接进入未知复杂地形执行先期环境侦察的需要。","source":"任务风险分析","criterion":"任务线程中由无人平台承担先期侦察段","strs":["StR-MIS-01","StR-SAF-01"]},
    {"id":"BRS-02","title":"形成可信态势","text":"任务体系应向指挥人员提供带时间、位置和置信度的环境态势产品。","source":"信息需求分析","criterion":"关键态势字段完整且可追溯","strs":["StR-MIS-02","StR-MOB-02"]},
    {"id":"BRS-03","title":"覆盖复杂地形","text":"解决方案应覆盖轮式平台难以连续通行的碎石、坡地和台阶组合地形。","source":"能力差距分析","criterion":"规定任务场景存在连续可达路径","strs":["StR-MOB-01","StR-MOB-03"]},
    {"id":"BRS-04","title":"保持任务可控","text":"任务执行期间，授权人员应能够理解平台状态并暂停、接管或终止任务。","source":"人机协同原则","criterion":"监督与覆盖控制链可用","strs":["StR-HMI-01","StR-SAF-03"]},
    {"id":"BRS-05","title":"异常安全处置","text":"通信、感知、定位或能源异常不得使平台进入不可控运动状态。","source":"偏离场景分析","criterion":"异常场景均转入规定受限或安全状态","strs":["StR-SAF-02","StR-SAF-04","StR-SAF-05"]},
    {"id":"BRS-06","title":"形成保障闭环","text":"平台应支持部署检查、任务执行、任务后诊断和受控维护的数据闭环。","source":"全寿命运行分析","criterion":"部署、运行与维护记录可关联","strs":["StR-SUP-01","StR-SUP-02"]}
  ],
  stakeholders: [
    {"id":"SH-01","group":"任务组织与使用方","name":"任务指挥员","concern":"任务效果、行动边界、态势可信度","stage":"筹划、执行、复盘","strs":["StR-MIS-01","StR-MIS-02"]},
    {"id":"SH-02","group":"现场操作方","name":"平台操作员","concern":"状态可理解、接管及时、告警清晰","stage":"部署、执行","strs":["StR-HMI-01","StR-SAF-03"]},
    {"id":"SH-03","group":"现场操作方","name":"伴随分队","concern":"运动意图、人员接近安全、共享态势","stage":"执行","strs":["StR-HMI-02","StR-SAF-01"]},
    {"id":"SH-04","group":"维护保障方","name":"保障人员","concern":"任务前检查、故障隔离、模块更换","stage":"部署、支持","strs":["StR-SUP-01","StR-SUP-02"]},
    {"id":"SH-05","group":"研制与测试方","name":"系统集成团队","concern":"接口一致、需求分配、验证证据","stage":"研制、集成","strs":["StR-INT-01","StR-INT-02"]},
    {"id":"SH-06","group":"研制与测试方","name":"试验鉴定团队","concern":"通过准则、可重复验证、故障注入","stage":"验证、确认","strs":["StR-VNV-01"]},
    {"id":"SH-07","group":"安全管理方","name":"独立安全评估人员","concern":"危险控制、急停独立性、事件记录","stage":"全寿命","strs":["StR-SAF-02","StR-SAF-03","StR-SAF-05"]},
    {"id":"SH-08","group":"受影响人员","name":"任务区域人员","concern":"接近告警、速度限制、可预期运动","stage":"执行","strs":["StR-SAF-01","StR-HMI-02"]}
  ],
  strs: [
    {"id":"StR-MIS-01","cat":"任务","text":"任务指挥员应能向平台下达包含任务区域、目标、禁行区和终止条件的任务包。","source":"SH-01","verify":"演示","brs":"BRS-01","syrs":["SYS-MIS-01"]},
    {"id":"StR-MIS-02","cat":"任务","text":"指挥人员应能接收带时间、位置和置信度的环境态势产品。","source":"SH-01","verify":"试验","brs":"BRS-02","syrs":["SYS-DAT-01"]},
    {"id":"StR-MOB-01","cat":"机动感知","text":"平台应能在规定碎石、坡地和台阶组合场景中形成连续可达路径。","source":"SH-01","verify":"场地试验","brs":"BRS-03","syrs":["SYS-MOB-01","SYS-MOB-02"]},
    {"id":"StR-MOB-02","cat":"机动感知","text":"操作员应能获知平台位姿、定位完整性和环境模型置信度。","source":"SH-02","verify":"试验","brs":"BRS-02","syrs":["SYS-PER-01","SYS-PER-02"]},
    {"id":"StR-MOB-03","cat":"机动感知","text":"平台应根据地形条件在轮式巡航、腿式越障和车体调平之间切换。","source":"SH-02","verify":"场地试验","brs":"BRS-03","syrs":["SYS-MOB-02","SYS-CTL-01"]},
    {"id":"StR-HMI-01","cat":"人机","text":"操作员应能查看当前模式、任务进度、链路、定位、能源和关键故障。","source":"SH-02","verify":"演示","brs":"BRS-04","syrs":["SYS-HMI-01"]},
    {"id":"StR-HMI-02","cat":"人机","text":"任务区域人员应能识别平台的运动意图、告警和安全停车状态。","source":"SH-03/08","verify":"演示","brs":"BRS-04","syrs":["SYS-HMI-02"]},
    {"id":"StR-SAF-01","cat":"安全","text":"平台接近人员时应依据距离和相对速度执行告警、限速或停车。","source":"SH-03/08","verify":"场景试验","brs":"BRS-01","syrs":["SYS-SAF-01"]},
    {"id":"StR-SAF-02","cat":"安全","text":"感知或定位完整性不足时，平台应限制自主运动并请求恢复定位或人工处置。","source":"SH-07","verify":"故障注入","brs":"BRS-05","syrs":["SYS-SAF-02"]},
    {"id":"StR-SAF-03","cat":"安全","text":"操作员应能通过独立控制链触发紧急停车。","source":"SH-02/07","verify":"故障注入","brs":"BRS-04","syrs":["SYS-SAF-03"]},
    {"id":"StR-SAF-04","cat":"安全","text":"通信中断超过任务设定时限时，平台应转入受限自主并撤离或安全停车。","source":"SH-01/07","verify":"链路中断试验","brs":"BRS-05","syrs":["SYS-COM-02","SYS-SAF-04"]},
    {"id":"StR-SAF-05","cat":"安全","text":"能源或驱动健康状态不足以继续任务时，平台应停止任务并进入可保持的安全状态。","source":"SH-04/07","verify":"故障注入","brs":"BRS-05","syrs":["SYS-PWR-02","SYS-SAF-05"]},
    {"id":"StR-SUP-01","cat":"保障","text":"保障人员应能在部署前完成自动检查并获得明确的放行结果。","source":"SH-04","verify":"演示","brs":"BRS-06","syrs":["SYS-HLT-01"]},
    {"id":"StR-SUP-02","cat":"保障","text":"平台应保存任务、告警、接管、配置和维护事件以支持诊断与复盘。","source":"SH-04/07","verify":"检查","brs":"BRS-06","syrs":["SYS-DAT-02"]},
    {"id":"StR-INT-01","cat":"接口","text":"平台应通过受控接口交换任务包、态势产品、健康状态和时间基准。","source":"SH-05","verify":"接口试验","brs":"BRS-02","syrs":["SYS-COM-01"]},
    {"id":"StR-INT-02","cat":"接口","text":"任务载荷应通过定义的机械、电源、数据和安全联锁接口接入平台。","source":"SH-05","verify":"检查加试验","brs":"BRS-06","syrs":["SYS-INT-01"]},
    {"id":"StR-VNV-01","cat":"验证","text":"每条系统需求应具有批准的验证方法、通过准则和可追溯结果。","source":"SH-06","verify":"检查","brs":"BRS-06","syrs":["SYS-VNV-01"]}
  ],
  syrs: [
    {"id":"SYS-MIS-01","cat":"功能","title":"任务包处理","text":"WL-X 应校验任务包中的任务区域、目标、禁行区、终止条件和授权状态，并拒绝缺失必要字段的任务包。","source":["StR-MIS-01"],"allocated":["L02"],"verify":"试验","criterion":"缺失任一必要字段时不进入任务模式"},
    {"id":"SYS-DAT-01","cat":"功能","title":"态势产品生成","text":"WL-X 应输出包含采集时间、坐标基准、位置和置信度的环境态势产品。","source":["StR-MIS-02"],"allocated":["L01","L04"],"verify":"检查加试验","criterion":"规定字段完整并能由任务终端解析"},
    {"id":"SYS-MOB-01","cat":"性能","title":"组合地形通过","text":"WL-X 应在规定碎石、坡地和台阶组合场景中生成无碰撞轨迹并完成通过。","source":["StR-MOB-01"],"allocated":["L02","L03"],"verify":"场地试验","criterion":"完成规定场景且未触发安全边界"},
    {"id":"SYS-MOB-02","cat":"功能","title":"运动形态切换","text":"WL-X 应根据地形类别和稳定裕度在滚行、越障和调平控制之间执行受控切换。","source":["StR-MOB-01","StR-MOB-03"],"allocated":["L02","L03"],"verify":"试验","criterion":"切换期间不丢失车体稳定控制"},
    {"id":"SYS-PER-01","cat":"性能","title":"位姿估计","text":"WL-X 应以统一时间基准输出位置、姿态、速度及对应协方差信息。","source":["StR-MOB-02"],"allocated":["L01"],"verify":"试验","criterion":"输出字段和更新状态满足接口定义"},
    {"id":"SYS-PER-02","cat":"安全可靠性","title":"完整性判定","text":"WL-X 应监测定位和环境模型完整性，并在判定无效时向模式管理与安全监督发布异常状态。","source":["StR-MOB-02","StR-SAF-02"],"allocated":["L01","L06"],"verify":"故障注入","criterion":"异常被检测并触发规定状态转换"},
    {"id":"SYS-CTL-01","cat":"功能","title":"闭环运动控制","text":"WL-X 应根据参考轨迹和估计状态生成轮端、关节与制动控制指令。","source":["StR-MOB-03"],"allocated":["L03"],"verify":"试验","criterion":"控制链形成连续指令与反馈闭环"},
    {"id":"SYS-HMI-01","cat":"人机维护","title":"监督态势显示","text":"人机界面应同时显示运行模式、任务进度、链路状态、定位完整性、能源余量和最高等级故障。","source":["StR-HMI-01"],"allocated":["L05"],"verify":"演示","criterion":"六类状态在单一监督视图可见"},
    {"id":"SYS-HMI-02","cat":"人机维护","title":"现场运动意图","text":"WL-X 应通过视觉或声响提示向附近人员表达启动、转向、倒车、降级和停车状态。","source":["StR-HMI-02"],"allocated":["P06","L06"],"verify":"演示","criterion":"五类状态具有可区分提示"},
    {"id":"SYS-SAF-01","cat":"安全可靠性","title":"人员接近保护","text":"WL-X 应根据人员距离和相对速度进入告警、限速或停车状态。","source":["StR-SAF-01"],"allocated":["L01","L06","P06"],"verify":"场景试验","criterion":"越过保护边界前完成规定响应"},
    {"id":"SYS-SAF-02","cat":"安全可靠性","title":"感知定位降级","text":"定位或环境模型完整性无效时，安全监督应限制自主运动并请求驻停扫描或人工接管。","source":["StR-SAF-02"],"allocated":["L06"],"verify":"故障注入","criterion":"无效状态下不继续正常自主运动"},
    {"id":"SYS-SAF-03","cat":"安全可靠性","title":"独立紧急停车","text":"WL-X 应提供独立于任务管理软件的人工急停输入、安全判定和制动执行通路。","source":["StR-SAF-03"],"allocated":["L05","L06","P06"],"verify":"故障注入","criterion":"任务管理失效条件下仍可进入安全停车"},
    {"id":"SYS-COM-01","cat":"接口","title":"任务网络接口","text":"WL-X 应通过定义的消息接口交换任务包、态势产品、平台健康状态和统一时间基准。","source":["StR-INT-01"],"allocated":["L04","P04"],"verify":"接口试验","criterion":"消息模式、频率和状态码符合接口定义"},
    {"id":"SYS-COM-02","cat":"安全可靠性","title":"链路状态监测","text":"WL-X 应依据心跳和链路质量判据识别通信中断，并向模式管理和安全监督发布失联事件。","source":["StR-SAF-04"],"allocated":["L04","L06"],"verify":"链路中断试验","criterion":"事件触发后进入失联处置流程"},
    {"id":"SYS-SAF-04","cat":"安全可靠性","title":"失联处置","text":"失联持续时间超过任务设定时限时，WL-X 应停止任务推进并执行撤离或安全停车策略。","source":["StR-SAF-04"],"allocated":["L02","L06"],"verify":"场景试验","criterion":"平台不越过任务设定的失联行为边界"},
    {"id":"SYS-PWR-01","cat":"性能","title":"能源状态估计","text":"能源管理单元应输出可用能量、功率限制和任务余量。","source":["StR-SAF-05"],"allocated":["L07","P05"],"verify":"试验","criterion":"状态可被任务管理和安全监督使用"},
    {"id":"SYS-PWR-02","cat":"安全可靠性","title":"能源故障处置","text":"能源或驱动健康不足以维持当前任务时，WL-X 应禁止新增任务动作并进入可保持的安全状态。","source":["StR-SAF-05"],"allocated":["L06","L07","P06"],"verify":"故障注入","criterion":"故障后不产生超出可用功率的运动指令"},
    {"id":"SYS-HLT-01","cat":"人机维护","title":"部署前检查","text":"WL-X 应在部署前检查感知、计算、通信、驱动、制动和能源状态并给出放行结果。","source":["StR-SUP-01"],"allocated":["L07"],"verify":"演示","criterion":"任一关键项失败时不允许进入部署模式"},
    {"id":"SYS-DAT-02","cat":"人机维护","title":"事件记录","text":"WL-X 应记录任务、告警、模式转换、人工接管、配置和维护事件，并保持统一时间戳。","source":["StR-SUP-02"],"allocated":["L07","P03"],"verify":"检查","criterion":"规定事件均可按时间和任务检索"},
    {"id":"SYS-INT-01","cat":"接口","title":"任务载荷接口","text":"WL-X 应提供受控的机械安装、电源、数据和安全联锁接口，并识别载荷配置状态。","source":["StR-INT-02"],"allocated":["P07"],"verify":"检查加试验","criterion":"未识别或联锁无效的载荷不获得任务使能"},
    {"id":"SYS-VNV-01","cat":"验证","title":"验证记录","text":"系统需求验证结果应记录方法、配置、输入、通过准则、结果和证据位置。","source":["StR-VNV-01"],"allocated":["L07"],"verify":"检查","criterion":"每条系统需求均存在唯一验证记录"}
  ],
  architecture: {
    functional: [
      {"id":"F01","name":"理解环境与自身状态","role":"融合环境、位姿、健康与完整性信息","inputs":"原始传感数据","outputs":"环境模型与估计状态","req":["SYS-PER-01","SYS-PER-02"]},
      {"id":"F02","name":"管理任务与模式","role":"校验任务、选择模式、管理异常处置","inputs":"任务包、状态与约束","outputs":"目标、模式与终止命令","req":["SYS-MIS-01","SYS-SAF-04"]},
      {"id":"F03","name":"规划并控制运动","role":"生成轨迹并协调轮腿执行","inputs":"目标、环境模型、估计状态","outputs":"执行器指令","req":["SYS-MOB-01","SYS-MOB-02","SYS-CTL-01"]},
      {"id":"F04","name":"交换任务与态势","role":"连接指挥网络和操作人员","inputs":"任务网络、平台状态","outputs":"任务确认、态势、告警","req":["SYS-DAT-01","SYS-COM-01","SYS-HMI-01"]},
      {"id":"F05","name":"监督安全与健康","role":"检查安全包络并管理能源与故障","inputs":"命令、完整性、链路、健康","outputs":"许可、限制、停车、记录","req":["SYS-SAF-01","SYS-SAF-02","SYS-SAF-03","SYS-PWR-02"]}
    ],
    logical: [
      {"id":"L01","name":"感知与状态估计","role":"环境感知、组合定位和完整性判定","inputs":"相机、雷达、IMU、轮速","outputs":"环境模型、位姿、完整性","req":["SYS-DAT-01","SYS-PER-01","SYS-PER-02"]},
      {"id":"L02","name":"任务与模式管理","role":"任务校验、行为编排、模式转换","inputs":"任务包、状态、约束","outputs":"目标、模式、终止命令","req":["SYS-MIS-01","SYS-MOB-02","SYS-SAF-04"]},
      {"id":"L03","name":"规划与运动控制","role":"轨迹生成、全身控制和制动协调","inputs":"目标、环境、估计状态","outputs":"轮端和关节指令","req":["SYS-MOB-01","SYS-MOB-02","SYS-CTL-01"]},
      {"id":"L04","name":"通信与数据服务","role":"消息交换、链路监测和态势发布","inputs":"任务网络、平台数据","outputs":"任务、态势、链路事件","req":["SYS-DAT-01","SYS-COM-01","SYS-COM-02"]},
      {"id":"L05","name":"人机交互","role":"监督态势、接管和独立急停输入","inputs":"平台状态、操作指令","outputs":"显示、告警、覆盖控制","req":["SYS-HMI-01","SYS-SAF-03"]},
      {"id":"L06","name":"安全监督","role":"检查人员接近、完整性、链路、能源和命令包络","inputs":"状态、命令、人工急停","outputs":"许可、限速、降级、停车","req":["SYS-SAF-01","SYS-SAF-02","SYS-SAF-03","SYS-SAF-04","SYS-PWR-02"]},
      {"id":"L07","name":"能源健康与记录","role":"能源估计、部署检查、诊断和事件记录","inputs":"电气、热、故障和事件数据","outputs":"功率限制、健康、验证与审计记录","req":["SYS-PWR-01","SYS-HLT-01","SYS-DAT-02","SYS-VNV-01"]}
    ],
    physical: [
      {"id":"P01","name":"多模态传感器组","role":"获取环境、位姿和人员接近信息","inputs":"环境物理量","outputs":"图像、点云、惯性与轮速","req":["SYS-PER-01","SYS-SAF-01"]},
      {"id":"P02","name":"任务计算与安全计算单元","role":"承载任务、估计、规划和隔离的安全监督功能","inputs":"传感、任务、健康与人工输入","outputs":"轨迹、许可、限制与记录","req":["SYS-MIS-01","SYS-PER-02","SYS-SAF-02","SYS-SAF-03"]},
      {"id":"P03","name":"数据记录与时间服务","role":"提供统一时间和受控事件存储","inputs":"全系统事件","outputs":"同步时间与审计记录","req":["SYS-DAT-02","SYS-VNV-01"]},
      {"id":"P04","name":"战术通信设备","role":"任务网络接入、消息传输与链路监测","inputs":"射频和系统消息","outputs":"消息与链路状态","req":["SYS-COM-01","SYS-COM-02"]},
      {"id":"P05","name":"能源与配电单元","role":"储能、配电、功率限制和状态采集","inputs":"补能与负载需求","outputs":"受控电能与能源状态","req":["SYS-PWR-01","SYS-PWR-02"]},
      {"id":"P06","name":"轮腿执行与安全制动","role":"执行关节、轮端与安全停车命令","inputs":"控制、许可与制动命令","outputs":"平台运动与执行状态","req":["SYS-CTL-01","SYS-SAF-01","SYS-SAF-03","SYS-PWR-02"]},
      {"id":"P07","name":"开放任务载荷接口","role":"提供机械、电源、数据和安全联锁","inputs":"载荷身份与连接状态","outputs":"载荷供能、数据和使能状态","req":["SYS-INT-01"]}
    ],
    edges: {
      functional:[["F01","F02","状态数据"],["F02","F03","目标与模式"],["F03","F01","运动与反馈"],["F04","F02","任务与人工控制"],["F02","F04","态势与告警"],["F05","F02","安全约束"],["F05","F03","许可与停车"]],
      logical:[["L01","L02","估计状态"],["L01","L03","环境与位姿"],["L02","L03","目标与模式"],["L03","L01","执行状态"],["L04","L02","任务与链路"],["L02","L04","态势产品"],["L05","L02","接管与终止"],["L05","L06","独立急停"],["L06","L02","模式限制"],["L06","L03","许可与制动"],["L07","L02","能源与健康"]],
      physical:[["P01","P02","传感数据"],["P02","P06","控制与许可"],["P06","P01","运动状态"],["P04","P02","任务与链路"],["P02","P04","态势与告警"],["P05","P02","受控电能"],["P05","P06","驱动电能"],["P03","P02","统一时间"],["P02","P03","审计事件"],["P07","P02","载荷状态"]]
    }
  },
  controlModes: [
    {"id":"normal","name":"正常运行","state":"M4 任务运行","response":"任务管理发布目标，规划与控制闭环跟踪；安全监督持续检查运行包络。","req":["SYS-CTL-01"],"active":["cmd","mission","estimator","controller","actuator","plant","sensor","safety"]},
    {"id":"obstacle","name":"障碍出现","state":"M4 重规划","response":"感知更新障碍，可行域收缩；规划器生成新轨迹，控制器限速跟踪。","req":["SYS-MOB-01","SYS-SAF-01"],"active":["mission","estimator","controller","actuator","plant","sensor","safety"]},
    {"id":"comms","name":"通信异常","state":"M5 受限自主","response":"链路监测发布失联事件；模式管理停止任务推进并执行撤离或安全停车。","req":["SYS-COM-02","SYS-SAF-04"],"active":["mission","controller","actuator","plant","sensor","safety"]},
    {"id":"perception","name":"感知异常","state":"M5 降级运行","response":"完整性无效后安全监督限制运动，平台驻停扫描或等待人工接管。","req":["SYS-PER-02","SYS-SAF-02"],"active":["estimator","controller","actuator","plant","sensor","safety","human"]},
    {"id":"estop","name":"人工急停","state":"M6 安全停车","response":"独立急停链覆盖任务控制，抑制新运动命令并触发安全制动。","req":["SYS-SAF-03"],"active":["human","safety","actuator","plant"]}
  ],
  safety: [
    {"id":"SSR-PER-01","hazard":"H-01 人员接近时平台保持危险速度","uca":"未在保护边界内提供限速或停车控制","constraint":"SC-01 人员接近时运动能量必须受距离与相对速度约束","text":"检测到人员跨越规定保护边界时，安全监督应请求限速或安全停车。","source":["SYS-SAF-01"],"modules":["SA01","SA03","SA05"],"verify":"人员接近场景试验"},
    {"id":"SSR-LOC-01","hazard":"H-02 不可信位姿下继续自主运动","uca":"定位完整性无效时仍允许正常轨迹执行","constraint":"SC-02 无有效完整性证据不得维持正常自主运动","text":"定位完整性无效时，安全监督应限制自主运动并请求驻停扫描或人工接管。","source":["SYS-PER-02","SYS-SAF-02"],"modules":["SA01","SA02","SA03"],"verify":"定位故障注入"},
    {"id":"SSR-COM-01","hazard":"H-03 失联平台继续扩大任务范围","uca":"失联超时后未提供撤离或停车控制","constraint":"SC-03 失联行为不得超出任务包设定边界","text":"通信中断超过任务设定时限时，模式管理应停止任务推进并执行撤离或安全停车。","source":["SYS-COM-02","SYS-SAF-04"],"modules":["SA01","SA02","SA03"],"verify":"链路中断场景试验"},
    {"id":"SSR-EST-01","hazard":"H-04 人工要求停车时平台继续运动","uca":"有效急停输入未及时到达安全制动","constraint":"SC-04 人工急停必须覆盖任务控制","text":"有效人工急停输入应通过独立通路抑制新运动命令并触发安全制动。","source":["SYS-SAF-03"],"modules":["SA04","SA01","SA05"],"verify":"任务计算故障条件下急停试验"},
    {"id":"SSR-PWR-01","hazard":"H-05 能源或驱动故障导致失控运动","uca":"可用功率不足时仍提供新增运动命令","constraint":"SC-05 控制动作不得超过可用能源和驱动健康边界","text":"能源或驱动健康不足以维持任务时，安全监督应禁止新增任务动作并进入可保持的安全状态。","source":["SYS-PWR-02"],"modules":["SA01","SA02","SA05"],"verify":"能源与驱动故障注入"},
    {"id":"SSR-MOD-01","hazard":"H-06 模式状态与实际控制权不一致","uca":"模式切换未完成时提供新模式控制命令","constraint":"SC-06 模式切换必须具备可验证的守卫条件和确认","text":"模式管理应在状态、授权和执行确认满足转换守卫后更新控制模式。","source":["SYS-MIS-01","SYS-SAF-04"],"modules":["SA01","SA03","SA06"],"verify":"状态转换试验"},
    {"id":"SSR-HLT-01","hazard":"H-07 关键故障被遗漏或无法追溯","uca":"未提供关键故障告警或事件记录","constraint":"SC-07 安全相关状态和控制必须可诊断并可追溯","text":"安全监督应记录危险状态、控制决定、人工输入和安全停车结果。","source":["SYS-DAT-02","SYS-HLT-01"],"modules":["SA02","SA06"],"verify":"日志完整性检查"}
  ],
  safetyArchitecture: [
    {"id":"SA01","name":"安全监督器","role":"执行安全包络和优先级仲裁","req":["SSR-PER-01","SSR-LOC-01","SSR-COM-01","SSR-EST-01","SSR-PWR-01","SSR-MOD-01"]},
    {"id":"SA02","name":"运行状态监测与异常检测","role":"监测完整性、链路、能源、驱动和故障","req":["SSR-LOC-01","SSR-COM-01","SSR-PWR-01","SSR-HLT-01"]},
    {"id":"SA03","name":"安全模式管理","role":"根据守卫条件请求限速、降级、撤离或停车","req":["SSR-PER-01","SSR-LOC-01","SSR-COM-01","SSR-MOD-01"]},
    {"id":"SA04","name":"人工急停输入","role":"提供独立于任务管理软件的停车请求","req":["SSR-EST-01"]},
    {"id":"SA05","name":"安全制动执行","role":"抑制驱动使能并执行受控停车和保持","req":["SSR-PER-01","SSR-EST-01","SSR-PWR-01"]},
    {"id":"SA06","name":"安全事件记录","role":"记录危险状态、控制决定、输入和结果","req":["SSR-MOD-01","SSR-HLT-01"]}
  ]
};
