import { useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { type Contents } from '@/firestore/collections/contents'

import ScrollIcon from '@/assets/svg/scroll.svg'

import style from './style.module.scss'

export default function Banner({ title, subTitle }: Contents['banner']) {
  const bannerTitleRef = useRef<HTMLHeadingElement | null>(null)
  const bannerSubTitleRef = useRef<HTMLHeadingElement | null>(null)
  const scrollIconRef = useRef(null)

  let tl = useMemo(() => {
    return gsap.timeline({
      repeatDelay: 2,
    })
  }, [])

  const tlConfig = useMemo(
    () => ({
      delay: 0.8,
      duration: 0.4,
      ease: 'easing',
    }),
    []
  )

  const handleMouseEnter = () => {
    gsap.fromTo(
      scrollIconRef.current,
      {
        y: 0,
      },
      {
        y: -10,
        duration: 0.6,
      }
    )
  }

  const handleMouseLeave = () => {
    gsap.to(scrollIconRef.current, {
      y: 0,
      duration: 0.6,
    })
  }

  useGSAP(
    () => {
      if (!bannerTitleRef && !bannerSubTitleRef) return

      tl.to(bannerTitleRef.current, { ...tlConfig, y: 0, opacity: 1 })
      tl.to(bannerSubTitleRef.current, {
        ...tlConfig,
        y: 0,
        delay: 0.2,
        opacity: 1,
      })

      tl.from(scrollIconRef.current, {
        bottom: -50,
        duration: 1.8,
        ease: 'bounce',
      })
    },
    { scope: bannerTitleRef }
  )

  return (
    <div className={style['banner']}>
      <h1 ref={bannerTitleRef} className={style['banner-title']}>
        {title}
      </h1>

      <h3 ref={bannerSubTitleRef} className={style['banner-subtitle']}>
        {subTitle}
      </h3>

      <div
        ref={scrollIconRef}
        className={style['banner-scroll-toggle']}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <ScrollIcon className={style['icon']} />
      </div>
    </div>
  )
}
