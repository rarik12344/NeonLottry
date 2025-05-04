/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Для статического экспорта
  distDir: 'out',
  images: {
    unoptimized: true // Отключаем оптимизацию изображений
  }
}

module.exports = nextConfig
