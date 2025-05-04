'use client';

import { useAccount, useReadContract } from 'wagmi';
import { SITE_CONFIG } from '@/config/site';
import { LOTTERY_ABI } from '@/config/constants';

export function TicketCard({ price }: { price: bigint }) {
  const { address } = useAccount();
  const { data: userTickets } = useReadContract({
    address: SITE_CONFIG.contractAddress,
    abi: LOTTERY_ABI,
    functionName: 'getParticipantInfo',
    args: [0, 0], // Simplified for example
    account: address
  });

  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
      <div className="flex justify-between mb-4">
        <span className="text-gray-400">Ticket Price:</span>
        <span className="font-mono">{Number(price) / 1e18} ETH</span>
      </div>
      {address && (
        <div className="flex justify-between mb-6">
          <span className="text-gray-400">Your Tickets:</span>
          <span className="font-mono">{userTickets?.toString() || 0}</span>
        </div>
      )}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
        Buy Ticket
      </button>
    </div>
  );
}
