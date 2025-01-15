'use client'

import React from 'react'
import styles from './styles/SkeletonInput.module.scss'

export type SkeletonInputProps = {
  size?: string | number
  width?: string | number
}

const SkeletonInput: React.FC<{ options?: SkeletonInputProps }> = ({
  options = { size: '40px', width: '100%' },
}) => {
  const { size = '40px', width = '100%' } = options

  return <div className={styles['input']} style={{ width, height: size }} />
}

export default SkeletonInput
