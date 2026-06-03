# AGENTS.md

本文件为 AI 代理在本仓库中工作的指南。

## 项目状态

**当前仓库为空项目。** 除 `README.md`（标题为 `# FrozenForest-`）外，没有任何源代码、依赖清单或运行配置。

| 检查项 | 状态 |
|--------|------|
| 应用源码 | 不存在 |
| 依赖文件（`package.json`、`pyproject.toml` 等） | 不存在 |
| Docker / docker-compose | 不存在 |
| Makefile / CI 配置 | 不存在 |
| 可运行的服务 | 不存在 |

在推送实际项目代码之前，无法执行 lint、测试、构建或运行应用。

## 仓库信息

- **远程**: `https://github.com/pyc623056388-alt/FrozenForest-`
- **默认分支**: `main`
- **当前提交**: 仅包含 Initial commit

## 添加代码后的建议步骤

当项目代码推送到仓库后，代理应重新扫描并更新本文件，包括：

1. 识别技术栈与包管理器（npm / pnpm / pip / cargo 等）
2. 安装依赖（例如 `npm install`、`pip install -r requirements.txt`）
3. 查找并运行 lint（例如 `npm run lint`、`ruff check`）
4. 查找并运行测试（例如 `npm test`、`pytest`）
5. 以开发模式启动应用（例如 `npm run dev`，**不要**使用生产构建命令）
6. 如有 `docker-compose.yml`，按 README 说明启动所需服务

## Cursor Cloud specific instructions

### 环境现状

Cloud Agent VM 已具备基础工具链，但本仓库**没有可安装的项目依赖**，也**没有可启动的服务**。

### 已验证可用的系统工具

- Git 2.43+
- Node.js 22.x（通过 nvm）
- npm
- Python 3.12

### 启动脚本（update script）

VM 启动时的 update script 为 no-op（`true`），因为仓库中不存在依赖清单。当添加 `package.json`、`requirements.txt` 等文件后，应更新 update script 以包含相应的安装命令。

### 服务

| 服务 | 是否必需 | 说明 |
|------|----------|------|
| （无） | — | 仓库中未定义任何服务 |

### 常用命令

当前无项目级命令。添加代码并更新本节后，在此列出 lint / test / dev 命令。

### 注意事项

- 不要假设 FrozenForest 与 Hugging Face 上的 `James4Ever0/FrozenForest` 数据集或其他同名项目有关；本 GitHub 仓库目前为空。
- 若代码位于其他分支、子模块或尚未推送，需先将其检出或克隆到 `/workspace` 后再进行环境配置。
