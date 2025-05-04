'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export function WalletButton() {
  const { address } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (address) {
    return (
      <button
        onClick={() => disconnect()}
        className="w-full bg-gray-700 py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors"
      >
        Disconnect: {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: injected() })}
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
    >
      Connect Wallet
    </button>
  );
}
