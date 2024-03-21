import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

import style from './style.module.scss'

export default function Collaboration() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const contentsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 40%',
          end: 'top 20%',
          scrub: true,
        },
      })

      tl.from(headerRef.current, {
        y: 20,
        stagger: 2,
        duration: 2,
        opacity: 0,
      }).from(contentsRef.current, {
        x: 50,
        duration: 2,
        opacity: 0,
      })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={style['collaborate']}>
      <div ref={headerRef} className={style['collaborate-header']}>
        <h2>
          Let's collaborate if you're committed to sustainability, education,
          equality, or carbon neutrality.
        </h2>
      </div>

      <div ref={contentsRef} className={style['collaborate-contents']}>
        <p>
          I believe we should leave this Earth as good as or better than we
          found it for future generations; my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I'd love to talk.
        </p>
      </div>
    </div>
  )
}
