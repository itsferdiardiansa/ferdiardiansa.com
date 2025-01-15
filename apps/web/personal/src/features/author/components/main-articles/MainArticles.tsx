import Articles from '@/components/articles'
import type { ArticlesProps } from '@/components/articles/types'

const articles = Array.from({ length: 10 }).map((_, index) => ({
  id: index + 1,
  title: `Article Title ${index + 1}`,
  description: `Description for article ${index + 1}`,
  author: 'it',
  category: index % 2 === 0 ? 'React' : 'JavaScript',
  // publishedAt: String(new Date(Date.now() - 2 * 60 * 60 * 1000)), // 2hrs ago
  // publishedAt: String(new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)), // 2d ago
  publishedAt: String(new Date(Date.now() - 2 * 7 * 24 * 60 * 60 * 1000)), // 2w ago
  claps: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 50),
  thumbnail:
    'https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
}))

type MainArticlesProps = Omit<ArticlesProps, 'items'>

export default function MainArticles(props: MainArticlesProps) {
  return (
    <div>
      <Articles
        // isLoading
        {...props}
        items={articles}
      />
    </div>
  )
}
