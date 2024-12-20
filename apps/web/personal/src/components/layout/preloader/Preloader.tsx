'use client'

import { useState, useEffect, useRef } from 'react'
import './Preloader.style.scss'

const messages = [
  "We're cooking the content, please wait.",
  'Brewing fresh ideas for you...',
  'Almost there, hold tight!',
  'Loading creativity into your screen...',
  'Fetching awesomeness, hang on!',
]

export default function RootLoader() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [messageReady, setMessageReady] = useState(false)
  const messageIndex = useRef(Math.floor(Math.random() * messages.length))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessageReady(true)
    }, 50)

    const interval = setInterval(() => {
      setActiveStep(prev => (prev === 5 ? 1 : (prev || 0) + 1))
    }, 800)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="bg-[#121315] flex flex-col justify-center items-center min-h-screen">
      <div className="stairs-loader relative mb-8">
        {[1, 2, 3, 4, 5].map((i, _) => (
          <div
            key={i}
            className={`stair bg-white`}
            style={{
              left: `${i * 30}px`,
              height: activeStep === i ? `${i * 18 - 1}px` : `${i * 20}px`,
            }}
          ></div>
        ))}

        <div className="ball bg-teal-500"></div>
      </div>

      {messageReady && (
        <p className="text-[#e0eeee] text-lg font-medium">
          {messages[messageIndex.current]}
        </p>
      )}
    </div>
  )
}
