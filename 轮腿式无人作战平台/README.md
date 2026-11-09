# 玄武 WL-X｜轮腿式无人作战平台系统工程作业

这是一个无需安装依赖、可直接部署到 GitHub Pages 的静态网页，按课程要求完成：

`任务 Mission → 体系 SoS → 整机 Vehicle → 系统 Systems → 子系统 Subsystems → 模块 Modules`

## 文件说明

- `index.html`：页面结构与作业正文
- `styles.css`：响应式视觉设计、答辩/打印样式
- `script.js`：系统分解数据、搜索筛选、展开折叠和交互逻辑
- `assets/favicon.svg`：网页图标

## 本地打开

直接双击 `index.html` 即可。若浏览器限制本地脚本，可在本目录打开终端运行：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 在 GitHub 新建仓库。
2. 将本目录的全部文件上传到仓库根目录。
3. 打开仓库 `Settings → Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/ (root)`，点击保存。

数分钟后即可通过 GitHub 提供的网址访问。

## 提交前建议修改

在 `index.html` 搜索“课程作业”，可补充小组名称、成员与课程信息。所有性能参数均已标记为概念设计目标，不代表真实装备参数。
