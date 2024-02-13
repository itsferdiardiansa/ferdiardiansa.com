import AboutMe from '@/components/features/about-me/AboutMe'
import Description from '@/components/features/description/Description'
import FindMe from '@/components/features/find-me/FindMe'
import Tech from '@/components/features/tech/Tech'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <AboutMe />

      <FindMe />

      <Description />

      <Tech />
    </>
  )
}
