import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame'
import { NextResponse } from 'next/server'
import { NEXT_PUBLIC_URL } from '../../config'

export async function POST(req: Request): Promise<Response> {
  const body: FrameRequest = await req.json()
  const { isValid, message } = await getFrameMessage(body, {
    neynarApiKey: process.env.NEYNAR_API_KEY
  })

  if (!isValid) {
    return new NextResponse('Invalid message', { status: 400 })
  }

  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext">
        <meta property="fc:frame:image" content="${NEXT_PUBLIC_URL}/api/image">
        <meta property="fc:frame:button:1" content="Buy Ticket">
        <meta property="fc:frame:button:2" content="My Tickets">
        <meta property="fc:frame:post_url" content="${NEXT_PUBLIC_URL}/api/frame">
      </head>
    </html>
  `)
}
