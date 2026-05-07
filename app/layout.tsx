import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'FE Beauty Power — Centro Estetico Milano',
  description:
    'Centro estetico di lusso a Milano. Beauty Therapy, Nail Art ed Epilazione Laser.',
  keywords: ['centro estetico', 'milano', 'nail art', 'beauty therapy', 'epilazione laser'],
  openGraph: {
    title: 'FE Beauty Power — Centro Estetico Milano',
    description: 'Beauty Therapy · Nail Art · Epilazione Laser',
    locale: 'it_IT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
