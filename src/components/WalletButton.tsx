'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function WalletButton() {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  return (
    <button
      onClick={() => isConnected ? disconnect() : connect()}
      className="neon-button"
    >
      {isConnected ? (
        `Connected: ${address?.slice(0, 6)}...${address?.slice(-4)}`
      ) : (
        'Connect MetaMask'
      )}
    </button>
  );
}
