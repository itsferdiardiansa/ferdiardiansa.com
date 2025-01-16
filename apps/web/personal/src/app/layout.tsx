import { PropsWithChildren } from 'react'
import { Metadata, Viewport } from 'next'
import { unstable_cache as cache } from 'next/cache'
import { getBaseMetadata } from '@/firestore/collections/metadata'
import { BASE_METADATA } from '@/constants/cache/metadata'

import TanstackQueryProviders from '@/contexts/tanstack-query/tanstack-query.provider'
import LenisProviders from '@/contexts/lenis/lenis.provider'

import './globals.scss'

export const dynamic = 'force-dynamic'
// export const revalidate = 2629800 // a month

const getBaseMetadataCached = cache(
  async () => getBaseMetadata(),
  [BASE_METADATA.CACHE_KEY],
  { tags: [...BASE_METADATA.CACHE_TAGS] }
)

export const viewport: Viewport = {
  themeColor: '#1b1d20',
}

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await getBaseMetadataCached()

  return { ...data }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <LenisProviders>
        <body className="bg-[#121315]" data-theme="dark">
          <TanstackQueryProviders>{children}</TanstackQueryProviders>
        </body>
      </LenisProviders>
    </html>
  )
}
