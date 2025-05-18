This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## ✦ 基础功能完整化

| 功能 | 说明 |
|---|---|
| ✅ 钱包连接/断开  | 使用 wagmi hooks |
| ✅ 链ID、账户监听 | 使用 useWeb3 + zustand |
| ⏳ 钱包信息展示 | 地址缩写、链名、图标 |
| ⏳ 网络切换功能 | switchNetwork 封装 |
| ⏳ 显示 ETH 余额  | 结合 viem 获取余额 |
| ⏳ 连接错误处理  | 显示提示或 Toast |

## ✦ 可选增强功能（高级简历加分）

| 功能 | 说明 |
|---|---|
| ⏳ 持 WalletConnect | 多钱包支持 |
| ⏳ 支持 dark/light 切换 | 使用 Tailwind |
| ⏳ 响应式 UI | 手机端适配 |
| ⏳ 钱包单元测试（可选） | Jest + RTL态 |
| ⏳ 部署上线 | 使用 Vercel 一键部署 |

## ✅ 阶段 3：撰写 README（你的简历一部分）

建议包含：

🚀 项目介绍：Web3 钱包连接 + 状态管理 + Hook 封装

📦 技术栈：Next.js App Router + wagmi + viem + zustand + Tailwind

🧠 亮点总结：如封装、监听、状态集中管理等

🔧 使用说明：如何运行项目、如何部署

📸 项目截图（加分项）

🌐 在线 Demo 链接（Vercel）

✅ 阶段 4：部署到 Vercel
登录 <https://vercel.com，用> GitHub 账号导入项目，一键部署即可。
