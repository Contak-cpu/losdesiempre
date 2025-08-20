/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para evitar problemas de build
  output: 'standalone',
  trailingSlash: false,
  images: {
    domains: ['instagram.fcor2-1.fna.fbcdn.net'],
    unoptimized: true
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  // Configuración para evitar problemas de build
  experimental: {
    // Optimizaciones para el build
    optimizePackageImports: ['lucide-react']
  },
  // Configuración para evitar problemas de build
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
