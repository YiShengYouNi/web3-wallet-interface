'use client'
import { useEffect, useRef } from 'react';
import { useAccount, useWalletClient } from 'wagmi';
import { walletStore } from '@/stores/walletStore';

/**
 * useWalletConnect
 * 
 * 自定义 Hook，桥接 wagmi 钱包状态与 Zustand 全局状态
 * 支持链 ID / 账户监听
 */
export const useWalletConnect = () => {

  const { address, chainId, isConnected } = useAccount();
  // console.log("address:", address, "chainId:", chainId, "isConnected:", isConnected);
  const { data: walletClient } = useWalletClient();

  const setWalletInfo = walletStore(s => s.setWalletInfo);

  const lastStateRef = useRef({ address: null as string | null, chainId: null as string | null });


 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // 监听 wagmi 连接状态变化，并同步到 Zustand 状态中
    // setWalletInfo(address ?? null, chainId?.toString() ?? null);
     const newAddress = address ?? null;
    const newChainId = chainId?.toString() ?? null;

    const isChanged =
      newAddress !== lastStateRef.current.address ||
      newChainId !== lastStateRef.current.chainId;

    if (isChanged) {
      console.log('[WalletConnect] 状态变化:', newAddress, newChainId);
      setWalletInfo(newAddress, newChainId);
      lastStateRef.current = { address: newAddress, chainId: newChainId };
    }

  }, [address, chainId, isConnected, walletClient]);

};