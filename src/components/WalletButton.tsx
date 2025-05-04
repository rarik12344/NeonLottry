'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';

export function WalletButton() {
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected, chain } = useAccount();

  const handleConnect = () => {
    connect({ connector: injected({ target: 'metaMask' }) });
  };

  return (
    <button
      onClick={isConnected ? () => disconnect() : handleConnect}
      className="neon-button"
    >
      {isConnected ? (
        chain?.unsupported ? (
          'Wrong Network'
        ) : (
          `${address?.slice(0, 6)}...${address?.slice(-4)}`
        )
      ) : (
        'Connect MetaMask'
      )}
    </button>
  );
}
