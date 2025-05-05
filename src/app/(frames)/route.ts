import { NextResponse } from 'next/server'
import { getFrameMetadata } from '@coinbase/onchainkit'

export async function POST() {
  const frameMetadata = getFrameMetadata({
    buttons: [
      { label: 'Купить билет', action: 'post' },
      { label: 'Мои билеты', action: 'post' }
    ],
    image: {
      src: `${process.env.NEXT_PUBLIC_URL}/api/image`,
      aspectRatio: '1.91:1'
    },
    postUrl: `${process.env.NEXT_PUBLIC_URL}/api/frame`,
  })

  return new NextResponse(`
    <!DOCTYPE html>
    <html>
      <head>${frameMetadata}</head>
    </html>
  `)
}
