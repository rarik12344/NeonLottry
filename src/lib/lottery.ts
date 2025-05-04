import { createPublicClient, http, parseEther } from 'viem';
import { base } from 'viem/chains';
import { SITE_CONFIG } from '@/config/site';
import { LOTTERY_ABI } from '@/config/constants';

const client = createPublicClient({
  chain: base,
  transport: http(process.env.NEXT_PUBLIC_BASE_RPC_URL)
});

export async function getCurrentRound() {
  const [roundInfo, ticketPrice] = await Promise.all([
    client.readContract({
      address: SITE_CONFIG.contractAddress,
      abi: LOTTERY_ABI,
      functionName: 'getCurrentRoundInfo'
    }),
    client.readContract({
      address: SITE_CONFIG.contractAddress,
      abi: LOTTERY_ABI,
      functionName: 'ticketPriceETH'
    })
  ]);

  return {
    endTime: Number(roundInfo.endTime),
    prizePool: roundInfo.prizePool,
    ticketPrice: ticketPrice,
    participantsCount: Number(roundInfo.participantsCount)
  };
}

export async function buyTicket(fid: number) {
  const address = `0x${fid.toString(16).padStart(40, '0')}` as `0x${string}`;
  const ticketPrice = await client.readContract({
    address: SITE_CONFIG.contractAddress,
    abi: LOTTERY_ABI,
    functionName: 'ticketPriceETH'
  });

  const txHash = await client.writeContract({
    address: SITE_CONFIG.contractAddress,
    abi: LOTTERY_ABI,
    functionName: 'buyTickets',
    args: [1],
    value: ticketPrice,
    account: address
  });

  return txHash;
}
