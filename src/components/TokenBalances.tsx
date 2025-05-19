'use client';

import { useTokenBalances } from '@/hooks/useTokenBalances';
import { walletStore } from '@/stores/walletStore';
import { toHexAddress } from '@/utils';

const tokenList = [
  {
    address: toHexAddress('0x26C8412dECE0b35B0cce0ac79040C0B8D1b326D4'), // MET
    name: 'MET',
  },
  {
    address: toHexAddress('0x779877A7B0D9E8603169DdbD7836e478b4624789'), // LINK
    name: 'LINK',
  },
  {
    address: toHexAddress('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'), // USDC
    name: 'USDC',
  },
  {
    address: toHexAddress('0xdAC17F958D2ee523a2206206994597C13D831ec7'), // USDT
    name: 'USDT',
  },
];

// 适合做资产面板（资产列表）

export const TokenBalances = () => {
  const { address } = walletStore();
  const { loading, balances } = useTokenBalances(address as `0x${string}`, tokenList);

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold mb-2">Token 余额</h2>
      {loading && <p>加载中...</p>}
      <ul className="space-y-1">
        {balances.map((b) => (
          <li key={b.name}>
            {b.name}: {b.formatted} {b.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};