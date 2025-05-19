'use client';
import { useNativeBalance } from '@/hooks/useNativeBalance';

export const NativeBalance = () => {
  const { balance, error } = useNativeBalance();

  return (
    <div className="p-4 rounded bg-white shadow mt-4">
      <h2 className="text-lg font-bold mb-2">💰 原生币余额</h2>

      {error ? (
        <div className="text-red-600">❌ 错误：{error}</div>
      ) : (
        <div>
          <strong>余额:</strong> {balance} ETH
        </div>
      )}
    </div>
  );
};