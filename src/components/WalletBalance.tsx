'use client';
import { useBalance } from 'wagmi';
import {formatUnits} from 'viem';
import { walletStore } from "@/stores/walletStore";


export const WalletBalance = () => {
  const {address} = walletStore();

   // 获取 ETH 余额
  const { data: ethBalance, isLoading: loadingEth } = useBalance({
    address: address as `0x${string}`,
  });

  /// 获取 ERC20 余额（以 USDC 为例，Polygon 上的 USDC 合约地址）
  const { data: usdcBalance, isLoading: loadingUSDC } = useBalance({
    address: address as `0x${string}`,
    token: '0x12323232333', //TODO: 换成对应ERC20 Token的合约地址
  });

  return (
    <div className="p-4 bg-white shadow rounded-md w-fit mt-4">
      <h2 className="font-semibold mb-2">资产余额</h2>
      <p>
        <strong>ETH：</strong>{' '}
        {loadingEth ? '加载中...' : ethBalance ? `${formatUnits(ethBalance.value, ethBalance.decimals) } ${ethBalance.symbol}` : '-'}
      </p>
      <p>
        <strong>USDC：</strong>{' '}
        {loadingUSDC ? '加载中...' : usdcBalance ? `${formatUnits(usdcBalance.value, usdcBalance.decimals)} ${usdcBalance.symbol}` : '-'}
      </p>
    </div>
  );

}