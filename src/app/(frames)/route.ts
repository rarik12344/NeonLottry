import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'Купить билет',
      },
      {
        label: 'Мои билеты',
      }
    ],
    image: `${process.env.NEXT_PUBLIC_URL}/api/image`,
    postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
  });

  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>
        ${frameMetadata}
      </head>
    </html>
  `);
}
