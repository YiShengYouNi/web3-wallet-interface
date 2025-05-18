'use client'

import { WagmiProvider,  http, createConfig } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors' 
import { ReactNode } from 'react'

// 创建 QueryClient（React Query 用于 wagmi 内部缓存）
const queryClient = new QueryClient()

// 创建 wagmi 配置
const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [
    injected({     // 👈 使用 injected connector
      target: 'metaMask',
    }),
  ],
  ssr: true,
  // autoConnect: true,
})

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
