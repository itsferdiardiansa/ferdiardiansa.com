import GithubIcon from '@/assets/svg/socials/github.svg'
import LinkedinIcon from '@/assets/svg/socials/linkedin.svg'
import MailIcon from '@/assets/svg/mail.svg'

export default function FindMe() {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick flex flex-col items-start p-8 h-full bg-white dark:bg-secondary">
      <div className="w-full">
        <p className="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">
          Let&apos;s get in touch
        </p>
      </div>

      <div className="grid mt-4 grid-cols-3 gap-y-3 gap-3 justify-center">
        <a
          href="mailto:ferdiardiansa@gmail.com"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-9 w-9"
        >
          <MailIcon />
        </a>

        <a
          href="https://github.com/itsferdiardiansa"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-9 w-9"
          target="_blank"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/ferdi-a-7737aa109/"
          className="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-100 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-300 group transition-all h-9 w-9"
          target="_blank"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  )
}
