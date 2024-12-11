import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Kevin Elyan - Full Stack Developer',
  description: 'Portfolio of Kevin Elyan, a passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'JavaScript', 'UI/UX'],
  authors: [{ name: 'Kevin Elyan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kevinelyan.com',
    site_name: 'Kevin Elyan Portfolio',
    title: 'Kevin Elyan - Full Stack Developer',
    description: 'Portfolio of Kevin Elyan, a passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kevin Elyan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Elyan - Full Stack Developer',
    description: 'Portfolio of Kevin Elyan, a passionate Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    images: ['/images/twitter-image.jpg'],
    creator: '@kevinelyan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${robotoSlab.variable} font-sans text-zinc-100 antialiased bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900`}>
        {children}
      </body>
    </html>
  )
}

