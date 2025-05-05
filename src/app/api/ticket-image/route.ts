import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const address = searchParams.get('address')

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
          fontFamily: 'sans-serif'
        }}
      >
        <h1 style={{ fontSize: 48, color: '#00f0ff' }}>NEON LOTTERY</h1>
        <p style={{ fontSize: 24 }}>Ваши билеты</p>
        {address && (
          <p style={{ 
            fontSize: 18, 
            backgroundColor: '#222',
            padding: '10px 20px',
            borderRadius: 8,
            marginTop: 20
          }}>
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
