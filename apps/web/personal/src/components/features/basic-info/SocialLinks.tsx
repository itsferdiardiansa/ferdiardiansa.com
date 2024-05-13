import GithubIcon from '@/assets/svg/socials/github.svg'
import LinkedinIcon from '@/assets/svg/socials/linkedin.svg'

export default function SocialLinks() {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://github.com/itsferdiardiansa"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <GithubIcon className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-slate-200"
          href="https://www.linkedin.com/in/ferdi-a-7737aa109/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedinIcon className="h-6 w-6" />
        </a>
      </li>
    </ul>
  )
}
