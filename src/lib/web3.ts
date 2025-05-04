import { createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { BASE_RPC_URL } from '@/config/constants';

export const config = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(BASE_RPC_URL),
  },
  connectors: [
    injected({
      target: 'metaMask',
    }),
  ],
});

export { type Chain, type Client, type Connector } from 'wagmi';
