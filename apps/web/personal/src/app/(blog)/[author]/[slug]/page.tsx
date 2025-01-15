import { validateAuthor, validateSlug } from '@/utils/validateParams'

type PostPageParams = {
  author: string
  slug: string
}

export default async function PostPage({
  params,
}: NextParamAsyncProps<PostPageParams>) {
  const { author, slug } = await params
  const decodedAuthor = decodeURIComponent(author)
  const decodedSlug = decodeURIComponent(slug)

  // List of allowed authors
  const allowedAuthors = ['it']

  // Validate parameters
  const authorName = validateAuthor(decodedAuthor, allowedAuthors)
  const validSlug = validateSlug(decodedSlug)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Author: @{authorName}</h1>
      <h2 className="text-2xl mt-4">Post: {validSlug}</h2>
    </div>
  )
}
