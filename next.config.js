/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['instagram.fcor2-1.fna.fbcdn.net'],
    unoptimized: true
  },
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
