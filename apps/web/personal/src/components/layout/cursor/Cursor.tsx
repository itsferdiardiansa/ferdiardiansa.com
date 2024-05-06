'use client'

import { useLayoutEffect, useMemo, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import style from './style.module.scss'

export default function Cursor() {
  let cursorRef = useRef<HTMLDivElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = useMemo(
    () => ({ type: 'spring', damping: 30, stiffness: 600 }),
    []
  )

  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleCursorMove = (e: MouseEvent) => {
    if (!cursorRef.current) return

    x.set(e.clientX)
    y.set(e.clientY)

    cursorRef.current.style.right = 'unset'
    cursorRef.current.style.bottom = 'unset'
    cursorRef.current.style.margin = 'unset'
  }

  useLayoutEffect(() => {
    document.addEventListener('mousemove', handleCursorMove)

    return () => {
      document.removeEventListener('mousemove', handleCursorMove)
    }
  })

  return (
    <motion.div
      ref={cursorRef}
      className={style['cursor']}
      style={{
        translateX: xSpring,
        translateY: ySpring,
      }}
    />
  )
}
