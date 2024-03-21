'use client'

import { useQuery } from '@tanstack/react-query'
import Greetings from '@/components/layout/greetings'

import Banner from '@/components/features/banner'
import StoryLine from '@/components/layout/story-line'
import About from '@/components/features/about'
import CareerTimeline from '@/components/features/career-timeline'
import Collaboration from '@/components/features/collaboration'

import { CONTENTS } from '@/constants/cache/contents'

const fetchContents = async () => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  const response = await fetch('/api/v1/contents', {
    next: { revalidate: CONTENTS.TTL, tags: CONTENTS.CACHE_TAGS },
  })
  const collections = await response.json()

  return collections
}

export default function Home() {
  const { isLoading, data: responseData } = useQuery({
    queryKey: [CONTENTS.CACHE_KEY],
    queryFn: () => fetchContents(),
  })

  return (
    <>
      <Greetings isLoading={isLoading} />

      {!isLoading && (
        <>
          <Banner {...responseData.data.banner} />

          {/* <StoryLine> */}
          <About about={responseData.data.about} />

          <CareerTimeline />

          <Collaboration />
          {/* </StoryLine> */}
        </>
      )}
    </>
  )
}
