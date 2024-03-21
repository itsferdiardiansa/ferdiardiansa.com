import { useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'

import style from './style.module.scss'

type AboutProps = {
  about: string
}

export default function About({ about }: AboutProps) {
  const [filteredText, setFilteredText] = useState<string>('')
  const [mounted, setMounted] = useState<boolean>(false)
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const contentCharRefs = useRef(new Array())

  const tl = useMemo(() => {
    return gsap.timeline({
      repeatDelay: 1,
    })
  }, [])

  useEffect(() => {
    if (!contentRef.current) return

    const text = SplitType.create(contentRef.current, { types: 'lines' })
    setMounted(true)

    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP(
    () => {
      // const tl = gsap.timeline({
      //   delay: 1,
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top 10%",
      //     end: "top 5%",
      //     scrub: true,
      //   }
      // })
      // tl
      //   .from(titleRef.current, {
      //     y: -100,
      //     duration: 3.3,
      //     opacity: 0,
      //   })
      //   .fromTo(contentRef.current, {
      //     y: 100,
      //     opacity: 0
      //   }, {
      //     y: 0,
      //     scaleY: 1,
      //     opacity: 1,
      //     duration: 3,
      //     stagger: 2
      //   })
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className={style['about']}>
      <div className={style['about-wrapper']}>
        <div className={style['about-header']}>
          <h2 ref={titleRef}>
            {/* &#123;me&#125; */}
            I&apos;m a Software Engineer working remotely from Jakarta,
            Indonesia.
          </h2>
        </div>

        <div ref={contentRef} className={style['about-contents']}>
          {about}
          {/* <p> */}
          {/* {!!filteredText?.length &&
              filteredText.map((char, index) => (
                <span
                  key={index}
                  ref={element => contentCharRefs.current.push(element)}
                >
                  {char}
                </span>
              ))} */}
          {/* </p> */}
        </div>
      </div>
    </div>
  )
}
