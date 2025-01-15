'use client'

import React from 'react'
import styles from './styles/SkeletonParagraph.module.scss'

export type SkeletonParagraphProps = {
  rows?: number
  width?: string | number | (string | number)[]
}

const SkeletonParagraph: React.FC<{ options?: SkeletonParagraphProps }> = ({
  options = { rows: 3, width: '100%' },
}) => {
  const { rows = 3, width = '100%' } = options

  return (
    <div className={styles['paragraph']}>
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={styles['line']}
          style={{
            width: Array.isArray(width) ? width[index] || '100%' : width,
          }}
        />
      ))}
    </div>
  )
}

export default SkeletonParagraph
