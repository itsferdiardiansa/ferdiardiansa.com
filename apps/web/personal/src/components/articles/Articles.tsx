import Article from './ArticleItem'
import type { ArticlesProps } from './types'
import ArticleItemLoader from './ArticleItemLoader'
import styles from './styles/Articles.module.scss'

export default function Articles({
  items,
  isLoading = false,
  withTitleHeader = true,
  titleHeader,
  ...articleOptions
}: ArticlesProps) {
  const { withThumbnail } = articleOptions

  return (
    <>
      {withTitleHeader && <h2 className={styles['title']}>{titleHeader}</h2>}

      <div className={styles['container']}>
        {isLoading
          ? [...Array(3)].map((_, key) => (
              <ArticleItemLoader key={key} withThumbnail={withThumbnail} />
            ))
          : items.map(article => (
              <Article key={article.id} item={article} {...articleOptions} />
            ))}
      </div>
    </>
  )
}
