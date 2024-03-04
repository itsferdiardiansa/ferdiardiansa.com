import { unstable_cache as cache } from 'next/cache'
import { getSpeaksHighlighted } from '@/firestore/collections/profile'
import { SPEAKS_HIGHLIGHTED } from '@/constants/cache/profile'

const getSpeaksHighlightedCached = cache(
  async () => getSpeaksHighlighted(),
  [SPEAKS_HIGHLIGHTED.CACHE_KEY],
  { tags: [...SPEAKS_HIGHLIGHTED.CACHE_TAGS] }
)

export default async function Description() {
  const {
    data: { author, items },
  } = await getSpeaksHighlightedCached()

  return (
    <div className="lg:col-span-2 xl:col-span-2 h-full flex flex-col justify-between lg:row-span-1 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-2xl">
        {!!items.length
          ? items.map((item, key) => (
              <span key={key}>
                {item}
                <br />
                <br />
              </span>
            ))
          : "I haven't spoken yet!"}
      </p>
      <p className="text-primary dark:text-white mt-4 italic">{author}</p>
    </div>
  )
}
