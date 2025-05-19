
import { formatEther } from 'viem';
import { useBalance } from 'wagmi';
import { walletStore} from '@/stores/walletStore';
import { toHexAddress} from '@/utils';

export const useNativeBalance = () => {

  const { address, chainId } = walletStore();
  const { data, error } = useBalance({
    address: address ? toHexAddress(address) : undefined,
    chainId: chainId ? Number(chainId) : undefined,
   query: { enabled: !!address },
  });

  return {
    balance: formatEther(data?.value?? 0n)  ?? '0',
    error: error?.message ?? null,
  }
}