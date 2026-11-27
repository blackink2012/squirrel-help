# Squirrel Asset Manager — 在线帮助

这是产品内「帮助中心」的公网镜像，由主项目的 `tools/publish_help_pages.py` 生成，**不要手改**。

- 访问地址：<https://help.miqi-x.com/squirrel-help/>（自定义域名，见 `CNAME`；<user>.github.io 会 301 过来）
- 内容源：主项目 `squirrel_asset_manager/Assets/help/v2`（Markdown → `tools/build_help.py` 渲染）
- 本仓库只保留运行时文件；`kb/`（语义索引）、`pages*/`（Markdown 源）、`toc.source.json` 不发布
- 搜索：静态托管没有 `/api/help/search`，前端自动退回**本地词法检索**；语义检索只在产品内可用
- 更新方式（在主项目执行）：

```powershell
python tools/build_help.py          # 改完内容先重建
python tools/publish_help_pages.py  # 同步到本仓库并推送（GitHub Pages 自动构建）
```
