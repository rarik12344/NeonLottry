'use client'

import { Frame } from '@coinbase/onchainkit'

export default function LotteryFrame() {
  return (
    <Frame
      postUrl={`${process.env.NEXT_PUBLIC_SITE_URL}/api/frame`}
      image={{
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/frame-preview.jpg`,
        aspectRatio: '1.91:1'
      }}
      buttons={[
        { label: 'Купить билет', action: 'post' },
        { label: 'Мои билеты', action: 'post' }
      ]}
    />
  )
}
