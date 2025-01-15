'use client'

import React from 'react'
import styles from './styles/SkeletonImage.module.scss'
import { cn } from '@oxcyn/utils'

export interface SkeletonImageProps {
  className?: string
  style?: React.CSSProperties
  shape?: 'rounded' | 'circle'
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({ className, style }) => {
  return (
    <div
      className={cn(styles['skeletonImage'], styles['shape'], className)}
      style={style}
    ></div>
  )
}

export default SkeletonImage
