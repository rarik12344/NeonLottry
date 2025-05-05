import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit'
import { NextResponse } from 'next/server'

export async function POST(req: Request): Promise<Response> {
  const body: FrameRequest = await req.json()
  const { isValid, message } = await getFrameMessage(body)

  if (!isValid) {
    return new NextResponse('Invalid message', { status: 400 })
  }

  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext">
        <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/image">
        <meta property="fc:frame:button:1" content="Купить билет">
        <meta property="fc:frame:button:2" content="Мои билеты">
        <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_SITE_URL}/api/frame">
      </head>
    </html>
  `, {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
