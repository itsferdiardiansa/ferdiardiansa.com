import { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#1b1d20',
}

export const metadata: Metadata = {
  title: '@its.ferdi',
  applicationName: 'Oxcyn',
  description: 'A person who always curious in software development.',
  authors: [{ name: '@its.ferdi', url: 'https://www.ferdiardiansa.com' }],
  creator: 'Ferdi Ardiansa',
  keywords: ['software engineer frontend', 'typescript', 'react', 'nextjs'],
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicons/icon1.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicons/icon2.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/favicons/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicons/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-primary bg-zinc-200">{children}</body>
    </html>
  )
}
