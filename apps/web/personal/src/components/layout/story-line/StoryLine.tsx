import { type PropsWithChildren, useLayoutEffect, useRef } from 'react'
import style from './style.module.scss'

export default function Line({ children }: PropsWithChildren) {
  const storyLineRef = useRef<HTMLDivElement | null>(null)
  const outerLineRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    document.addEventListener('scroll', e => {
      if (!outerLineRef.current || !storyLineRef.current) return

      if (window.scrollY < storyLineRef.current?.offsetTop) return
      outerLineRef.current.style.top =
        window.scrollY - storyLineRef.current?.offsetTop + 'px'
    })
  }, [])

  return (
    <div ref={storyLineRef} className={style['storyline']}>
      <div className={style['line']}>
        <div className={style['line-inner']}></div>
        <div ref={outerLineRef} className={style['line-outer']}></div>
      </div>

      {children}
    </div>
  )
}
