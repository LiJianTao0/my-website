# ✏️ Lijiantao· 个人网站

手绘笔记本风格的翻书式个人网站。打开封面，像翻阅一本真实的素描本。

> 📄 **说明**：本网站内容复刻自 [ITomPoland/ui-components](https://github.com/ITomPoland/ui-components)（原作者：Tomasz Szmajda），在原项目基础上进行了改造（全站中文化、内容模板化、去作者链接等），**仅作个人使用与学习**，无商业用途。感谢原作者的开源分享。
>
> 📦 **模板**：如需把这个网站当作模板复用（无名字的通用版），可到本仓库 **Releases（发行版）** 下载 `personal-website-template.zip`——改个名字、换点内容即可部署成你自己的网站。

## ✨ 特色

- **翻书交互**：GSAP 3D 翻页动画，封面打开 / 合上，像真实笔记本
- **内容模板化**：9 张卡片全是可替换的内容模板（改文字、换图片即可）
  - 00-04：动效内容展示（弧形轮播 / 章节堆叠 / 翻页切换 / 图片流 / 文字拼贴）
  - 05-08：图文段落模板（图左文右 / 图右文左 / 通栏大图 / 居中图文）
- **查看器页**：每个模板都有"内容输入区域"，虚线框标注，方便填写内容
- **手绘涂鸦风**：SVG 滤镜抖动、贴纸便签、涂鸦字体，细节满满
- **全站中文化**：零外部依赖图片（纯色占位），作者链接已清零

## 🛠 技术栈

| 技术 | 用途 |
|------|------|
| Vite 8 | 构建工具 |
| Vanilla JavaScript | 无前端框架 |
| GSAP + ScrollTrigger | 翻页 / 滚动动画 |
| Lenis | 平滑滚动（可选） |

## 🚀 本地开发

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器 → http://localhost:5173
npm run build      # 生产构建 → dist/
```

## 📦 部署（GitHub Pages）

1. 执行 `npm run build`，产物在 `dist/`
2. 将 `dist/` 内容推送到仓库（`base` 已配置为相对路径 `'./'`，子路径部署无需改动）
3. GitHub 仓库 **Settings → Pages** → Source 选分支部署即可

## 📁 内容怎么改

- 首页结构 / 书签 / 便签：`index.html`
- 网格卡片标题与描述：`src/data/components.js`
- 模板内容（标题、文字、图片）：对应 `components/` 目录下组件的 `preview.html` / `src/` 文件
- 封面书名：`index.html` 的 `.cover-title`

## 📌 待办

- [ ] 替换头像 `avatar.png` 为真实照片
- [ ] 填充 9 张卡片为真实作品内容
- [ ] 自定义联系方式页内容
