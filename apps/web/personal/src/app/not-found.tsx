'use client'

import Link from 'next/link'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#121315] via-[#1e1f26] to-[#121315] text-slate-200 px-6 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-screen-xl">
        <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-left lg:pr-10 mt-12 lg:mt-0">
          <h2 className="text-4xl font-bold text-teal-300">
            Uh-oh! You&#39;re off the map
          </h2>
          <p className="mt-4 text-lg text-slate-200 max-w-md">
            It seems you&#39;ve ventured into the unknown. Don&#39;t worry, it
            happens to the best of us. Maybe try heading{' '}
            <Link href="/" className="text-teal-400 hover:text-teal-300">
              back home?
            </Link>
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center lg:pl-10">
          <div className="w-full max-w-md lg:max-w-2xl">
            <DotLottieReact src="/assets/walking.lottie" loop autoplay />
          </div>
        </div>
      </div>
    </div>
  )
}
