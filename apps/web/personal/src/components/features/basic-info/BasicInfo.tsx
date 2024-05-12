import Navigation from './Navigation'
import SocialLinks from './SocialLinks'
import { type Contents } from '@/types/contents'

export default function BasicInfo({ basicInfo }: Pick<Contents, 'basicInfo'>) {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">
            {basicInfo.name}
            <span className="text-sm text-teal-500 ml-2">
              ({basicInfo.pronouns})
            </span>
          </a>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl text-gray-900 dark:text-teal-500">
          {basicInfo.role}
        </h2>

        <p className="mt-4 max-w-xs leading-normal">{basicInfo.description}</p>

        <SocialLinks />

        <Navigation />
      </div>
    </div>
  )
}
