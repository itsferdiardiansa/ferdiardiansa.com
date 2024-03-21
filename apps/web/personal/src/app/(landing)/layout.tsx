import { type PropsWithChildren } from 'react'
import Cursor from '@/components/layout/cursor'

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <section className="h-full xl:max-w-screen-3xl mx-auto md:px-40 px-8">
      {children}

      <Cursor />
    </section>
  )
}
