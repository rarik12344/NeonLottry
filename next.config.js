/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Оптимально для Vercel
  reactStrictMode: true,
  images: {
    domains: [https://neonwin.vercel.app/],
  },
}

module.exports = nextConfig
