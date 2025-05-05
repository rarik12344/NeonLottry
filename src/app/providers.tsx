'use client'
import { FarcasterProvider } from '@farcaster/auth-kit'
import type { ReactNode } from 'react'

const config = {
  rpcUrl: 'https://mainnet.optimism.io',
  domain: 'neonwin.vercel.app',
  siweUri: 'https://neonwin.vercel.app/login'
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <FarcasterProvider config={config}>
      {children}
    </FarcasterProvider>
  )
}
