/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['neon-lottery.vercel.app'],
  },
  async headers() {
    return [
      {
        source: '/.well-known/farcaster.json',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Content-Type', value: 'application/json' }
        ]
      }
    ];
  }
};

export default nextConfig;
