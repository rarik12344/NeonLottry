import { ImageResponse } from 'next/og';
import { SITE_CONFIG } from '@/config/site';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const txHash = searchParams.get('tx');

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00f3ff',
          fontFamily: 'sans-serif',
          padding: '40px'
        }}
      >
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>NEON LOTTERY</h1>
        <p style={{ fontSize: 24 }}>Your ticket is confirmed!</p>
        {txHash && (
          <p style={{ fontSize: 16, marginTop: 20, color: '#aaa' }}>
            TX: {txHash.slice(0, 6)}...{txHash.slice(-4)}
          </p>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
