/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
  },
  // Configuración para build estático
  distDir: 'out',
  // No generar archivos de servidor
  generateBuildId: async () => {
    return 'static-build'
  }
}

module.exports = nextConfig
