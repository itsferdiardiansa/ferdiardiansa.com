export type ArticleOptions = {
  titleFontSize?: 'small' | 'medium' | 'large'
  withDescription?: boolean
  withAuthor?: boolean
  withThumbnail?: boolean
  withAdditional?: boolean
}

export type ArticleItem = {
  id: number | string
  title: string
  description: string
  author?: string
  category?: string
  publishedAt: string
  claps?: number
  comments?: number
  thumbnail?: string
}

export type Articles = {
  items: Article['item'][]
  titleHeader?: string
  withTitleHeader?: boolean
  isLoading?: boolean
}

export type Article = {
  item: ArticleItem
}

export type ArticlesProps = Articles & ArticleOptions
export type ArticleProps = Article & ArticleOptions

export type ArticleItemLoaderProps = Pick<ArticleOptions, 'withThumbnail'>
