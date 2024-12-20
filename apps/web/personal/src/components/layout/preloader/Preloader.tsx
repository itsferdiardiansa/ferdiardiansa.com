'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import messages from '@/constants/greetings'

import './Preloader.style.scss'

const positions = [
  { x: 0, y: 0, scale: 1 },
  { x: 15, y: -35, scale: 1 },
  { x: 35, y: -16, scale: 0.8 },
  { x: 45, y: -55, scale: 1 },
  { x: 65, y: -36, scale: 0.8 },
  { x: 75, y: -75, scale: 1 },
  { x: 95, y: -56, scale: 0.8 },
  { x: 105, y: -95, scale: 1 },
  { x: 125, y: -76, scale: 0.8 },
  { x: 135, y: -115, scale: 1 },
  { x: 155, y: -96, scale: 0.8 },
]

export default function RootLoader() {
  const [currentMessage, setCurrentMessage] = useState(
    messages[Math.random() * messages.length]
  )
  const [previousMessage, setPreviousMessage] = useState<string | null>(null)
  const [messageReady, setMessageReady] = useState<boolean>(false)
  const [remainingMessages, setRemainingMessages] = useState<string[]>([])
  const ballRef = useRef<HTMLDivElement>(null)
  const stairsRef = useRef<(HTMLDivElement | null)[]>([])
  const messageDelay = useRef<number>(1)

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, yoyo: true })

    positions.forEach((pos, i) => {
      timeline.to(ballRef.current, {
        x: pos.x,
        y: pos.y,
        scale: pos.scale,
        duration: 0.25,
        ease: 'power1.inOut',
        onStart: () => {
          const step = stairsRef.current[i]
          if (step) {
            const baseHeight = i * 20
            gsap.to(step, {
              height: `${baseHeight - 4}px`,
              duration: 0.25,
              delay: i * 0.25,
            })
          }
        },
        onComplete: () => {
          const step = stairsRef.current[i]
          if (step) {
            const baseHeight = i * 20
            gsap.to(step, {
              height: `${baseHeight}px`,
              duration: 0.25,
              delay: i * 0.25,
            })
          }
        },
      })
    })

    return () => {
      timeline.kill()
    }
  }, [])

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setPreviousMessage(currentMessage)
      setRemainingMessages(prev => {
        if (prev.length === 0) {
          const resetMessages = [...messages]
          const nextMessage = resetMessages.splice(
            Math.floor(Math.random() * resetMessages.length),
            1
          )[0]
          setCurrentMessage(nextMessage)
          return resetMessages
        } else {
          const randomIndex = Math.floor(Math.random() * prev.length)
          const nextMessages = [...prev]
          const nextMessage = nextMessages.splice(randomIndex, 1)[0]
          setCurrentMessage(nextMessage)
          return nextMessages
        }
      })

      gsap
        .timeline()
        .to('.old-message', {
          y: '-100%',
          opacity: 0,
          duration: messageDelay.current,
          onComplete: () => setPreviousMessage(null),
        })
        .fromTo(
          '.new-message',
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: messageDelay.current }
        )
    }, messageDelay.current * 1000)

    return () => {
      clearInterval(messageInterval)
    }
  }, [currentMessage])

  const setStairRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      stairsRef.current[index] = el
    }
  }

  return (
    <div className="bg-[#121315] flex flex-col justify-center items-center min-h-screen">
      <div className="stairs-loader relative mb-4">
        {[1, 2, 3, 4, 5].map(index => (
          <div
            key={index}
            ref={el => setStairRef(el, index)}
            className="stair bg-white"
            style={{
              left: `${index * 30}px`,
              height: `${index * 20}px`,
            }}
          ></div>
        ))}
        <div ref={ballRef} className="ball bg-teal-500"></div>
      </div>

      <div className="message-container relative h-16 w-full overflow-hidden">
        {previousMessage && messageReady && (
          <p className="message old-message absolute w-full text-center text-[#e0eeee] text-base md:text-lg px-4">
            {previousMessage}
          </p>
        )}

        <p className="message new-message absolute w-full text-center text-[#e0eeee] text-base md:text-lg px-4">
          {currentMessage}
        </p>
      </div>
    </div>
  )
}
