import Articles from '@/components/articles'
import type { ArticlesProps } from '@/components/articles/types'

type ProgrammingNews = {
  id: number
  title: string
  description: string
  publishedAt: string
}

const programmingNews = [
  {
    id: 1,
    title: 'The Rise of TypeScript in 2023',
    description:
      'Why TypeScript is becoming the go-to language for web development.',
    publishedAt: '2023-09-22',
  },
  {
    id: 2,
    title: 'React Server Components Explained',
    description:
      'Learn how React Server Components simplify rendering on the server.',
    publishedAt: '2023-09-20',
  },
  {
    id: 3,
    title: 'JavaScript Decorators: What You Need to Know',
    description:
      'A deep dive into JavaScript decorators and their practical use cases.',
    publishedAt: '2023-09-18',
  },
]

type ProgrammingNewsProps = Omit<ArticlesProps, 'items'>

export default function ProgrammingNews(props: ProgrammingNewsProps) {
  return (
    <div>
      <Articles
        // isLoading
        {...props}
        items={programmingNews}
        titleHeader="Programming News"
        titleFontSize="small"
        withAuthor={false}
        // withAdditional={false}
        withThumbnail={false}
      />
    </div>
  )
}
