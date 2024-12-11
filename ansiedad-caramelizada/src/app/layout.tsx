import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ansiedad Caramelizada',
  description: 'Sitio oficial de Ansiedad Caramelizada',
  openGraph: {
    title: 'Ansiedad Caramelizada',
    description: 'Sitio oficial de Ansiedad Caramelizada',
    images: [
      {
        url: 'https://raw.githubusercontent.com/AlbbercaGit/videos/main/ansiedadcaramelizada-ep-cover-redes.jpg',
        width: 1200,
        height: 1200,
        alt: 'Ansiedad Caramelizada',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={roboto.className}>
      <body>{children}</body>
    </html>
  )
}

