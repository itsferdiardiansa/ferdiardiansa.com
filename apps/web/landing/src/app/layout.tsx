import { PropsWithChildren } from 'react'
import { Metadata, Viewport } from 'next'
import { unstable_cache as cache } from 'next/cache'
import { getBaseMetadata } from '@/firestore/collections/metadata'

import './globals.css'

const getBaseMetadataCache = cache(
  async () => getBaseMetadata(),
  ['baseMetadata'],
  { tags: ['baseMetadata'] }
)

export const viewport: Viewport = {
  themeColor: '#1b1d20',
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getBaseMetadataCache()

  return { ...data }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="dark:bg-primary bg-zinc-200">{children}</body>
    </html>
  )
}
