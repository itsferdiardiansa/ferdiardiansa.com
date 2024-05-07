'use client'

import { type PropsWithChildren } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function LenisProviders({ children }: PropsWithChildren) {
  const lenis = useLenis(() => {})

  return (
    <ReactLenis
      options={{
        duration: 2,
      }}
      root
    >
      {children}
    </ReactLenis>
  )
}
