import { createPublicClient, http } from 'viem';
import { base } from 'viem/chains';
import { SITE_CONFIG } from '@/config/site';
import { LOTTERY_ABI } from '@/config/constants';

const client = createPublicClient({
  chain: base,
  transport: http()
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
    endTime: roundInfo.endTime,
    ticketPrice: ticketPrice
  };
}
