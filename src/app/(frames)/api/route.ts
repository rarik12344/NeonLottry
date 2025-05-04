
import { FrameRequest, getFrameMessage } from 'frames.js';
import { NextResponse } from 'next/server';
import { SITE_CONFIG } from '@/config/site';
import { getCurrentRound, buyTicket } from '@/lib/lottery';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body: FrameRequest = await req.json();
  const { message } = await getFrameMessage(body);

  if (!message?.isValid) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    if (message.buttonIndex === 1) {
      const txHash = await buyTicket(message.fid);
      return NextResponse.json({
        image: `${SITE_CONFIG.url}/api/ticket-image?tx=${txHash}`,
        buttons: [
          { label: 'View TX', action: 'link', target: `https://basescan.org/tx/${txHash}` },
          { label: 'Buy Again', action: 'post' }
        ],
        post_url: `${SITE_CONFIG.url}/api/frame`
      });
    }

    return NextResponse.json({
      image: `${SITE_CONFIG.url}${SITE_CONFIG.frameImage}`,
      buttons: [
        { label: '🎟️ Buy Ticket', action: 'post' },
        { label: '🏆 Winners', action: 'post' }
      ],
      post_url: `${SITE_CONFIG.url}/api/frame`
    });
  } catch (error) {
    console.error('Frame error:', error);
    return NextResponse.json({
      image: `${SITE_CONFIG.url}/api/error-image`,
      buttons: [
        { label: 'Retry', action: 'post' }
      ]
    });
  }
}
