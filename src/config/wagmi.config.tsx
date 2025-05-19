import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygon } from 'wagmi/chains'
import { injected } from 'wagmi/connectors' 


export const chains = [mainnet, polygon, sepolia] as const; // 👈 添加所需的链
// 创建 wagmi 配置
export const config = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
  },
  connectors: [
    injected({     // 👈 使用 injected connector
      target: 'metaMask',
    }),
  ],
  ssr: true,
})