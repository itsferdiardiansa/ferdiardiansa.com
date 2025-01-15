'use client'

import React from 'react'
import styles from './styles/SkeletonButton.module.scss'

export type SkeletonButtonProps = {
  shape?: 'circle' | 'round' | 'square'
  size?: string | number
}

const SkeletonButton = ({
  shape = 'round',
  size = '100px',
}: SkeletonButtonProps) => {
  return (
    <div
      className={`${styles['button']} ${shape === 'circle' ? styles['circle'] : shape === 'square' ? styles['square'] : styles['round']}`}
      style={{ width: size, height: size === '100px' ? '40px' : size }}
    />
  )
}

export default SkeletonButton
