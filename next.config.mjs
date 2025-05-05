/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neonwin.vercel.app'
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@vercel/og']
  }
}

export default nextConfig
