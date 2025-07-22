// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AUTO1 - Landing Personal | UX/UI & Development',
  description: 'Landing personal profesional con enfoque en UX, desarrollo y testing A/B. Descubre cómo puedo ayudarte a crear experiencias digitales excepcionales.',
  keywords: ['UX', 'UI', 'React', 'Next.js', 'A/B Testing', 'Desarrollo web', 'Landing page'],
  authors: [{ name: 'AUTO1' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AUTO1 - Landing Personal',
    description: 'UX/UI Designer & Developer especializado en experiencias digitales',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        
        {/* Footer simple */}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-600">
              <p>&copy; 2025 AUTO1. Hecho con ❤️ y mucho café.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}