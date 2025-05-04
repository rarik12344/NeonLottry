import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ff5555',
          fontFamily: 'sans-serif'
        }}
      >
        <h1 style={{ fontSize: 48 }}>Error Occurred</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
