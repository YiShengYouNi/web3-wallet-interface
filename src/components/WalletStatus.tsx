'use client' ;

import { walletStore } from '@/stores/walletStore';

export const WalletStatus = () => {
  const { address, chainId, isConnected } = walletStore();
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow w-fit">
      <h2 className="font-bold mb-2">钱包状态</h2>
      <p><strong>连接状态：</strong> {isConnected ? '✅ 已连接' : '❌ 未连接'}</p>
      <p><strong>账户地址：</strong> {address ?? '-'}</p>
      <p><strong>链 ID：</strong> {chainId ?? '-'}</p>
    </div>
  );
};