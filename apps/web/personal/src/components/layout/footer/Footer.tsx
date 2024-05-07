import pkgJson from '@root/package.json'

export default function Footer() {
  return (
    <footer className="max-w-md text-sm text-slate-500 sm:pb-0">
      <div className="w-full mx-auto max-w-screen-xl flex flex-col items-center md:items-start text-center md:text-left">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Oxcyn Web v{pkgJson.version}
        </span>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2024{' '}
          <a
            href="https://ferdiardiansa.com/"
            className="hover:underline text-teal-500"
          >
            itsferdi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
