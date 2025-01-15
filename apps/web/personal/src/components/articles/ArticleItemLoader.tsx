import Skeleton from '@/components/skeleton'
import type { ArticleItemLoaderProps } from './types'

import styles from './styles/ArticleItem.module.scss'

export default function ArticleItemLoader({
  withThumbnail,
}: ArticleItemLoaderProps) {
  return (
    <div className={styles['link']}>
      <div className={styles['content']}>
        <Skeleton.Paragraph
          options={{
            rows: 3,
            width: ['70%', '90%', '60%'],
          }}
        />
      </div>
      {withThumbnail && (
        <Skeleton.Image
          className={styles['thumbnail']}
          style={{
            borderRadius: '0.375rem',
          }}
        />
      )}
    </div>
  )
}
