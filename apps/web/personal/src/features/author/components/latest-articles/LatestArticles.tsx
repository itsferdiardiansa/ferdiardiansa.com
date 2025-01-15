import Articles from '@/components/articles'
import type { ArticlesProps } from '@/components/articles/types'

const articles = Array.from({ length: 3 }).map((_, index) => ({
  id: index + 1,
  title: `Article Title ${index + 1}`,
  description: `Description for article ${index + 1}`,
  author: 'it',
  category: index % 2 === 0 ? 'React' : 'JavaScript',
  publishedAt: '2023-09-24',
  claps: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 50),
  thumbnail:
    'https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
}))

type LatestArticleProps = Omit<ArticlesProps, 'items'>

export default function LatestArticle(props: LatestArticleProps) {
  return (
    <div>
      <Articles
        // isLoading
        {...props}
        titleHeader="New This Week"
        titleFontSize="small"
        items={articles}
      />
    </div>
  )
}
