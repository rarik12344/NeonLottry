import { NextResponse } from 'next/server'
import { Abi, createPublicClient, http, parseEther } from 'viem'
import { base } from 'viem/chains'

const client = createPublicClient({
  chain: base,
  transport: http()
})

const ABI: Abi = [{
  "inputs": [{"name":"_tickets","type":"uint32"}],
  "name":"buyTickets",
  "outputs":[],
  "stateMutability":"payable",
  "type":"function"
}]

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const address = searchParams.get('address')
  
  if (!address) {
    return NextResponse.json({ error: 'Address required' }, { status: 400 })
  }

  const txData = await client.prepareTransactionRequest({
    account: address as `0x${string}`,
    to: process.env.CONTRACT_ADDRESS as `0x${string}`,
    data: encodeFunctionData({
      abi: ABI,
      functionName: 'buyTickets',
      args: [1] // 1 билет
    }),
    value: parseEther('0.001') // Пример цены
  })

  return NextResponse.json({
    chainId: `eip155:${base.id}`,
    method: 'eth_sendTransaction',
    params: {
      ...txData,
      gas: txData.gas?.toString()
    }
  })
}
