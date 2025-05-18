// __tests__/WalletStatus.test.tsx

import React from 'react'
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { WalletStatus } from '@/components/WalletStatus'
import { act } from 'react-dom/test-utils'

// 模拟 zustand store
import { walletStore } from '@/stores/walletStore'

jest.mock('@/hooks/useWalletConnect', () => ({
  useWalletConnect: () => walletStore.getState(),
}))

describe('WalletStatus Component', () => {
  it('shows "Wallet not connected" if disconnected', () => {
    act(() => {
      walletStore.setState({ address: null, chainId: null, isConnected: false })
    })

    render(<WalletStatus />)
    expect(screen.getByTestId('wallet-status')).toHaveTextContent('Wallet not connected')
  })

  it('shows address and chainId if connected', () => {
    act(() => {
      walletStore.setState({ address: '0xABC123', chainId: '1', isConnected: true })
    })

    render(<WalletStatus />)
    expect(screen.getByTestId('wallet-status')).toHaveTextContent('Connected: 0xABC123 on chain 1')
  })
})
