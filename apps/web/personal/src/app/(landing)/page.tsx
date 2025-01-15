import { unstable_cache as cache } from 'next/cache'
import { getContents } from '@/firestore/collections/contents'
import { CONTENTS } from '@/constants/cache/contents'

import About from '@/components/features/about'
import CareerTimeline from '@/components/features/career-timeline'
import BasicInfo from '@/components/features/basic-info'
import Projects from '@/components/features/project'
// import Blog from '@root/src/components/features/blog'

export const dynamic = 'force-dynamic'

const getCachedContents = cache(
  async () => getContents(),
  [CONTENTS.CACHE_KEY],
  {
    revalidate: CONTENTS.TTL,
    tags: CONTENTS.CACHE_TAGS,
  }
)

export default async function LandingPage() {
  await new Promise(resolve => setTimeout(resolve, 6000))

  const { data } = await getCachedContents()

  return (
    <>
      <BasicInfo basicInfo={data.basicInfo} />

      <div className="pt-24 lg:w-1/2 lg:py-24">
        <About about={data.about} />

        <CareerTimeline career={data.career} />
        <Projects />
        {/* <Blog /> */}
      </div>
    </>
  )
}
