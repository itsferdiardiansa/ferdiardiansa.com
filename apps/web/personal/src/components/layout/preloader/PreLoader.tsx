'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { upPositions, downPositions } from './positions'
import { createParticleEffect } from '@/utils'
import messages from '@/constants/greetings'
import './PreLoader.style.scss'

type StairRef = HTMLDivElement | null
type GSAPTimeline = gsap.core.Timeline

export default function PreLoader() {
  const [currentMessage, setCurrentMessage] = useState<string>(
    messages[Math.floor(Math.random() * messages.length)]
  )
  const [previousMessage, setPreviousMessage] = useState<string | null>(null)
  const [messageReady] = useState<boolean>(false)
  const [_, setRemainingMessages] = useState<string[]>([])
  const ballRef = useRef<HTMLDivElement>(null)
  const stairsRef = useRef<StairRef[]>([])
  const messageDelay = useRef<number>(1)
  const timeline = useRef<GSAPTimeline | null>(null)

  const animateUp = (timeline: GSAPTimeline) => {
    upPositions.forEach(
      (pos: { x: number; y: number; scale?: number }, i: number) => {
        timeline.to(ballRef.current, {
          x: pos.x,
          y: pos.y,
          scale: pos.scale,
          duration: 0.25,
          ease: 'power1.inOut',
          rotation: `+=${360 / upPositions.length}`,
          onStart: () => {
            const step = stairsRef.current[i]
            if (step) {
              gsap.to(step, {
                height: `${i * 20 - 4}px`,
                duration: 0.25,
                delay: i * 0.25,
              })
              setTimeout(() => createParticleEffect(step), i * 250)
            }
          },
          onComplete: () => {
            const step = stairsRef.current[i]
            if (step) {
              gsap.to(step, {
                height: `${i * 20}px`,
                duration: 0.25,
                delay: i * 0.25,
              })
            }
          },
        })
      }
    )
  }

  const animateDown = (timeline: GSAPTimeline) => {
    downPositions.forEach(
      (pos: { x: number; y: number; duration?: number }, i: number) => {
        timeline.to(ballRef.current, {
          x: pos.x,
          y: pos.y,
          duration: pos.duration,
          ease: 'power1.in',
          rotation: `+=${360 / downPositions.length}`,
          onComplete: () => {
            if (i === downPositions.length - 1) {
              timeline.restart()
            }
          },
        })
      }
    )
  }

  useLayoutEffect(() => {
    timeline.current = gsap.timeline({
      id: `gsap-${Date.now()}`,
    }) as GSAPTimeline

    animateUp(timeline.current)
    timeline.current.eventCallback('onComplete', () =>
      animateDown(timeline.current as GSAPTimeline)
    )
    return () => {
      ;(timeline.current as GSAPTimeline).kill()
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
        .fromTo(
          '.new-message',
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: messageDelay.current }
        )
    }, messageDelay.current * 1000)

    return () => clearInterval(messageInterval)
  }, [currentMessage])

  const setStairRef = (el: StairRef, index: number) => {
    if (el) {
      stairsRef.current[index] = el
    }
  }

  return (
    <div className="w-screen h-screen bg-[#121315] flex flex-col justify-center items-center">
      <div className="loader-container flex flex-col items-center justify-center">
        <div className="spinner-wrapper absolute top-0 left-0">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="opacity-0">
              <svg
                aria-hidden="true"
                className="fake-spinner w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ))}
        </div>
        <div role="presentation" className="stairs-loader relative mb-4">
          {[1, 2, 3, 4, 5].map(index => (
            <div
              key={index}
              ref={el => setStairRef(el, index)}
              className="stair bg-white"
              style={{ left: `${index * 30}px`, height: `${index * 20}px` }}
            ></div>
          ))}
          <div ref={ballRef} className="ball bg-teal-500 relative"></div>
        </div>
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
