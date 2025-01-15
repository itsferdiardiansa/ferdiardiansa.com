import Link from 'next/link'
import type { ArticleProps } from './types'
import { FaHandsClapping, FaComments } from 'react-icons/fa6'
import { formatDate } from '@/utils/date'
import { cn } from '@oxcyn/utils'
import styles from './styles/ArticleItem.module.scss'

export default function ArticleItem({
  item,
  titleFontSize = 'medium',
  withAuthor = true,
  withDescription = true,
  withThumbnail = true,
  withAdditional = true,
}: ArticleProps) {
  return (
    <Link
      key={item.id}
      href={`/@${item.author}/${item.id}`}
      className={styles['link']}
    >
      <div className={styles['content']}>
        {withAuthor && (
          <span className={styles['categoryAuthor']}>
            In {item.category} by @{item.author}
          </span>
        )}

        <h2 className={cn(styles['title'], styles[titleFontSize])}>
          {item.title}
        </h2>

        {withDescription && (
          <p className={styles['description']}>{item.description}</p>
        )}

        {withAdditional && (
          <div className={styles['additionalInfo']}>
            <div className={styles['additionalInfo-wrapper']}>
              <span className={styles['date']}>
                {formatDate(item.publishedAt, 'MM DD, YYYY')}
              </span>

              {item.claps !== undefined && (
                <div className={styles['stat']}>
                  <span>
                    <FaHandsClapping />
                  </span>
                  <span>{item.claps}</span>
                </div>
              )}

              {item.comments !== undefined && (
                <div className={styles['stat']}>
                  <span>
                    <FaComments />
                  </span>
                  <span>{item.comments}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {withThumbnail && (
        <div className={styles['thumbnail']}>
          <img src={item.thumbnail} alt={item.title} />
        </div>
      )}
    </Link>
  )
}
