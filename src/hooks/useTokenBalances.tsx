import { useReadContracts } from 'wagmi';
import { erc20Abi, formatUnits } from 'viem';
import { useMemo } from 'react';
import { walletStore } from '@/stores/walletStore';
import { Token } from '@/types';


interface UseTokenBalancesProps {
  tokens: Token[],
  pollInterval?: number; // 轮询间隔，单位毫秒
}

export const useTokenBalances = ( {tokens, pollInterval}: UseTokenBalancesProps) => {
  const {address, isConnected} = walletStore();
  
  const contracts = useMemo(() => {
    if (!isConnected || !address) return []

    return tokens.map(token => ({
      address: token.address,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [address],
    }))
  }, [tokens, address, isConnected])
  
  const { data, isLoading, error, refetch } = useReadContracts({
    contracts,
    query: {
      enabled: !!address && isConnected && contracts.length > 0,
       staleTime: 10_000, // 可缓存 10 秒
      refetchInterval: pollInterval ?? false, // 可配置自动刷新
    }, // 实时监听变动（可选）
  });
  // console.log('data', data);
  const balances = useMemo(() => {
    if (!data || !tokens.length) return []

    return tokens.map((token, i) => {
      const result = data[i]
      const raw = result?.result?.toString() ?? '0'
      return {
        ...token,
        balance: formatUnits(BigInt(raw), token.decimals?? 0),
      }
    })
  }, [data, tokens])
  
  return {
    balances,
    isLoading,
    error,
    refetch,
  }
};
