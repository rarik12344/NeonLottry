'use client';

import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { LOTTERY_ABI, CONTRACT_ADDRESS } from '@/config/constants';
import { useState, useEffect } from 'react';
import { parseEther } from 'viem';

export function BuyTicketButton() {
  const [ticketPrice, setTicketPrice] = useState<string>('0');
  const { 
    writeContract,
    data: hash,
    isPending,
    error
  } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    async function fetchTicketPrice() {
      // В реальном проекте замените на вызов контракта
      setTicketPrice('0.005');
    }
    fetchTicketPrice();
  }, []);

  const handleBuy = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: LOTTERY_ABI,
      functionName: 'buyTickets',
      args: [1],
      value: parseEther(ticketPrice),
    });
  };

  return (
    <div className="w-full">
      <button
        onClick={handleBuy}
        disabled={isPending || isConfirming}
        className="neon-button"
      >
        {isPending ? 'Confirming...' : 
         isConfirming ? 'Processing...' : 
         `Buy Ticket (${ticketPrice} ETH)`}
      </button>
      
      {hash && (
        <div className="mt-2 text-sm text-gray-400">
          TX: {hash.slice(0, 10)}...{hash.slice(-8)}
        </div>
      )}
      {isConfirmed && (
        <div className="mt-2 text-green-400 text-sm">
          Transaction confirmed!
        </div>
      )}
      {error && (
        <div className="mt-2 text-red-400 text-sm">
          Error: {error.message}
        </div>
      )}
    </div>
  );
}
