import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import TimelineItem, { type TimelineItemProps } from './TimelineItem'

import style from './style.module.scss'

const timeline: TimelineItemProps[] = [
  {
    company: 'Gojek Tokopedia',
    title: 'SE Frontend',
    time: '21 ~ 22',
    customStyle: {
      gridColumn: '9 / span 4',
    },
  },
  {
    company: 'Metraplasa',
    title: 'SE Frontend',
    time: '18 ~ 20',
    customStyle: {
      gridColumn: '6 / span 4',
    },
  },
  {
    company: 'Upwork',
    title: 'SE Fullstack',
    time: '18 ~ 18',
    customStyle: {
      gridColumn: '4 / span 3',
    },
  },
  {
    company: 'Nusantara Technology',
    title: 'SE Fullstack',
    time: '16 ~ 18',
    customStyle: {
      gridColumn: '1 / span 4',
    },
  },
]

export default function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const workingTimelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useGSAP(
    () => {
      if (!containerRef.current) return

      gsap.from(titleRef.current, {
        y: 20,
        stagger: 2,
        duration: 2,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 20%',
          end: 'top 10%',
          scrub: true,
        },
      })

      gsap.from(workingTimelineRef.current, {
        y: 80,
        stagger: 2,
        duration: 2,
        opacity: 0,
        // ease: "power1.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10%',
          end: 'top 5%',
          scrub: true,
        },
      })
    },
    { dependencies: [], scope: containerRef }
  )

  return (
    <div ref={containerRef} className={style['work']}>
      <div className={style['work-header']}>
        <h2 ref={titleRef}>Career-timeline</h2>
      </div>

      <div ref={workingTimelineRef} className={style['work-timeline']}>
        {timeline.map((item, key) => (
          <TimelineItem key={key} {...item} />
        ))}
      </div>
    </div>
  )
}
