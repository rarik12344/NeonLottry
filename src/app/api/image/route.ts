import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: 'white',
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#00f0ff' }}>NEON LOTTERY</span>
        <span style={{ fontSize: 40, marginTop: 20 }}>Выиграй ETH на Base</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
