/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  // Configuración para sitio estático
  experimental: {
    // Deshabilitar características que requieren servidor
    serverComponentsExternalPackages: [],
  }
}

module.exports = nextConfig
