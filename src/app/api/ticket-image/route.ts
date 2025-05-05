import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 40px',
        }}
      >
        <h1 style={{ fontSize: 48, color: '#00f0ff' }}>NEON LOTTERY</h1>
        <p style={{ fontSize: 24 }}>Ваш билет</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
