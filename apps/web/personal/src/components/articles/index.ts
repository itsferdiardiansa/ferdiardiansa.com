import Articles from './Articles'
import ArticleItem from './ArticleItem'
import ArticleItemLoader from './ArticleItemLoader'

type _ArticleItem = typeof ArticleItem & {
  Loader: typeof ArticleItemLoader
}

const _ArticleItem: _ArticleItem = ArticleItem as _ArticleItem

;(ArticleItem as _ArticleItem).Loader = ArticleItemLoader

export { ArticleItem }
export default Articles
