/**
 * 检查是否是合法的 EVM 地址
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * 尝试将地址转换为 `0x${string}` 类型，若非法则抛出错误
 */
export function toHexAddress(address: string): `0x${string}` {
  if (!isValidAddress(address)) {
    throw new Error(`Invalid address: ${address}`);
  }
  return address as `0x${string}`;
}