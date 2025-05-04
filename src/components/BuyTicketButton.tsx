'use client';

import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { LOTTERY_ABI, CONTRACT_ADDRESS } from '@/config/constants';

export function BuyTicketButton() {
  const { 
    writeContract,
    data: hash,
    isPending 
  } = useWriteContract();

  const { isLoading: isConfirming } = useWaitForTransactionReceipt({ hash });

  const handleBuy = async () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: LOTTERY_ABI,
      functionName: 'buyTickets',
      args: [1], // 1 ticket
      value: await getTicketPrice(),
    });
  };

  return (
    <button
      onClick={handleBuy}
      disabled={isPending || isConfirming}
      className="neon-button"
    >
      {isPending ? 'Confirming...' : 
       isConfirming ? 'Processing...' : 'Buy Ticket (0.005 ETH)'}
    </button>
  );
}

async function getTicketPrice(): Promise<bigint> {
  // Реализуйте получение цены билета
  return BigInt(5000000000000000); // 0.005 ETH в wei
}
