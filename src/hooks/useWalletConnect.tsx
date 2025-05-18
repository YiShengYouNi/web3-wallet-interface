'use client'
import { useEffect } from 'react'
import { useAccount, useWalletClient } from 'wagmi'
import { walletStore } from '@/stores/walletStore';

/**
 * useWalletConnect
 * 
 * 自定义 Hook，桥接 wagmi 钱包状态与 Zustand 全局状态
 * 支持链 ID / 账户监听
 */
export const useWalletConnect = () => {

  const { address, chainId, isConnected } = useAccount();
  console.log("address:", address, "chainId:", chainId, "isConnected:", isConnected);
  const { data: walletClient } = useWalletClient();

  const setWalletInfo = walletStore(s => s.setWalletInfo);

 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // 监听 wagmi 连接状态变化，并同步到 Zustand 状态中
    setWalletInfo(address ?? null, chainId?.toString() ?? null);

  }, [address, chainId, isConnected, walletClient]);

  return walletStore();
};