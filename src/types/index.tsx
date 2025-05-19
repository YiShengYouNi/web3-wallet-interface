import { chains } from '@/config/wagmi.config'

export type SupportedChainId = typeof chains[number]['id']

export type Token = {
  address: `0x${string}`;
  name: string;
  symbol: string;
  decimals?: number;
};