import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Flavia Fernández Olivera - Junior Software Engineer | AUTO1 Candidate',
  description: 'From advertising strategy to software development. Vue.js, React & TypeScript developer with product-focused mindset, ready to join AUTO1\'s international team.',
  keywords: [
    'Software Engineer', 
    'Vue.js', 
    'React', 
    'TypeScript', 
    'Frontend Developer', 
    'Next.js', 
    'AUTO1', 
    'Junior Developer',
    'Nuxt.js',
    'TailwindCSS',
    'JavaScript'
  ],
  authors: [{ name: 'Flavia Fernández Olivera', url: 'https://github.com/flaviaolivera' }],
  creator: 'Flavia Fernández Olivera',
  category: 'Landing Page',
  viewport: 'width=device-width, initial-scale=1',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://auto1-landing.vercel.app',
    title: 'Flavia Fernández Olivera - Junior Software Engineer | AUTO1 Candidate',
    description: 'From advertising strategy to software development. Vue.js, React & TypeScript developer ready to join AUTO1\'s international team.',
    siteName: 'Flavia Fernández Olivera - AUTO1 Landing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flavia Fernández Olivera - Junior Software Engineer | AUTO1 Candidate',
    description: 'Vue.js, React & TypeScript developer with strategic thinking and product-focused mindset.',

  },
  alternates: {
    canonical: 'https://auto1-landing.vercel.app',
  },
  other: {
    'application-name': 'AUTO1 Candidate Landing',
    'apple-mobile-web-app-title': 'AUTO1 Landing',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
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
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}