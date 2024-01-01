import AboutMe from '@/components/about-me/AboutMe'
import Activity from '@/components/activity/Activity'
import Community from '@/components/community/Community'
import Description from '@/components/description/Description'
import FindMe from '@/components/find-me/FindMe'
import GrabResume from '@/components/grab-resume/GrabResume'
import Newsletter from '@/components/newsletter/Newsletter'
import Product from '@/components/product/Product'
import Project from '@/components/project/Project'

export default function Home() {
  return (
    <>
      <AboutMe />

      <FindMe />

      <GrabResume />

      <Project />

      <Product />

      <Community />

      <Description />

      <Newsletter />

      <Activity />
    </>
  )
}
