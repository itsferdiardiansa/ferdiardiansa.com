import { type PropsWithChildren } from 'react'
import Cursor from '@/components/layout/cursor'
import Header from '@root/src/components/layout/header'
import Footer from '@root/src/components/layout/footer'

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <div className="group/spotlight relative">
      <div className="mx-auto min-h-screen max-w-screen-xl p-6 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {children}

            <Footer />
          </main>
        </div>

        <Cursor />
      </div>
    </div>
  )
}
