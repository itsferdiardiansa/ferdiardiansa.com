import Navigation from './Navigation'
import SocialLinks from './SocialLinks'

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">
            Ferdi Ardiansa
            <span className="text-sm text-teal-500 ml-2">(he/him)</span>
          </a>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl text-gray-900 dark:text-teal-500">
          Senior Frontend Engineer
        </h2>

        <p className="mt-4 max-w-xs leading-normal">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>

        {/* <p className="mt-4 max-w-xs leading-normal text-sm text-slate-500">
          {new Date().toDateString()} (UTC +07:00)
        </p> */}

        <SocialLinks />

        <Navigation />
      </div>
    </header>
  )
}
