# 暖窝猫舍 · NuanWo Cattery

高级猫舍展示网站 — 用 React + Tailwind CSS 构建，生动呈现与小猫的故事，并展示精选猫咪用品。

## 技术栈

- **React 19** + **TypeScript**
- **Vite** 构建工具
- **Tailwind CSS v4** 样式
- **Vitest** + **Testing Library** 测试

## 快速开始

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 生产构建
npm run test     # 运行测试
npm run lint     # 代码检查
```

## 项目结构

```
src/
├── components/     # UI 组件（Header、Hero、FeatureCards、Footer）
├── test/           # 测试配置
├── App.tsx         # 主页面
└── main.tsx        # 入口
```

## 部署到 Vercel（手机也能访问）

### 方式一：一键导入（推荐，约 2 分钟）

1. 打开 [Vercel 导入本项目](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpyc623056388-alt%2FFrozenForest-&project-name=nuanwo-cattery&framework=vite)
2. 使用 GitHub 登录并授权 Vercel
3. 保持默认构建设置（已包含 `vercel.json`），点击 **Deploy**
4. 完成后会得到 `https://xxx.vercel.app` 公网地址，手机浏览器直接打开即可

### 方式二：本地 CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## 功能规划

- [x] 欢迎主页
- [x] Vercel 部署配置
- [ ] 小猫故事时间线
- [ ] 猫咪用品展示与详情
