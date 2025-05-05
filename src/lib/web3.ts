import { createPublicClient, http, encodeFunctionData } from 'viem'
import { base } from 'viem/chains'
import { ABI } from '../config/constants'

export const publicClient = createPublicClient({
  chain: base,
  transport: http()
})

export async function buyTickets(address: string, tickets: number) {
  return encodeFunctionData({
    abi: ABI,
    functionName: 'buyTickets',
    args: [tickets]
  })
}
