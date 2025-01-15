import AuthorPage from '@/features/author/pages/AuthorPage'
import { validateAuthor } from '@/utils/validateParams'

type AuthorPageParams = {
  author: string
}

export default async function AuthorPageWrapper({
  params,
}: NextParamAsyncProps<AuthorPageParams>) {
  const { author } = await params
  const decodedAuthor = decodeURIComponent(author)

  // Validate author
  const allowedAuthors = ['it']
  const authorName = validateAuthor(decodedAuthor, allowedAuthors)

  return <AuthorPage authorName={authorName} />
}
