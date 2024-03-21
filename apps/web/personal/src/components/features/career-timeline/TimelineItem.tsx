import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import style from './style.module.scss'

export interface TimelineItemProps {
  company: string
  title: string
  time: string
  customStyle: {
    gridColumn: string
  }
}

export default function TimelineItem({
  company,
  title,
  time,
  customStyle,
}: TimelineItemProps) {
  const timeRef = useRef<HTMLDivElement | null>(null)

  const handleOnMouseEnter = () => {
    gsap.from(timeRef.current, {
      y: 50,
      duration: 0.5,
      stagger: 0.4,
      opacity: 0,
    })
  }

  return (
    <div
      className={style['item']}
      style={customStyle}
      onMouseEnter={handleOnMouseEnter}
    >
      <div className={style['item-left']}>
        <div className={style['company']}>{company}</div>

        <div className={style['title']}>{title}</div>
      </div>
      <div className={style['item-right']}>
        <div ref={timeRef} className={style['time']}>
          {time}
        </div>
      </div>
    </div>
  )
}
