import { unstable_cache as cache } from 'next/cache'
import { getSocials } from '@/firestore/collections/contact'
import { SOCIALS } from '@/constants/cache/contact'

import GithubIcon from '@/assets/svg/socials/github.svg'
import LinkedinIcon from '@/assets/svg/socials/linkedin.svg'
import MailIcon from '@/assets/svg/mail.svg'

const getSocialsCached = cache(async () => getSocials(), [SOCIALS.CACHE_KEY], {
  tags: [...SOCIALS.CACHE_TAGS],
})

export default async function FindMe() {
  const {
    data: { title, items },
  } = await getSocialsCached()

  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick flex flex-col items-start p-8 h-full bg-white dark:bg-secondary">
      <div className="w-full">
        <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">
          {title}
        </p>
      </div>

      <div className="grid mt-4 grid-cols-3 gap-y-3 gap-3 justify-center">
        {!!items.length ? (
          items.map((item, key) => (
            <a
              key={key}
              href={item.url}
              target={item.target}
              className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-9 w-9"
            >
              {item.type === 'gmail' && <MailIcon />}
              {item.type === 'linkedin' && <LinkedinIcon />}
              {item.type === 'github' && <GithubIcon />}
            </a>
          ))
        ) : (
          <p>There&apos;s no social links.</p>
        )}
      </div>
    </div>
  )
}
