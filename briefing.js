(() => {
  const root = document.getElementById("briefing-top");
  if (!root) return;

  const topLine = (section, code) => `<div class="briefing-topline"><span><i></i>轮腿式无人作战平台 · 综合汇报</span><b class="briefing-section-tag">${code} / ${section}</b></div>`;
  const presenter = name => `<div class="briefing-presenter"><small>汇报人</small>${name}</div>`;
  const returnMap = `<button class="briefing-return-map" type="button" data-action="map">↩ 返回战术任务总览</button>`;

  const slides = [
    {
      section: "封面", tone: "cover", html: `
        <article class="briefing-slide briefing-cover" data-tone="blueprint">
          ${topLine("战术任务简报", "TACTICAL BRIEF")}
          <div class="briefing-cover-copy">
            <p class="briefing-kicker anim" style="--d:0">综合系统工程汇报</p>
            <h1 class="anim" style="--d:1">轮腿式无人<br>作战平台</h1>
            <div class="cover-rule anim" style="--d:2"></div>
            <p class="briefing-subtitle anim" style="--d:3">从系统认知、需求定义到架构、安全与场景验证的完整证据链</p>
            <div class="briefing-cover-tags anim" style="--d:4"><span>SYSTEM SCAN</span><span>REQUIREMENTS</span><span>ARCHITECTURE</span><span>SCENARIO</span><span>DEBRIEF</span></div>
          </div>
          <div class="briefing-cover-visual anim" style="--d:2">
            <img src="assets/briefing/robot-model-dan-xinyu-cutout.png" alt="段欣雨绘制的轮腿式机器人三维模型重建图" width="1536" height="1024">
            <div class="briefing-credit">机器人三维模型：段欣雨</div>
          </div>
        </article>`
    },
    {
      section: "任务总览", tone: "map", html: `
        <article class="briefing-slide briefing-map" data-tone="blueprint">
          ${topLine("任务选择", "BRIEFING MAP")}
          <header class="briefing-map-head anim"><h2>综合汇报任务总览</h2><p>选择阶段节点进入对应分析空间</p></header>
          <div class="mission-map">
            <button class="mission-node anim" style="--d:0" type="button" data-goto="2"><span class="node-num">01</span><b>系统认知</b><small>SYSTEM SCAN</small><em>从任务到系统组成</em></button>
            <button class="mission-node anim" style="--d:1" type="button" data-goto="7"><span class="node-num">02</span><b>需求定义</b><small>MISSION PLANNING</small><em>从任务目标到相关方需求</em></button>
            <button class="mission-node anim" style="--d:2" type="button" data-goto="13"><span class="node-num">03</span><b>架构构建</b><small>ARCHITECTURE</small><em>从系统需求到控制与安全</em></button>
            <button class="mission-node anim" style="--d:3" type="button" data-goto="19"><span class="node-num">04</span><b>场景与风险</b><small>TERRAIN SIM</small><em>从运行条件到风险场景</em></button>
            <button class="mission-node anim" style="--d:4" type="button" data-goto="25"><span class="node-num">05</span><b>综合总结</b><small>DEBRIEF</small><em>从分析结果到最终结论</em></button>
          </div>
        </article>`
    },
    {
      section: "系统认知", tone: "blueprint", html: `
        <article class="briefing-slide visual-scene system-wall" data-tone="blueprint">
          ${topLine("系统认知", "01 / SYSTEM SCAN")}${presenter("黄玮")}
          <div class="scene-float scene-left anim"><p class="briefing-kicker">整机能力全景</p><h2>系统不是零件清单，<br>而是协同产生任务效果。</h2><p>感知提供环境与自身状态，自治规划产生可执行行为，运动控制驱动轮腿机构，通信维持任务链，能源与健康管理保证持续运行，独立安全链在任何阶段都能否决危险动作。</p></div>
          <div class="scene-callouts anim" style="--d:2"><span>多模态感知</span><span>轮腿机动</span><span>任务自治</span><span>弹性通信</span><span>能源管理</span><span>独立安全</span></div>
          <div class="scene-caption anim" style="--d:3"><b>视觉说明</b><span>中心平台与周围子系统通过控制、反馈、能源和数据接口形成统一整机能力。</span></div>
        </article>`
    },
    {
      section: "系统认知", tone: "blueprint", html: `
        <article class="briefing-slide" data-tone="blueprint">
          ${topLine("系统认知", "01 / SYSTEM SCAN")}${presenter("黄玮")}
          <p class="briefing-kicker anim">一级系统交互台</p><h2 class="anim" style="--d:1">点击系统节点，查看职责、输入与输出。</h2>
          <div class="system-console anim" style="--d:2"><div class="system-orbit"><button class="active" type="button" data-system-focus="mobility">机动执行</button><button type="button" data-system-focus="perception">感知定位</button><button type="button" data-system-focus="autonomy">任务自治</button><button type="button" data-system-focus="communication">通信组网</button><button type="button" data-system-focus="payload">任务载荷</button><button type="button" data-system-focus="energy">能源热管</button><button type="button" data-system-focus="health">健康保障</button><button type="button" data-system-focus="hmi">人机协同</button><button type="button" data-system-focus="data">数据审计</button><button type="button" data-system-focus="safety">安全监督</button><div class="system-core"><img src="assets/briefing/robot-model-dan-xinyu-cutout.png" alt="轮腿平台系统中心"></div></div><div class="system-readout" id="briefSystemDetail"><span>SYS-01 / MOBILITY</span><h3>机动执行系统</h3><p>接收轨迹、速度包络和模式许可，协调轮端驱动、腿部关节与制动器，输出实际位姿、接触状态、执行器健康和可用能力。</p><dl><div><dt>输入</dt><dd>参考轨迹、模式许可、地形代价</dd></div><div><dt>输出</dt><dd>轮腿动作、制动状态、执行反馈</dd></div><div><dt>安全边界</dt><dd>姿态、速度、接触力与稳定裕度</dd></div></dl></div></div>
        </article>`
    },
    {
      section: "系统认知", tone: "blueprint", html: `
        <article class="briefing-slide" data-tone="blueprint">
          ${topLine("系统认知", "01 / SYSTEM SCAN")}${presenter("黄玮")}
          <p class="briefing-kicker anim">01 · 全息工程蓝图</p><h2 class="anim" style="--d:1">先认识系统：任务决定边界，边界决定组成。</h2>
          <div class="blueprint-stack">
            <div class="blueprint-levels anim" style="--d:2">
              <article><span>01</span><b>任务</b><small>侦察、通信中继、物资伴随、危险区探测</small></article>
              <article><span>02</span><b>体系</b><small>指挥节点、有人分队、通信导航、保障体系</small></article>
              <article><span>03</span><b>整机</b><small>四轮腿平台、任务载荷、能源与防护</small></article>
              <article><span>04</span><b>系统</b><small>机动、感知、自治、通信、载荷与安全</small></article>
              <article><span>05</span><b>子系统</b><small>功能进一步分配到可集成单元</small></article>
              <article><span>06</span><b>模块</b><small>传感器、驱动器、计算与接口组件</small></article>
            </div>
            <div class="vehicle-silhouette anim" style="--d:3"><span class="scan-ring"></span><img src="assets/briefing/robot-model-dan-xinyu-cutout.png" alt="轮腿式无人作战平台三维模型"></div>
          </div>
        </article>`
    },
    {
      section: "系统认知", tone: "blueprint", html: `
        <article class="briefing-slide" data-tone="blueprint">
          ${topLine("系统认知", "01 / SYSTEM SCAN")}${presenter("黄玮")}
          <p class="briefing-kicker anim">构型权衡</p><h2 class="anim" style="--d:1">轮式效率与腿式越障，在同一平台上协同。</h2>
          <p class="briefing-subtitle anim" style="--d:2">构型选择不是外形偏好，而是任务、地形、稳定性、能耗与维护性的联合权衡。</p>
          <div class="briefing-grid-4">
            <article class="briefing-card anim" style="--d:1"><span class="card-id">TYPE A</span><h3>两轮平衡腿式</h3><p>灵活紧凑，依赖动态平衡，载荷与静态稳定性受限。</p></article>
            <article class="briefing-card anim" style="--d:2"><span class="card-id">TYPE B / SELECTED</span><h3>四轮腿独立驱动</h3><p>轮式高效滚行、腿式主动调平，综合适应性最佳。</p></article>
            <article class="briefing-card anim" style="--d:3"><span class="card-id">TYPE C</span><h3>六轮摇臂轮腿</h3><p>静态稳定与冗余更强，但结构、质量与控制复杂度增加。</p></article>
            <article class="briefing-card anim" style="--d:4"><span class="card-id">TYPE D</span><h3>轮足切换平台</h3><p>模式边界清晰，切换机构带来额外故障点与维护负担。</p></article>
          </div>
          <div class="config-row anim" style="--d:5"><article><b>平坦路面</b><span>轮式巡航 / 低能耗</span></article><article><b>碎石坡地</b><span>混合支撑 / 主动调平</span></article><article><b>沟坎台阶</b><span>腿式越障 / 落足规划</span></article><article><b>失效状态</b><span>限速降级 / 安全驻停</span></article></div>
        </article>`
    },
    {
      section: "系统认知", tone: "blueprint", html: `
        <article class="briefing-slide" data-tone="blueprint">
          ${topLine("系统认知", "01 / SYSTEM SCAN")}${presenter("黄玮")}
          <p class="briefing-kicker anim">工程结论</p><h2 class="anim" style="--d:1">从任务到模块，保持职责、接口与证据连续。</h2>
          <div class="trace-line anim" style="--d:2"><article><span>M</span><b>任务效应</b><small>需要实现什么结果</small></article><article><span>SOS</span><b>体系协同</b><small>与谁交换什么</small></article><article><span>VEH</span><b>整机能力</b><small>平台承担什么</small></article><article><span>SYS</span><b>系统分配</b><small>功能由谁实现</small></article><article><span>MOD</span><b>模块证据</b><small>如何集成与验证</small></article></div>
          <div class="metric-strip anim" style="--d:3"><article><b>6</b><span>层级连续分解</span></article><article><b>4</b><span>主要轮腿构型权衡</span></article><article><b>10</b><span>一级系统协同</span></article><article><b>1</b><span>统一任务边界</span></article></div>
          ${returnMap}
        </article>`
    },
    {
      section: "需求定义", tone: "planning", html: `
        <article class="briefing-slide" data-tone="planning">
          ${topLine("需求定义", "02 / MISSION PLANNING")}${presenter("杨薪田")}
          <p class="briefing-kicker anim">02 · 数字任务策划墙</p><h2 class="anim" style="--d:1">先看任务差距，再决定需要什么系统。</h2>
          <div class="mission-wall">
            <div class="mission-gaps anim" style="--d:2">
              <article><span>G-01</span><b>人员先期暴露</b><p>复杂地形前沿侦察风险高，需要无人平台先行感知。</p></article>
              <article><span>G-02</span><b>连续可达性不足</b><p>纯轮式平台在碎石、坡地和台阶组合地形中受限。</p></article>
              <article><span>G-03</span><b>链路与信息脆弱</b><p>弱通信环境需要本地自治、缓存与弹性中继。</p></article>
            </div>
            <div class="decision-panel anim" style="--d:3"><span class="card-id">DECISION</span><b>选择四轮腿无人平台</b><div class="decision-arrow"></div><p>以复杂地形机动为底座，以持续感知、任务自治、通信中继、人在回路与安全监督形成任务闭环。</p><div class="metric-strip"><article><b>12</b><span>任务需求</span></article><article><b>20</b><span>相关方类型</span></article><article><b>20</b><span>可验证需求</span></article><article><b>100%</b><span>正向追溯</span></article></div></div>
          </div>
        </article>`
    },
    {
      section: "需求定义", tone: "planning", html: `
        <article class="briefing-slide" data-tone="planning">
          ${topLine("需求定义", "02 / MISSION PLANNING")}${presenter("杨薪田")}
          <p class="briefing-kicker anim">业务需求基线</p><h2 class="anim" style="--d:1">把任务差距转化为可衡量的预期效果。</h2>
          <div class="effect-board anim" style="--d:2"><article><span>MOE-01</span><h3>降低人员先期暴露</h3><b>高风险区域直接暴露显著减少</b><p>由无人平台完成路径侦察、环境建模和危险点确认，再向有人分队提供进入依据。</p></article><article><span>MOE-02</span><h3>提高复杂地形任务完成度</h3><b>组合地形任务连续可达</b><p>轮式巡航、混合支撑和腿式越障按地形与稳定裕度受控切换。</p></article><article><span>MOE-03</span><h3>缩短有效线索回传时延</h3><b>态势产品可定位、可复核</b><p>线索包含时间、坐标、置信度和数据质量标记，弱链路下先缓存后补传。</p></article><article><span>MOE-04</span><h3>保持异常状态可控</h3><b>偏离场景进入规定降级状态</b><p>定位、链路、能源或制动异常时，系统按安全优先级限速、驻停或请求接管。</p></article></div>
          <div class="evidence-ribbon anim" style="--d:3"><span>问题</span><i>→</i><span>业务目标</span><i>→</i><span>效能度量</span><i>→</i><span>任务场景</span><i>→</i><span>验收证据</span></div>
        </article>`
    },
    {
      section: "需求定义", tone: "planning", html: `
        <article class="briefing-slide" data-tone="planning">
          ${topLine("需求定义", "02 / MISSION PLANNING")}${presenter("杨薪田")}
          <p class="briefing-kicker anim">运行概念</p><h2 class="anim" style="--d:1">把需求放回任务过程，验证它何时被使用。</h2>
          <p class="briefing-subtitle anim" style="--d:2">组织层说明多系统如何协同；系统层聚焦平台与人员、环境和外部节点的一对多交互。</p>
          <div class="ops-lane anim" style="--d:3"><article><span>01</span><b>任务准备</b><small>任务包、区域、配置、能源与授权检查</small></article><article><span>02</span><b>机动进入</b><small>路径规划、地形判读、通信保持</small></article><article><span>03</span><b>持续感知</b><small>建图、定位、目标线索与置信度</small></article><article><span>04</span><b>任务执行</b><small>侦察、中继、伴随或危险区探测</small></article><article><span>05</span><b>降级恢复</b><small>限速、改道、驻停、人工接管</small></article><article><span>06</span><b>返回归档</b><small>回收、数据校验、任务结论归档</small></article></div>
          <div class="briefing-grid-2"><article class="briefing-card anim" style="--d:4"><span class="card-id">CONOPS</span><h3>体系运行概念</h3><p>说明指挥、通信、有人分队、保障与平台之间如何共同产生任务效果。</p></article><article class="briefing-card anim" style="--d:5"><span class="card-id">OPSCON</span><h3>系统运行概念</h3><p>说明平台在各阶段的状态、接口、控制权限、反馈与异常处置。</p></article></div>
        </article>`
    },
    {
      section: "需求定义", tone: "planning", html: `
        <article class="briefing-slide visual-scene mission-wall-scene" data-tone="planning">
          ${topLine("需求定义", "02 / MISSION PLANNING")}${presenter("杨薪田")}
          <div class="scene-float scene-left anim"><p class="briefing-kicker">数字任务策划墙</p><h2>任务、环境、人员与平台，<br>在同一运行图中对齐。</h2><p>路线规划不仅给出几何路径，还携带地形许可、通信覆盖、定位完整性、能源余量、禁行区和人工授权。任何条件失效，运行概念必须给出可执行的降级出口。</p></div>
          <div class="scene-stat-stack anim" style="--d:2"><article><span>任务包</span><b>区域 · 目标 · 时限 · 终止条件</b></article><article><span>控制权</span><b>授权 · 自主 · 接管 · 急停</b></article><article><span>反馈链</span><b>位置 · 健康 · 链路 · 任务进度</b></article></div>
          <div class="scene-caption anim" style="--d:3"><b>运行逻辑</b><span>正常路径、替代路径和安全驻停不是三个孤立方案，而是同一任务状态机的不同出口。</span></div>
        </article>`
    },
    {
      section: "需求定义", tone: "planning", html: `
        <article class="briefing-slide" data-tone="planning">
          ${topLine("需求定义", "02 / MISSION PLANNING")}${presenter("杨薪田")}
          <p class="briefing-kicker anim">相关方与需求链</p><h2 class="anim" style="--d:1">需求不是愿望清单，而是可验证的任务承诺。</h2>
          <div class="stakeholder-radar">
            <div class="radar-visual anim" style="--d:2"><div class="radar-core"><b>20</b><span>类相关方</span></div></div>
            <div class="stakeholder-list anim" style="--d:3"><article><span>DIRECT / 04</span><b>直接使用</b><p>任务指挥、平台操作与伴随分队</p></article><article><span>INTERACT / 08</span><b>协同交互</b><p>通信、导航、情报、保障与接口系统</p></article><article><span>CONSTRAIN / 04</span><b>施加约束</b><p>安全、频谱、鉴定与信息治理</p></article><article><span>AFFECTED / 04</span><b>承受影响</b><p>附近人员、设施、环境与维护人员</p></article></div>
          </div>
          <div class="trace-line anim" style="--d:4"><article><span>BMA</span><b>任务差距</b><small>为什么需要</small></article><article><span>BRS</span><b>业务需求</b><small>要取得什么效果</small></article><article><span>CONOPS</span><b>运行方式</b><small>如何协同使用</small></article><article><span>StRS</span><b>相关方需求</b><small>谁需要什么</small></article><article><span>VERIFY</span><b>验证准则</b><small>如何证明满足</small></article></div>
        </article>`
    },
    {
      section: "需求定义", tone: "planning", html: `
        <article class="briefing-slide" data-tone="planning">
          ${topLine("需求定义", "02 / MISSION PLANNING")}${presenter("杨薪田")}
          <p class="briefing-kicker anim">相关方需求与质量检查</p><h2 class="anim" style="--d:1">一条好需求，必须同时回答“谁、何时、做什么、做到什么程度”。</h2>
          <div class="req-quality"><div class="req-statement anim" style="--d:2"><span>StR-MOB-01 / MUST</span><h3>复杂地形连续通过</h3><p>当任务路线包含规定碎石、坡地和台阶组合地形时，平台应在授权速度包络内完成无碰撞通过；若稳定裕度或定位完整性低于阈值，应停止进入并报告原因。</p><div class="req-tags"><b>来源：任务需求 TR-01</b><b>主张者：操作员 / 伴随分队</b><b>验证：10 次场地试验</b></div></div><div class="quality-check anim" style="--d:3"><button class="active" type="button" data-quality="necessary"><span>01</span><b>必要</b><small>删除后任务目标无法满足</small></button><button type="button" data-quality="clear"><span>02</span><b>无歧义</b><small>条件、主语、行为清楚</small></button><button type="button" data-quality="verifiable"><span>03</span><b>可验证</b><small>存在判据与试验方法</small></button><button type="button" data-quality="traceable"><span>04</span><b>可追溯</b><small>上追任务、下接系统需求</small></button></div></div>
          <div class="quality-readout anim" id="briefQualityReadout" style="--d:4"><b>必要性判定</b><span>该需求直接支撑复杂地形可达性和人员暴露降低，若删除，核心任务效应无法成立。</span></div>
          ${returnMap}
        </article>`
    },
    {
      section: "架构构建", tone: "architecture", html: `
        <article class="briefing-slide" data-tone="architecture">
          ${topLine("架构构建", "03 / ARCHITECTURE")}${presenter("杨子恒")}
          <p class="briefing-kicker anim">系统需求规格书</p><h2 class="anim" style="--d:1">将相关方语言转换为可分配、可验证的系统语言。</h2>
          <div class="syreq-table anim" style="--d:2"><div class="syreq-row head"><span>ID</span><span>类型</span><span>需求陈述</span><span>追溯</span><span>验证</span></div><div class="syreq-row"><b>SYS-MOB-01</b><span>性能</span><p><strong>组合地形通过</strong><br>在规定碎石、坡地和台阶组合场景中生成无碰撞轨迹并完成通过。</p><span>StR-MOB-01</span><span>场地试验</span></div><div class="syreq-row"><b>SYS-PER-01</b><span>性能</span><p><strong>位姿估计</strong><br>以统一时间基准输出位置、姿态、速度与对应协方差信息。</p><span>StR-MOB-02</span><span>试验</span></div><div class="syreq-row"><b>SYS-CTL-01</b><span>功能</span><p><strong>闭环运动控制</strong><br>根据参考轨迹和估计状态生成轮端、关节与制动控制指令。</p><span>StR-MOB-03</span><span>试验</span></div><div class="syreq-row"><b>SYS-SAF-01</b><span>安全</span><p><strong>安全状态转换</strong><br>完整性不足或超出包络时，应限速、驻停并发布可审计状态。</p><span>StR-SAF-02</span><span>故障注入</span></div></div>
        </article>`
    },
    {
      section: "架构构建", tone: "architecture", html: `
        <article class="briefing-slide" data-tone="architecture">
          ${topLine("架构构建", "03 / ARCHITECTURE")}${presenter("杨子恒")}
          <p class="briefing-kicker anim">需求分配与追溯</p><h2 class="anim" style="--d:1">每条系统需求都必须有主责架构元素和验证出口。</h2>
          <div class="allocation-map anim" style="--d:2"><div class="allocation-source"><span>相关方需求</span><b>任务效果与使用约束</b><small>StR-MOB · StR-PER · StR-SAF</small></div><div class="allocation-lines"><i></i><i></i><i></i></div><div class="allocation-targets"><article><span>S01</span><b>轮腿机动</b><small>通过性、姿态、速度包络</small></article><article><span>S02</span><b>感知定位</b><small>环境模型、位姿与完整性</small></article><article><span>S03</span><b>自治控制</b><small>规划、跟踪、降级与恢复</small></article><article><span>S04</span><b>安全监督</b><small>互锁、急停、失能与审计</small></article></div></div>
          <div class="trace-audit anim" style="--d:3"><article><b>向上追溯</b><p>证明每条系统需求来自明确的任务、业务或相关方诉求，避免无依据设计。</p></article><article><b>向下分配</b><p>证明需求已分配到功能、逻辑或物理元素，并定义接口与主责。</p></article><article><b>验证闭环</b><p>为每条需求指定检查、分析、演示或试验方法，并关联场景与证据。</p></article></div>
        </article>`
    },
    {
      section: "架构构建", tone: "architecture", html: `
        <article class="briefing-slide" data-tone="architecture">
          ${topLine("架构构建", "03 / ARCHITECTURE")}${presenter("杨子恒")}
          <p class="briefing-kicker anim">初始系统架构</p><h2 class="anim" style="--d:1">用多视图回答“做什么、谁负责、如何落地”。</h2>
          <div class="architecture-workbench anim" style="--d:2">
            <div class="arch-tabs"><button class="arch-tab active" type="button" data-arch="function">功能视图</button><button class="arch-tab" type="button" data-arch="logical">逻辑视图</button><button class="arch-tab" type="button" data-arch="physical">物理视图</button></div>
            <div class="arch-canvas"><div class="arch-view arch-nodes active" data-arch-view="function"><article><b>感知与定位</b><span>环境模型 / 状态估计</span></article><article><b>任务规划与决策</b><span>任务分解 / 路径与行为</span></article><article><b>运动与安全控制</b><span>轨迹跟踪 / 包络监督</span></article><article><b>通信与人机协同</b><span>任务包 / 状态 / 接管</span></article><article><b>载荷与保障</b><span>任务载荷 / 能源 / 健康</span></article><article><b>数据与审计</b><span>时间同步 / 日志 / 追溯</span></article></div><div class="arch-view arch-nodes" data-arch-view="logical"><article><b>任务管理域</b><span>授权、任务与模式</span></article><article><b>自治计算域</b><span>感知、规划与融合</span></article><article><b>实时控制域</b><span>轮腿协调与制动</span></article><article><b>独立安全域</b><span>监督、急停与失能</span></article><article><b>通信接口域</b><span>外部系统与操作席</span></article><article><b>保障管理域</b><span>能源、健康与维护</span></article></div><div class="arch-view arch-nodes" data-arch-view="physical"><article><b>任务计算机</b><span>自治与任务软件</span></article><article><b>安全控制器</b><span>独立监控与使能链</span></article><article><b>轮腿执行机构</b><span>电机、关节、制动</span></article><article><b>传感器组件</b><span>视觉、激光、惯导、轮速</span></article><article><b>通信设备</b><span>任务链路与本地网络</span></article><article><b>能源管理单元</b><span>电池、配电与热管理</span></article></div></div>
          </div>
        </article>`
    },
    {
      section: "架构构建", tone: "architecture", html: `
        <article class="briefing-slide" data-tone="architecture">
          ${topLine("架构构建", "03 / ARCHITECTURE")}${presenter("杨子恒")}
          <p class="briefing-kicker anim">系统控制框图</p><h2 class="anim" style="--d:1">架构的核心不是方框，而是控制权与反馈闭环。</h2>
          <div class="control-loop anim" style="--d:2"><article class="control-node"><span>01</span><b>任务指挥与操作员</b></article><article class="control-node"><span>02</span><b>任务规划与决策</b></article><article class="control-node"><span>03</span><b>安全监督与运动控制</b></article><article class="control-node"><span>04</span><b>轮腿平台与环境</b></article></div>
          <div class="feedback-loop anim" style="--d:3"></div>
          <div class="briefing-grid-3"><article class="briefing-card anim" style="--d:4"><span class="card-id">CONTROL</span><h3>控制动作</h3><p>任务授权、模式许可、速度轨迹、力矩、制动与急停。</p></article><article class="briefing-card anim" style="--d:5"><span class="card-id">FEEDBACK</span><h3>反馈状态</h3><p>位姿、地形代价、接触状态、链路质量、能源与健康。</p></article><article class="briefing-card anim" style="--d:6"><span class="card-id">AUTHORITY</span><h3>权限边界</h3><p>高风险动作需授权确认，独立安全链拥有否决与失能权。</p></article></div>
        </article>`
    },
    {
      section: "架构构建", tone: "architecture", html: `
        <article class="briefing-slide" data-tone="architecture">
          ${topLine("架构构建", "03 / ARCHITECTURE")}${presenter("杨子恒")}
          <p class="briefing-kicker anim">安全需求与安全架构</p><h2 class="anim" style="--d:1">把危险改写为可验证约束，并落到独立机制。</h2>
          <div class="safety-chain anim" style="--d:2"><article><span>LOSS</span><b>不可接受损失</b><p>人员、设备、任务信息或平台受损。</p></article><article><span>HAZARD</span><b>危险系统状态</b><p>不可信状态下仍继续高速运动或释放载荷。</p></article><article><span>UCA</span><b>不安全控制</b><p>应限速时未限速、无授权时启动、反馈过期仍执行。</p></article><article><span>CONSTRAINT</span><b>安全约束</b><p>完整性不足必须降级、停车并保留审计证据。</p></article><article><span>MECHANISM</span><b>架构落点</b><p>安全监督器、双通道急停、互锁表和使能链。</p></article></div>
          <div class="metric-strip anim" style="--d:3"><article><b>需求</b><span>规定可观测安全行为</span></article><article><b>控制</b><span>明确动作与反馈</span></article><article><b>机制</b><span>分配到独立架构元素</span></article><article><b>验证</b><span>故障注入与场景试验</span></article></div>
        </article>`
    },
    {
      section: "架构构建", tone: "architecture", html: `
        <article class="briefing-slide safety-architecture-scene" data-tone="architecture">
          ${topLine("架构构建", "03 / ARCHITECTURE")}${presenter("杨子恒")}
          <p class="briefing-kicker anim">独立安全控制域</p><h2 class="anim" style="--d:1">任务控制负责“完成”，安全控制负责“允许”。</h2>
          <div class="safety-architecture anim" style="--d:2">
            <div class="safety-command"><span>任务控制域</span><b>任务规划 · 自治决策 · 运动控制</b><p>提出动作请求并持续报告状态，但不能绕过安全许可直接驱动高风险执行器。</p></div>
            <div class="safety-guard"><span>独立安全控制器</span><b>许可 / 限速 / 驻停 / 失能</b><div class="guard-ring"><i></i><i></i><i></i></div><p>独立读取定位完整性、姿态、速度、制动、能源、人员隔离和急停通道。</p></div>
            <div class="safety-actuator"><span>受控对象</span><b>轮端 · 关节 · 制动 · 载荷</b><p>只有任务指令与安全使能同时成立，动作才可进入执行链。</p></div>
          </div>
          <div class="safety-evidence anim" style="--d:3"><article><b>双通道急停</b><p>任一有效急停请求覆盖任务控制并撤销驱动使能。</p></article><article><b>状态一致性</b><p>命令、反馈与时间戳不一致时进入受限模式。</p></article><article><b>可审计记录</b><p>触发条件、决策、动作与恢复授权形成完整事件链。</p></article><article><b>验证出口</b><p>通过故障注入、断链、定位漂移和制动异常场景验证。</p></article></div>
          ${returnMap}
        </article>`
    },
    {
      section: "场景与风险", tone: "terrain", html: `
        <article class="briefing-slide" data-tone="terrain">
          ${topLine("场景与风险", "04 / TERRAIN SIM")}${presenter("郭恺")}
          <p class="briefing-kicker anim">场景分层</p><h2 class="anim" style="--d:1">先固定边界，再组合动态变化与平台状态。</h2>
          <div class="scenario-stack anim" style="--d:2"><article><span>05</span><div><b>任务阶段</b><p>准备、进入、感知、执行、降级、返回与归档。</p></div><em>决定当前目标与终止条件</em></article><article><span>04</span><div><b>人员与授权</b><p>操作员在岗、接管能力、区域隔离和高风险确认。</p></div><em>决定控制权与许可边界</em></article><article><span>03</span><div><b>平台状态</b><p>能源、健康、定位完整性、载荷、制动与运行模式。</p></div><em>决定可用能力和降级出口</em></article><article><span>02</span><div><b>动态环境</b><p>天气、光照、移动人员、链路质量与临时障碍。</p></div><em>构成运行中的扰动</em></article><article><span>01</span><div><b>设计运行范围</b><p>地形、坡度、路宽、固定设施、禁行区与通信覆盖。</p></div><em>规定系统被设计去哪里运行</em></article></div>
          <div class="scenario-formula anim" style="--d:3"><b>场景实例</b><span>固定范围</span><i>+</i><span>动态变化</span><i>+</i><span>平台状态</span><i>+</i><span>人员状态</span><i>+</i><span>任务阶段</span></div>
        </article>`
    },
    {
      section: "场景与风险", tone: "terrain", html: `
        <article class="briefing-slide" data-tone="terrain">
          ${topLine("场景与风险", "04 / TERRAIN SIM")}${presenter("郭恺")}
          <p class="briefing-kicker anim">04 · 动态地形推演</p><h2 class="anim" style="--d:1">场景是环境、人员、平台与任务状态的组合。</h2>
          <div class="odc-wheel">
            <div class="odc-tree anim" style="--d:2"><article><span>ODD</span><b>设计运行范围</b><p>地形、坡度、障碍、天气、光照、通信与定位环境。</p></article><article><span>HUMAN</span><b>人员状态</b><p>任务授权、操作在岗、接管能力、装卸与交接状态。</p></article><article><span>PLATFORM</span><b>平台状态</b><p>能源、载荷、健康、制动、定位完整性与运行模式。</p></article></div>
            <div class="odc-scope anim" style="--d:3"><img src="assets/briefing/robot-model-dan-xinyu-cutout.png" alt="场景范围内的轮腿平台"><div class="briefing-credit">ODC = 范围 + 平台状态 + 人员状态</div></div>
          </div>
        </article>`
    },
    {
      section: "场景与风险", tone: "terrain", html: `
        <article class="briefing-slide scene-photo" data-tone="terrain">
          ${topLine("场景与风险", "04 / TERRAIN SIM")}${presenter("郭恺")}
          <p class="briefing-kicker anim">场景要素配置</p><h2 class="anim" style="--d:1">用可复现参数替代模糊的“复杂环境”。</h2>
          <div class="terrain-controls anim" style="--d:2"><button class="active" type="button" data-terrain="terrain">地形</button><button type="button" data-terrain="weather">天气</button><button type="button" data-terrain="network">通信</button><button type="button" data-terrain="human">人员</button><button type="button" data-terrain="platform">平台</button></div>
          <div class="terrain-sim"><div class="terrain-map anim" style="--d:3"><div class="terrain-route"></div><i class="terrain-marker m1"></i><i class="terrain-marker m2"></i><i class="terrain-marker m3"></i></div><div class="terrain-side anim" style="--d:4" id="briefingTerrainReadout"><article><span>L1</span><b>碎石山地</b><p>粒径、松散度、可通行宽度与附着水平</p></article><article><span>L2</span><b>12° 连续坡</b><p>坡向、横坡、局部台阶与侧翻裕度</p></article><article><span>L3</span><b>间歇弱链路</b><p>时延、丢包、失联持续时间与恢复条件</p></article><article><span>STATE</span><b>任务已授权</b><p>操作员在岗，能源与定位完整性满足进入条件</p></article></div></div>
        </article>`
    },
    {
      section: "场景与风险", tone: "terrain", html: `
        <article class="briefing-slide scene-photo" data-tone="terrain">
          ${topLine("场景与风险", "04 / TERRAIN SIM")}${presenter("郭恺")}
          <p class="briefing-kicker anim">典型任务场景</p><h2 class="anim" style="--d:1">复杂山地前沿侦察与信息回传。</h2>
          <p class="briefing-subtitle anim" style="--d:2">平台由安全区域进入碎石坡地，完成路径侦察、三维建图和目标线索采集，并将带时间、坐标与置信度的态势产品回传指挥节点。</p>
          <div class="ops-lane anim" style="--d:3"><article><span>S-01</span><b>任务放行</b><small>区域、禁行区、目标、授权和终止条件</small></article><article><span>S-02</span><b>路径进入</b><small>地形判读、路线规划与速度包络</small></article><article><span>S-03</span><b>持续建图</b><small>定位完整性、地形栅格与障碍更新</small></article><article><span>S-04</span><b>线索确认</b><small>多源观测、目标置信度与人工核认</small></article><article><span>S-05</span><b>态势回传</b><small>时间、坐标、质量标记与链路状态</small></article><article><span>S-06</span><b>安全返回</b><small>原路/替代路线、能源门槛与任务归档</small></article></div>
          <div class="briefing-grid-3"><article class="briefing-card anim" style="--d:4"><span class="card-id">ENTRY</span><h3>进入条件</h3><p>配置自检通过、任务有效、操作员在岗、定位与链路满足门槛。</p></article><article class="briefing-card anim" style="--d:5"><span class="card-id">SUCCESS</span><h3>成功判据</h3><p>路线产品完整，关键区域覆盖，态势产品可复核，平台安全返回。</p></article><article class="briefing-card anim" style="--d:6"><span class="card-id">ABORT</span><h3>终止条件</h3><p>定位失效、能源低于阈值、制动异常或人员进入危险区。</p></article></div>
        </article>`
    },
    {
      section: "场景与风险", tone: "terrain", html: `
        <article class="briefing-slide" data-tone="terrain">
          ${topLine("场景与风险", "04 / TERRAIN SIM")}${presenter("郭恺")}
          <p class="briefing-kicker anim">安全风险场景</p><h2 class="anim" style="--d:1">风险必须绑定触发、响应、证据与验证。</h2>
          <div class="risk-matrix anim" style="--d:2"><div class="risk-head">可能性 / 后果</div><div class="risk-head">轻微</div><div class="risk-head">中等</div><div class="risk-head">严重</div><div class="risk-head">灾难</div><div class="risk-head">频繁</div><div class="risk-cell med">表面打滑</div><div class="risk-cell med">链路抖动</div><div class="risk-cell high risk-item">R-02 路径阻断</div><div class="risk-cell high"></div><div class="risk-head">偶发</div><div class="risk-cell"></div><div class="risk-cell med">能源快速下降</div><div class="risk-cell high risk-item">R-03 定位失效</div><div class="risk-cell high risk-item">R-04 急停无效</div><div class="risk-head">很少</div><div class="risk-cell"></div><div class="risk-cell med">单执行器降级</div><div class="risk-cell high">制动异常</div><div class="risk-cell high">人员侵入</div><div class="risk-head">罕见</div><div class="risk-cell"></div><div class="risk-cell"></div><div class="risk-cell med">传感器共因失效</div><div class="risk-cell high">控制权冲突</div></div>
          <div class="risk-legend anim" style="--d:3"><span><b>R-02</b> 改道或安全驻停</span><span><b>R-03</b> 停止任务并等待核验</span><span><b>R-04</b> 急停覆盖所有任务控制</span></div>
        </article>`
    },
    {
      section: "场景与风险", tone: "terrain", html: `
        <article class="briefing-slide risk-response-scene" data-tone="terrain">
          ${topLine("场景与风险", "04 / TERRAIN SIM")}${presenter("郭恺")}
          <p class="briefing-kicker anim">风险响应推演台</p><h2 class="anim" style="--d:1">选择风险，查看从触发到验证的完整处置链。</h2>
          <div class="risk-console anim" style="--d:2"><div class="risk-selector"><button class="active" type="button" data-risk-brief="R-02"><span>R-02</span><b>路径阻断</b><small>地形 / 障碍</small></button><button type="button" data-risk-brief="R-03"><span>R-03</span><b>定位失效</b><small>感知 / 完整性</small></button><button type="button" data-risk-brief="R-04"><span>R-04</span><b>急停无效</b><small>控制 / 安全</small></button></div><div class="risk-readout" id="briefRiskDetail"><div class="risk-code">R-02 / HIGH</div><h3>路线被落石或塌方阻断</h3><div class="risk-flow"><article><span>触发</span><b>前方可通行宽度低于平台安全包络，替代落足点不可用。</b></article><article><span>响应</span><b>停止前进、后退至安全点，重规划替代路线；无解则安全驻停。</b></article><article><span>证据</span><b>障碍栅格、规划失败码、停车位置、控制状态与操作员确认。</b></article><article><span>验证</span><b>场景仿真与实地障碍注入，检查无碰撞、停车距离和告警完整性。</b></article></div></div></div>
          <div class="risk-status anim" style="--d:3"><span>风险状态：已识别</span><span>安全约束：已分配</span><span>架构机制：已建立</span><span>验证场景：已定义</span></div>
          ${returnMap}
        </article>`
    },
    {
      section: "综合总结", tone: "debrief", html: `
        <article class="briefing-slide" data-tone="debrief">
          ${topLine("综合总结", "05 / DEBRIEF")}${presenter("高赫 · 段欣雨")}
          <p class="briefing-kicker anim">端到端证据链</p><h2 class="anim" style="--d:1">点击链路节点，查看它如何支撑最终结论。</h2>
          <div class="evidence-console anim" style="--d:2"><div class="evidence-route"><button class="active" type="button" data-evidence="mission"><span>01</span><b>任务效应</b></button><i></i><button type="button" data-evidence="requirement"><span>02</span><b>需求基线</b></button><i></i><button type="button" data-evidence="architecture"><span>03</span><b>架构分配</b></button><i></i><button type="button" data-evidence="scenario"><span>04</span><b>场景验证</b></button><i></i><button type="button" data-evidence="claim"><span>05</span><b>结论主张</b></button></div><div class="evidence-readout" id="briefEvidenceDetail"><span>MOE-01 / 人员风险降低</span><h3>无人平台先行完成危险区域环境侦察</h3><p>以人员先期进入次数、危险区域暴露时间和态势产品完整性衡量任务效应；该主张向下连接复杂地形通过、持续感知和安全状态转换需求。</p><div><b>来源：业务任务分析</b><b>下一节点：StR-MOB-01 / StR-SAF-02</b><b>证据状态：链路完整</b></div></div></div>
        </article>`
    },
    {
      section: "综合总结", tone: "debrief", html: `
        <article class="briefing-slide" data-tone="debrief">
          ${topLine("综合总结", "05 / DEBRIEF")}${presenter("高赫 · 段欣雨")}
          <p class="briefing-kicker anim">05 · 任务结算与成果归档</p><h2 class="anim" style="--d:1">五阶段分析形成一条闭合证据链。</h2>
          <div class="debrief-dashboard"><div class="debrief-score anim" style="--d:2"><span class="card-id">MISSION STATUS</span><div class="big-score">5/5</div><h3>分析阶段完成</h3><p>系统边界、需求基线、初始架构、控制与安全、运行场景之间已经建立双向关系。</p></div><div class="debrief-results anim" style="--d:3"><article><span>01</span><b>系统边界清晰</b><p>任务—体系—整机—模块职责连续。</p></article><article><span>02</span><b>需求可验证</b><p>来源、判据、优先级和验证方式明确。</p></article><article><span>03</span><b>架构可追溯</b><p>需求落到功能、逻辑、物理和控制机制。</p></article><article><span>04</span><b>风险可控制</b><p>风险触发、响应、证据与验证形成闭环。</p></article></div></div>
        </article>`
    },
    {
      section: "综合总结", tone: "debrief", html: `
        <article class="briefing-slide" data-tone="debrief">
          ${topLine("综合总结", "05 / DEBRIEF")}${presenter("高赫 · 段欣雨")}
          <p class="briefing-kicker anim">结论与演进</p><h2 class="anim" style="--d:1">优势在机动融合，难点在安全可信与系统集成。</h2>
          <div class="conclusion-axis"><article class="anim" style="--d:2"><h3>核心优势</h3><ul><li>轮式效率与腿式越障兼顾</li><li>多模态感知与自治规划形成环境适应能力</li><li>模块化载荷与开放接口支持任务扩展</li><li>人在回路与独立安全链限制高风险行为</li></ul></article><article class="anim" style="--d:3"><h3>关键挑战</h3><ul><li>轮腿协调控制与实时接触估计复杂</li><li>弱通信、弱定位环境下的完整性管理困难</li><li>多源传感器、执行器和安全控制器集成度高</li><li>风险场景覆盖与安全论证需要持续迭代</li></ul></article></div>
          <div class="future-path anim" style="--d:4"><span>数字样机</span><i>→</i><span>场景仿真</span><i>→</i><span>半实物闭环</span><i>→</i><span>样机试验</span><i>→</i><span>安全论证</span></div>
        </article>`
    },
    {
      section: "综合总结", tone: "debrief", html: `
        <article class="briefing-slide" data-tone="debrief">
          ${topLine("综合总结", "05 / DEBRIEF")}${presenter("高赫 · 段欣雨")}
          <p class="briefing-kicker anim">验证路线</p><h2 class="anim" style="--d:1">从虚拟环境逐级增加真实度与风险暴露。</h2>
          <div class="verification-ladder anim" style="--d:2"><article><span>V1</span><b>模型与场景仿真</b><p>验证需求逻辑、状态机、路径规划和风险响应覆盖。</p><em>低成本 / 高覆盖</em></article><article><span>V2</span><b>软件在环</b><p>验证任务软件、感知融合、控制接口和异常代码路径。</p><em>真实软件 / 虚拟对象</em></article><article><span>V3</span><b>半实物闭环</b><p>接入计算机、控制器、通信链路与传感器模拟器。</p><em>时序与接口验证</em></article><article><span>V4</span><b>样机与场地试验</b><p>在规定坡地、碎石、台阶、断链和定位扰动下测试。</p><em>真实物理行为</em></article><article><span>V5</span><b>安全证据审查</b><p>汇总需求、危险、场景、测试结果与残余风险接受依据。</p><em>形成可审计结论</em></article></div>
          <div class="verification-gates anim" style="--d:3"><b>进入下一阶段前必须满足</b><span>需求基线稳定</span><span>接口一致</span><span>风险可控</span><span>数据可复现</span><span>异常可恢复</span></div>
        </article>`
    },
    {
      section: "综合总结", tone: "debrief", html: `
        <article class="briefing-slide mission-control-final" data-tone="debrief">
          ${topLine("综合总结", "05 / DEBRIEF")}${presenter("高赫 · 段欣雨")}
          <p class="briefing-kicker anim">综合决策</p><h2 class="anim" style="--d:1">以任务效果为牵引，以安全证据控制演进节奏。</h2>
          <div class="decision-roadmap anim" style="--d:2"><div class="roadmap-visual"><img src="assets/briefing/mission-control-terrain.png" alt="山地任务规划与轮腿平台运行示意"><div class="roadmap-overlay"><span>RECOMMENDED PATH</span><b>数字样机 → 控制闭环 → 场景覆盖 → 样机验证</b></div></div><div class="roadmap-actions"><article><span>近期</span><b>闭合关键控制链</b><p>优先验证轮腿协调、完整性监测、急停与安全驻停。</p></article><article><span>中期</span><b>扩大场景覆盖</b><p>建立地形、气象、链路、人员与故障的组合场景库。</p></article><article><span>后续</span><b>形成安全论证</b><p>用可追溯需求和可复现实验支撑部署边界与残余风险。</p></article></div></div>
          <div class="final-claim anim" style="--d:3"><b>最终判断</b><p>四轮腿构型能够在复杂地形中兼顾效率、通过性与任务扩展；其工程可行性取决于感知完整性、实时控制、独立安全链和逐级验证是否同时成立。</p></div>
          ${returnMap}
        </article>`
    },
    {
      section: "团队分工", tone: "debrief", html: `
        <article class="briefing-slide" data-tone="debrief">
          ${topLine("团队分工", "TEAM")}
          <p class="briefing-kicker anim">协同贡献</p><h2 class="anim" style="--d:1">从专业分析到综合呈现。</h2>
          <div class="team-grid"><article class="anim" style="--d:1"><span>01 / SYSTEM SCAN</span><b>系统认知</b><p>黄玮</p></article><article class="anim" style="--d:2"><span>02 / MISSION PLANNING</span><b>需求定义</b><p>杨薪田</p></article><article class="anim" style="--d:3"><span>03 / ARCHITECTURE</span><b>架构构建</b><p>杨子恒</p></article><article class="anim" style="--d:4"><span>04 / TERRAIN SIM</span><b>场景与风险</b><p>郭恺</p></article><article class="anim" style="--d:5"><span>05 / DEBRIEF</span><b>综合汇总与演示制作</b><p>高赫、段欣雨</p></article><article class="anim" style="--d:6"><span>3D MODEL</span><b>三维模型</b><p>段欣雨</p></article></div>
        </article>`
    },
    {
      section: "结算", tone: "debrief", html: `
        <article class="briefing-slide briefing-end" data-tone="debrief">
          ${topLine("任务结算", "BRIEFING COMPLETE")}
          <div><div class="briefing-end-mark anim">✓</div><p class="briefing-kicker anim" style="--d:1">BRIEFING COMPLETE</p><h1 class="anim" style="--d:2">综合分析完成</h1><p class="end-en anim" style="--d:3">SYSTEM · REQUIREMENTS · ARCHITECTURE · SCENARIO · SAFETY</p><div class="end-tags anim" style="--d:4"><span>任务边界</span><span>需求基线</span><span>控制架构</span><span>场景验证</span><span>安全闭环</span></div><h3 class="anim" style="--d:5">感谢审阅</h3><button class="briefing-primary anim" style="--d:6" type="button" data-action="map">返回任务总览</button></div>
        </article>`
    }
  ];

  root.innerHTML = `
    <div class="briefing-frame" id="briefingFrame">
      <div class="briefing-start" id="briefingStart"><div class="briefing-start-inner"><div class="briefing-start-mark">T-15</div><h1>战术任务简报系统</h1><p>TACTICAL MISSION BRIEFING</p><div class="briefing-start-line"></div><button type="button" data-action="start">点击开始展示</button><small>${slides.length} 个交互场景 · 约 15 分钟 · 支持键盘与全屏</small></div></div>
      <button class="briefing-skip" type="button" data-action="skip">跳过动画</button>
      <div class="briefing-toolbar"><button type="button" data-action="sources">资料来源</button><button type="button" data-action="laser">激光笔</button><button type="button" data-action="fullscreen">全屏</button><button type="button" data-action="exit">退出</button></div>
      <div class="briefing-stage" id="briefingStage">${slides.map(item => item.html).join("")}</div>
      <nav class="briefing-nav" aria-label="简报翻页"><button type="button" data-action="prev">← 上一页</button><div class="briefing-progress"><i id="briefingProgress"></i></div><button class="briefing-page" type="button" data-action="map" id="briefingPage">01 / ${slides.length}</button><button type="button" data-action="next">下一页 →</button><button type="button" data-action="replay">重播</button></nav>
      <div class="briefing-laser" id="briefingLaser"></div>
      <aside class="briefing-sources" id="briefingSources" hidden><header><div><p class="briefing-kicker">SOURCE INDEX</p><h2>资料来源</h2></div><button type="button" data-action="close-sources">关闭</button></header><div class="briefing-source-list"><a href="https://aweiiih.github.io/complex-systems-engineering-2026/" target="_blank" rel="noreferrer"><span>01</span><b>系统认知 · 黄玮</b><small>六级系统分解、轮腿构型与系统组成</small></a><a href="https://f1sheepy.github.io/" target="_blank" rel="noreferrer"><span>02</span><b>需求定义 · 杨薪田</b><small>BRS、运行概念、相关方与需求追溯</small></a><a href="https://expolre323.github.io/complex-systems-2026/" target="_blank" rel="noreferrer"><span>03</span><b>架构构建 · 杨子恒</b><small>系统需求、初始架构、控制与安全分析</small></a><a href="https://gk37425601.github.io/complex-systems-engineering-2026/" target="_blank" rel="noreferrer"><span>04</span><b>场景与风险 · 郭恺</b><small>运行条件、场景实例与风险控制</small></a><a href="https://ht272544-prog.github.io/wheel-legged-robot/" target="_blank" rel="noreferrer"><span>05</span><b>综合系统工程网站</b><small>五阶段内容整合、可追溯数据与交互演示</small></a><a href="https://www.iso.org/standard/72089.html" target="_blank" rel="noreferrer"><span>STD</span><b>ISO/IEC/IEEE 29148:2018</b><small>需求工程与需求规格说明框架</small></a></div></aside>
    </div>`;

  const frame = document.getElementById("briefingFrame");
  const start = document.getElementById("briefingStart");
  const slideNodes = [...root.querySelectorAll(".briefing-slide")];
  const progress = document.getElementById("briefingProgress");
  const page = document.getElementById("briefingPage");
  const sources = document.getElementById("briefingSources");
  const laser = document.getElementById("briefingLaser");
  let current = 0;

  function go(index) {
    current = Math.max(0, Math.min(slides.length - 1, Number(index)));
    slideNodes.forEach((node, i) => node.classList.toggle("is-active", i === current));
    progress.style.width = `${((current + 1) / slides.length) * 100}%`;
    page.textContent = `${String(current + 1).padStart(2, "0")} / ${slides.length}`;
    frame.dataset.slide = String(current);
  }

  function exitBriefing() {
    start.hidden = false;
    frame.classList.remove("laser-on");
    sources.hidden = true;
    history.replaceState(null, "", "#top");
    if (typeof setView === "function") setView("hub", "top", false);
    else document.body.dataset.view = "hub";
  }

  function toggleFullscreen() {
    if (document.fullscreenElement) document.exitFullscreen?.();
    else frame.requestFullscreen?.();
  }

  function replay() {
    const active = slideNodes[current];
    active.classList.remove("is-active");
    requestAnimationFrame(() => requestAnimationFrame(() => active.classList.add("is-active")));
  }

  root.addEventListener("click", event => {
    const target = event.target.closest("button,[data-goto],a");
    if (!target) return;
    if (target.matches("[data-goto]")) { go(target.dataset.goto); return; }
    const action = target.dataset.action;
    if (!action) return;
    if (action === "start") { start.hidden = true; go(0); }
    if (action === "prev") go(current - 1);
    if (action === "next") go(current + 1);
    if (action === "map") go(1);
    if (action === "exit") exitBriefing();
    if (action === "fullscreen") toggleFullscreen();
    if (action === "laser") { frame.classList.toggle("laser-on"); target.classList.toggle("active", frame.classList.contains("laser-on")); }
    if (action === "skip") { frame.classList.toggle("animations-off"); target.textContent = frame.classList.contains("animations-off") ? "恢复动画" : "跳过动画"; }
    if (action === "replay") replay();
    if (action === "sources") sources.hidden = false;
    if (action === "close-sources") sources.hidden = true;
  });

  frame.addEventListener("pointermove", event => {
    if (!frame.classList.contains("laser-on")) return;
    const rect = frame.getBoundingClientRect();
    laser.style.left = `${event.clientX - rect.left}px`;
    laser.style.top = `${event.clientY - rect.top}px`;
  });

  frame.addEventListener("click", event => {
    if (event.target.closest("button,a") || !start.hidden || !sources.hidden) return;
    const rect = frame.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    if (ratio <= .14) go(current - 1);
    if (ratio >= .86) go(current + 1);
  });

  frame.addEventListener("dblclick", event => {
    if (!event.target.closest("button,a")) toggleFullscreen();
  });

  const systemDetails = {
    mobility: ["SYS-01 / MOBILITY", "机动执行系统", "接收轨迹、速度包络和模式许可，协调轮端驱动、腿部关节与制动器，输出实际位姿、接触状态、执行器健康和可用能力。", "参考轨迹、模式许可、地形代价", "轮腿动作、制动状态、执行反馈", "姿态、速度、接触力与稳定裕度"],
    perception: ["SYS-02 / PERCEPTION", "感知定位系统", "融合视觉、激光、惯导、轮速与关节状态，生成带时间基准和置信度的环境模型、位姿与完整性判定。", "多源观测、地图、时间同步", "位姿、障碍、地形类别、完整性", "数据新鲜度、协方差与共因失效"],
    autonomy: ["SYS-03 / AUTONOMY", "任务自治系统", "依据任务包、环境模型和安全约束完成任务分解、路线规划、行为选择与异常恢复。", "任务目标、环境模型、控制权限", "行为序列、参考路径、任务状态", "禁行区、授权等级与终止条件"],
    communication: ["SYS-04 / COMMUNICATION", "通信组网系统", "维持任务指令、态势产品、健康状态与接管信息传输，在弱链路下执行分级发送、缓存与补传。", "任务链路、本地网络、消息优先级", "指令确认、状态上报、数据产品", "时延、丢包、失联时长与身份认证"],
    payload: ["SYS-05 / PAYLOAD", "任务载荷系统", "承载侦察、中继、伴随或危险区探测载荷，并通过标准机械、电气、数据和安全接口接入整机。", "载荷任务、供电许可、平台状态", "观测产品、载荷健康、功耗请求", "质量、功率、视场与危险动作互锁"],
    energy: ["SYS-06 / ENERGY", "能源与热管理系统", "完成储能、配电、功率限制、剩余任务时间估算和关键设备热管理。", "功率需求、温度、任务路程", "供电状态、剩余时间、限功率指令", "安全余量、过流、过温与隔离"],
    health: ["SYS-07 / HEALTH", "健康保障系统", "持续监测传感器、计算机、执行器和链路状态，识别故障、评估剩余能力并支持维护。", "自检、运行参数、故障码", "健康等级、可用能力、维护建议", "故障传播、误报漏报与证据完整"],
    hmi: ["SYS-08 / HMI", "人机协同系统", "向操作员呈现任务进度、平台意图、风险与接管请求，并接收授权、模式选择和急停。", "平台状态、风险等级、任务意图", "界面提示、操作命令、授权记录", "认知负荷、确认时限与控制权冲突"],
    data: ["SYS-09 / DATA", "数据与审计系统", "统一时间、坐标和标识，记录需求、任务、控制、故障与人员操作，为复盘和安全论证提供证据。", "全系统事件、配置与版本", "审计日志、证据包、追溯索引", "不可抵赖、完整性与保存周期"],
    safety: ["SYS-10 / SAFETY", "独立安全监督系统", "独立判断定位、姿态、速度、人员隔离和急停状态，对任务控制实施许可、限速、驻停或失能。", "安全传感、控制请求、急停通道", "安全许可、制动、失能与告警", "独立性、故障安全与双通道覆盖"]
  };

  const qualityDetails = {
    necessary: ["必要性判定", "该需求直接支撑复杂地形可达性和人员暴露降低；若删除，核心任务效应无法成立。"],
    clear: ["无歧义判定", "条件、主语、动作、受控边界和异常出口均被明确限定，不依赖“尽量”“适当”等模糊词。"],
    verifiable: ["可验证判定", "规定场景、无碰撞通过、稳定裕度和停止报告均可由场地试验、日志与测量数据共同核验。"],
    traceable: ["可追溯判定", "向上连接任务需求 TR-01，向下分配至机动、感知、控制和安全需求，并关联验证场景。"]
  };

  const riskDetails = {
    "R-02": ["R-02 / HIGH", "路线被落石或塌方阻断", "前方可通行宽度低于平台安全包络，替代落足点不可用。", "停止前进、后退至安全点，重规划替代路线；无解则安全驻停。", "障碍栅格、规划失败码、停车位置、控制状态与操作员确认。", "场景仿真与实地障碍注入，检查无碰撞、停车距离和告警完整性。"],
    "R-03": ["R-03 / CRITICAL", "定位完整性持续低于许可阈值", "位姿协方差增大、传感器不一致或地图匹配连续失败。", "冻结新路径、降速至零，保持制动并请求人工核验或安全返回。", "原始观测、完整性标志、状态转换、接管请求和制动反馈。", "注入遮挡、漂移与时间同步故障，检查停止时限和错误状态隔离。"],
    "R-04": ["R-04 / CRITICAL", "急停请求未产生预期失能", "急停输入有效但驱动使能未撤销，或制动反馈与命令不一致。", "第二独立通道切断驱动能源并机械驻停，锁定恢复权限。", "双通道输入、接触器状态、轮速、制动力和恢复授权记录。", "断线、粘连与单点故障注入，验证任一有效通道均可达到安全状态。"]
  };

  const evidenceDetails = {
    mission: ["MOE-01 / 人员风险降低", "无人平台先行完成危险区域环境侦察", "以人员先期进入次数、危险区域暴露时间和态势产品完整性衡量任务效应；该主张向下连接复杂地形通过、持续感知和安全状态转换需求。", "来源：业务任务分析", "下一节点：StR-MOB-01 / StR-SAF-02"],
    requirement: ["StR-MOB-01 / 复杂地形连续通过", "将任务效应转化为相关方可验收承诺", "需求规定组合地形、授权速度包络、无碰撞通过和异常停止条件，并明确主张者、优先级与场地验证方法。", "上游：MOE-01 / MOE-02", "下一节点：SYS-MOB-01 / SYS-SAF-01"],
    architecture: ["SYS-MOB-01 / 架构分配", "机动、感知、控制与安全共同承担", "通过性由轮腿执行、状态估计、轨迹规划和独立安全监督协同产生；接口明确控制请求、状态反馈与安全许可。", "上游：StR-MOB-01", "下一节点：场景 L02 / L03"],
    scenario: ["SCN-MNT-03 / 山地侦察", "用可复现条件验证系统行为", "在碎石、连续坡、间歇弱链路和授权操作员条件下，注入路径阻断与定位降级，观察通过、驻停和恢复行为。", "上游：SYS-MOB-01 / SYS-SAF-01", "下一节点：测试记录与安全证据"],
    claim: ["CLAIM-01 / 可行性主张", "四轮腿构型可支撑复杂地形任务", "只有需求满足、架构接口正确、风险响应有效且验证证据完整时，才能在规定运行范围内接受该结论。", "证据：模型、仿真、半实物与样机试验", "状态：待逐级验证后确认"]
  };

  root.addEventListener("click", event => {
    const system = event.target.closest("[data-system-focus]");
    if (system) {
      root.querySelectorAll("[data-system-focus]").forEach(item => item.classList.toggle("active", item === system));
      const data = systemDetails[system.dataset.systemFocus];
      const readout = document.getElementById("briefSystemDetail");
      if (readout && data) readout.innerHTML = `<span>${data[0]}</span><h3>${data[1]}</h3><p>${data[2]}</p><dl><div><dt>输入</dt><dd>${data[3]}</dd></div><div><dt>输出</dt><dd>${data[4]}</dd></div><div><dt>安全边界</dt><dd>${data[5]}</dd></div></dl>`;
    }
    const quality = event.target.closest("[data-quality]");
    if (quality) {
      root.querySelectorAll("[data-quality]").forEach(item => item.classList.toggle("active", item === quality));
      const data = qualityDetails[quality.dataset.quality];
      const readout = document.getElementById("briefQualityReadout");
      if (readout && data) readout.innerHTML = `<b>${data[0]}</b><span>${data[1]}</span>`;
    }
    const risk = event.target.closest("[data-risk-brief]");
    if (risk) {
      root.querySelectorAll("[data-risk-brief]").forEach(item => item.classList.toggle("active", item === risk));
      const data = riskDetails[risk.dataset.riskBrief];
      const readout = document.getElementById("briefRiskDetail");
      if (readout && data) readout.innerHTML = `<div class="risk-code">${data[0]}</div><h3>${data[1]}</h3><div class="risk-flow"><article><span>触发</span><b>${data[2]}</b></article><article><span>响应</span><b>${data[3]}</b></article><article><span>证据</span><b>${data[4]}</b></article><article><span>验证</span><b>${data[5]}</b></article></div>`;
    }
    const evidence = event.target.closest("[data-evidence]");
    if (evidence) {
      root.querySelectorAll("[data-evidence]").forEach(item => item.classList.toggle("active", item === evidence));
      const data = evidenceDetails[evidence.dataset.evidence];
      const readout = document.getElementById("briefEvidenceDetail");
      if (readout && data) readout.innerHTML = `<span>${data[0]}</span><h3>${data[1]}</h3><p>${data[2]}</p><div><b>${data[3]}</b><b>${data[4]}</b><b>证据状态：链路完整</b></div>`;
    }
    const tab = event.target.closest("[data-arch]");
    if (tab) {
      const key = tab.dataset.arch;
      root.querySelectorAll(".arch-tab").forEach(item => item.classList.toggle("active", item.dataset.arch === key));
      root.querySelectorAll("[data-arch-view]").forEach(item => item.classList.toggle("active", item.dataset.archView === key));
    }
    const terrain = event.target.closest("[data-terrain]");
    if (terrain) {
      const content = {
        terrain: [["L1","碎石山地","粒径、松散度、可通行宽度与附着水平"],["L2","12° 连续坡","坡向、横坡、局部台阶与侧翻裕度"],["L3","间歇弱链路","时延、丢包、失联持续时间与恢复条件"],["STATE","任务已授权","操作员在岗，能源与定位完整性满足进入条件"]],
        weather: [["VIS","能见度 120 m","薄雾与逆光影响目标识别"],["RAIN","小雨","湿滑地面降低附着并增加制动距离"],["TEMP","-10～40℃","能源与热管理保持额定工作"],["STATE","允许进入","感知置信度和附着估计有效"]],
        network: [["LAT","时延 ≤300 ms","超过门槛时降低自主等级"],["LOSS","丢包 ≤10%","本地缓存并保持关键状态上报"],["OUT","失联 ≤30 s","继续受限任务或进入安全驻停"],["STATE","弹性链路","主链路、中继与本地自治协同"]],
        human: [["AUTH","任务授权有效","高风险动作需要明确确认"],["DUTY","操作员在岗","具备监视、接管与终止能力"],["ZONE","人员隔离","危险区无人并保持警戒"],["STATE","人在回路","授权、接管与审计链完整"]],
        platform: [["SOC","能源 >25%","满足剩余路程和安全余量"],["LOC","定位完整","位置、姿态与协方差连续有效"],["BRAKE","制动正常","急停与驻车保持通过自检"],["STATE","健康可执行","无最高等级故障，配置一致"]]
      }[terrain.dataset.terrain];
      root.querySelectorAll("[data-terrain]").forEach(item => item.classList.toggle("active", item === terrain));
      const readout = document.getElementById("briefingTerrainReadout");
      if (readout) readout.innerHTML = content.map(item => `<article><span>${item[0]}</span><b>${item[1]}</b><p>${item[2]}</p></article>`).join("");
    }
  });

  document.addEventListener("keydown", event => {
    if (document.body.dataset.view !== "briefing") return;
    if (event.key === "ArrowRight" || event.key === " ") { event.preventDefault(); if (!start.hidden) start.hidden = true; else go(current + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); go(current - 1); }
    if (event.key.toLowerCase() === "f") toggleFullscreen();
    if (event.key === "Escape" && !document.fullscreenElement) { if (current !== 1 && start.hidden) go(1); else exitBriefing(); }
  });

  go(0);
  const qaSlide = new URLSearchParams(window.location.search).get("briefing-slide");
  if (qaSlide !== null) {
    start.hidden = true;
    go(Number(qaSlide));
  }
})();
