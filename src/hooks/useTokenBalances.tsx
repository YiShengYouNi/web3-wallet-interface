import { useBalance } from 'wagmi';
import { formatUnits } from 'viem';

type Token = {
  address: `0x${string}`;
  name: string;
};

type TokenBalanceResult = {
  name: string;
  symbol: string;
  value: bigint;
  decimals: number;
  formatted: string;
}

export const useTokenBalances = (address: `0x${string}`,  tokenList: Token[]) : { loading:boolean, balances: TokenBalanceResult[]}=> {
   
  const tokens = tokenList.slice(0, 3); // 目前支持最多3个token

  const b1 = useBalance({
    address,
    token: tokens[0]?.address,
    query: { enabled: !!address && !!tokens[0]?.address },
  });

  const b2 = useBalance({
    address,
    token: tokens[1]?.address,
    query: { enabled: !!address && !!tokens[1]?.address },
  });

  const b3 = useBalance({
    address,
    token: tokens[2]?.address,
    query: { enabled: !!address && !!tokens[2]?.address },
  });

  const balancesRaw = [b1, b2, b3];

  const balances: TokenBalanceResult[] = balancesRaw.map((b, i) => {
    const token = tokens[i];
    return b.data
      ? {
          name: token.name,
          symbol: b.data.symbol,
          value: b.data.value,
          decimals: b.data.decimals,
          formatted: formatUnits(b.data.value, b.data.decimals),
        }
      : {
          name: token.name,
          symbol: '',
          value: 0n,
          decimals: 18,
          formatted: '0',
        };
  });

  // console.log('balances', balances);
  const loading = balancesRaw.some((b) => b.isLoading);

  return { loading, balances };
};
