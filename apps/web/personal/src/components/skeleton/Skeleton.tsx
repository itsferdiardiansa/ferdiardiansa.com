'use client'

import React from 'react'
import SkeletonAvatar from './SkeletonAvatar'
import SkeletonParagraph from './SkeletonParagraph'
import SkeletonButton from './SkeletonButton'
import SkeletonInput from './SkeletonInput'

import styles from './styles/Skeleton.module.scss'

type AvatarOptions = { shape?: 'circle' | 'square'; size?: string | number }
type TitleOptions = { width?: string | number }
type ParagraphOptions = {
  rows?: number
  width?: string | number | (string | number)[]
}
type ButtonOptions = {
  shape?: 'circle' | 'round' | 'square'
  size?: string | number
}
type InputOptions = { size?: string | number; width?: string | number }

export type SkeletonProps = {
  active?: boolean
  avatar?: boolean | AvatarOptions
  title?: boolean | TitleOptions
  paragraph?: boolean | ParagraphOptions
  button?: boolean | ButtonOptions
  input?: boolean | InputOptions
}

const Skeleton: React.FC<SkeletonProps> = ({
  active = false,
  avatar,
  title,
  paragraph,
  button,
  input,
}) => {
  const renderSection = (
    condition: boolean | object | undefined,
    Component: React.FC<any>,
    options: any
  ) =>
    condition ? (
      <Component
        options={typeof condition === 'object' ? condition : options}
      />
    ) : null

  return (
    <div className={`${styles.skeleton} ${active ? styles.active : ''}`}>
      {renderSection(avatar, SkeletonAvatar, { shape: 'circle', size: '40px' })}
      {renderSection(
        title,
        () => (
          <div
            className={styles.title}
            style={{ width: (title as TitleOptions)?.width || '50%' }}
          />
        ),
        {}
      )}
      {renderSection(paragraph, SkeletonParagraph, { rows: 3, width: '100%' })}
      {renderSection(button, SkeletonButton, { shape: 'round', size: '100px' })}
      {renderSection(input, SkeletonInput, { size: '100%', width: '100%' })}
    </div>
  )
}

export default Skeleton
