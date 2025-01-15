import Link from 'next/link'
import Skeleton from '@/components/skeleton'
import { formatDate } from '@/utils/date'

import styles from './FeaturedArticle.module.scss'

const featuredArticle = {
  id: 1,
  title: `Article Title - Featured Article`,
  description: `Description for article featured article`,
  author: 'it',
  category: 'JavaScript',
  publishedAt: '2023-09-24',
  claps: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 50),
  thumbnail:
    'https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
}

const FeaturedArticleLoader = () => (
  <div className={styles['container']}>
    <div className={styles['wrapper']}>
      <Skeleton.Image className={styles['image']} />
    </div>
  </div>
)

export default function FeaturedArticle() {
  // return <FeaturedArticleLoader />

  return (
    <Link
      href={`/@${featuredArticle.author}/${featuredArticle.id}`}
      className={styles['container']}
    >
      <div className={styles['wrapper']}>
        <img
          src={featuredArticle.thumbnail}
          alt={featuredArticle.title}
          className={styles['image']}
        />
        <div className={styles['content']}>
          <h3 className={styles['title']}>{featuredArticle.title}</h3>
          <p className={styles['description']}>{featuredArticle.description}</p>
          <div className={styles['meta']}>
            <span>In {featuredArticle.category}</span>
            <span>—</span>
            <span>
              {formatDate(featuredArticle.publishedAt, 'MM DD, YYYY')}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
