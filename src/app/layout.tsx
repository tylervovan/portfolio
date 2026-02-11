import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Cursor } from '@/components/ui/Cursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tyler Vovan | Portfolio',
  description: 'CS Student · Polymarket Builder · Creating things that matter',
  openGraph: {
    title: 'Tyler Vovan | Portfolio',
    description: 'CS Student · Polymarket Builder · Creating things that matter',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} bg-neutral-950 font-sans text-white antialiased`}
      >
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
