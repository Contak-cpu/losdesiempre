import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Los de Siempre Hub - El Templo de las Zapas',
  description: 'Multi-local de Sneakers & Moda Premium. Río Gallegos, Mendoza y Córdoba. Catálogos, WhatsApp y envíos a todo el país.',
  keywords: 'sneakers, zapatillas, moda, Río Gallegos, Mendoza, Córdoba, Los de Siempre',
  authors: [{ name: 'Los de Siempre' }],
  creator: 'Los de Siempre',
  publisher: 'Los de Siempre',
  robots: 'index, follow',
  metadataBase: new URL('https://losdesiempre-hub.vercel.app'),
  openGraph: {
    title: 'Los de Siempre Hub - El Templo de las Zapas',
    description: 'Multi-local de Sneakers & Moda Premium. Catálogos, WhatsApp y envíos a todo el país.',
    url: 'https://losdesiempre-hub.vercel.app',
    siteName: 'Los de Siempre Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Los de Siempre Hub',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los de Siempre Hub - El Templo de las Zapas',
    description: 'Multi-local de Sneakers & Moda Premium',
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ef4444',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
