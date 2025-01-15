'use client'

import React from 'react'
import styles from './styles/SkeletonAvatar.module.scss'

export type SkeletonAvatarProps = {
  shape?: 'circle' | 'square'
  size?: string | number
}

const SkeletonAvatar: React.FC<{ options?: SkeletonAvatarProps }> = ({
  options = { shape: 'circle', size: '40px' },
}) => {
  const { shape = 'circle', size = '40px' } = options

  // Dynamic class for shape
  const shapeClass = shape === 'circle' ? styles['circle'] : styles['square']

  return (
    <div
      className={`${styles['avatar']} ${shapeClass}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
    />
  )
}

export default SkeletonAvatar
