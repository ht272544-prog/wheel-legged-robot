# 玄武 WL-X｜轮腿式无人平台系统工程知识探索网站

这是一个无需安装依赖、可直接部署到 GitHub Pages 的原生 HTML/CSS/JavaScript 交互网站。全部内容仍位于同一个 `index.html` 页面中，通过视图切换进入：

- 认识系统：`Mission → SoS → Vehicle → Systems → Subsystems → Modules`
- 定义需求：`BMA → BRS → ConOps → OpsCon → Stakeholders → StRS`
- 构建架构：`系统需求规格书 → 初始系统架构 → 系统控制框图 → 安全需求与安全架构`
- 场景与风险：`场景分层 → 场景要素 → ODC → 典型场景 → 安全风险场景`
- 互动挑战：四个连续区域、自动知识终端、可推动任务箱和 60 道本地题库

右上角“演示模式”会把当前知识板块转换成沉浸式章节演示。支持目录、讲者备注、激光笔、缩放、上一页、下一页、自动播放、重播、进度和全屏；键盘可使用 `←` / `→`、`Space`、`F` 和 `Esc`。

## 文件说明

- `index.html`：首页、四大知识板块、互动挑战和演示控制层
- `styles.css`：响应式布局、视觉体系、章节动画与演示模式
- `script.js`：系统数据、追溯/架构/安全交互、演示控制器和游戏逻辑
- `v3.css` / `v3.js`：第二、第三模块专业化内容与交互升级
- `v4-scenario.css` / `v4-scenario.js`：场景分层、ODC 条件判定、典型场景和风险追溯交互
- `data/requirements.js`：网页、架构图、安全图和 Word 共用的需求数据源
- `data/scenarios.js` / `data/odc.js` / `data/risks.js`：场景、运行设计条件与风险场景数据源
- `documents/WL-X_系统需求规格说明书_V1.0.docx`：正式系统需求规格书
- `assets/`：经过筛选和二次加工的 WebP/PNG/SVG 素材
- `ASSET_REPORT.md`：27 张原始素材的审查、处理与采用记录
- `tools/process_assets.py`：可重复运行的图片加工脚本
- `tools/browser_qa.mjs`：基于 Chrome DevTools Protocol 的浏览器截图与交互验收脚本
- `tools/browser_qa_v3.mjs`：六种视口、四大交付物、演示模式和四关游戏验收
- `tools/build_syrs_docx.py`：从统一需求数据生成 Word 规格书

## 本地打开

直接双击 `index.html` 即可。推荐在本目录运行静态服务器：

```powershell
python -m http.server 8000
```

然后访问 `http://127.0.0.1:8000/index.html`。

## 发布到 GitHub Pages

图片不是嵌入在 HTML 中，而是由 `assets/...` 相对路径加载。因此必须把整个 `assets` 目录与网页文件一起提交，不能只上传 HTML、CSS 和 JavaScript。

在 GitHub 仓库的本地克隆根目录执行：

```powershell
git add index.html styles.css script.js v3.css v3.js v4-scenario.css v4-scenario.js assets data documents .nojekyll
git status --short
git commit -m "Deploy WL-X site with image assets"
git push origin main
```

随后在 `Settings → Pages` 中选择 `Deploy from a branch`，分支选择 `main`，目录选择 `/ (root)`。

发布后必须能直接打开下面这类地址：

```text
https://<用户名>.github.io/<仓库名>/assets/vehicles/config-four-wheel-leg.webp
```

如果该地址返回 404，说明图片仍未进入发布分支，或文件名大小写与网页引用不一致。GitHub Pages 运行在区分大小写的环境中；本项目统一使用小写文件名和 `assets/...` 相对路径。

当前页面依赖的图片目录包括：

- `assets/vehicles/`：首页平台图和五类轮腿构型图
- `assets/scenarios/`：ConOps 场景图
- `assets/systems/`：系统架构展开图
- `assets/game/`：互动挑战背景图

需求编号、架构接口、控制关系、安全约束与验证方式均由可编辑的 HTML/SVG 模型表达，并与 Word 规格书保持同源。
