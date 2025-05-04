/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Для лучшей совместимости с Vercel
  reactStrictMode: true,
  // Отключаем неподдерживаемые функции
  experimental: {
    serverComponentsExternalPackages: []
  }
}

module.exports = nextConfig
