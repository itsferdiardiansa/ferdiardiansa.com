import { unstable_cache as cache } from 'next/cache'
import { getSkills } from '@/firestore/collections/tech'
import { TECH_SKILLS } from '@/constants/cache/tech'

const getSkillsCached = cache(
  async () => getSkills(),
  [TECH_SKILLS.CACHE_KEY],
  {
    tags: [...TECH_SKILLS.CACHE_TAGS],
  }
)
export default async function Tech() {
  const { data } = await getSkillsCached()

  return (
    <div className="relative ring-1 lg:row-span-1 dark:ring-white/10 ring-primary/5 lg:col-span-4 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div className="relative mb-4">
        <p className="text:8xl md:text-3xl font-bold">{data.headers.title}</p>

        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
          {data.headers.subtitle}
        </p>
      </div>

      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <div className="relative">
        <p className="md:text-2xl">Core</p>
        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
          {data.core.map((item, index) => (
            <li key={index}>
              <b>{item.title}: </b>
              <span>{item.items.join(', ')}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative md:mt-4">
        <p className="md:text-2xl">Others</p>
        <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
          <li>{data.others.join(', ')}</li>
        </ul>
      </div>
    </div>
  )
}
