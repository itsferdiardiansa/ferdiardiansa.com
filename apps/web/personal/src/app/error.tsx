'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#121315] via-[#1e1f26] to-[#121315] text-slate-200 px-6">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold text-teal-300">
          Whoops! Something broke...
        </h2>
      </div>

      <div className="w-full max-w-md lg:max-w-lg mb-4">
        <DotLottieReact
          src="/assets/internal-server-error.lottie"
          style={{ width: '100%', maxWidth: '800px', height: 'auto' }}
          loop
          autoplay
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="mt-4 text-lg text-slate-200 max-w-md lg:max-w-2xl">
          We encountered an unexpected issue on our side. Don&#39;t worry,
          we&#39;re working on it — please revisit soon.
        </p>
      </div>
    </div>
  )
}
