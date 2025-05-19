'use client';

import { useTokenBalances } from '@/hooks/useTokenBalances';
import { toHexAddress } from '@/utils';

const tokenList = [
  {
    address: toHexAddress('0x26C8412dECE0b35B0cce0ac79040C0B8D1b326D4'), // MET
    name: 'MET',
    symbol: 'MET',
    decimals: 18,
  },
  {
    address: toHexAddress('0x779877A7B0D9E8603169DdbD7836e478b4624789'), // LINK
    name: 'LINK',
    symbol: 'LINK',
    decimals: 18,
  },
  {
    address: toHexAddress('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'), // USDC
    name: 'USDC',
    symbol: 'USDC',
    decimals: 6,
  },
  {
    address: toHexAddress('0xdAC17F958D2ee523a2206206994597C13D831ec7'), // USDT
    name: 'USDT',
    symbol: 'USDT',
    decimals: 6,
  },
];

// 适合做资产面板（资产列表）

export const TokenBalances = () => {
  const { isLoading, balances,refetch } = useTokenBalances({tokens: tokenList, pollInterval: 15_000}); // 15秒自动刷新一次

  return (
    <div className="p-4 border rounded-md">
      <h2 className="font-bold mb-2">Token 余额</h2>
      {isLoading && <p>加载中...</p>}
      <ul className="space-y-1">
        {balances.map((b) => (
          <li key={b.name}>
            {b.name}: {b.balance} {b.symbol}
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>手动刷新</button>
    </div>
  );
};