
import { create } from 'zustand';

interface WalletState {
  address: string | null;
  chainId: string | number | null;
  isConnected: boolean;
  setWalletInfo: (address: string| null, chainId: string | null) => void;
}


/**
 * Wallet store using Zustand for state management.
 * create(set=>{})
 */
export const walletStore = create<WalletState>((set) => ({
  address: null,
  chainId: null,
  isConnected: false,
  setWalletInfo: (address, chainId) => { // setWalletInfo是我们定义的行为函数（action），用于更新状态
    set({ address, chainId, isConnected: Boolean(address) }); // 这里的set是zustand提供的内部函数，供更新状态
  },
}));