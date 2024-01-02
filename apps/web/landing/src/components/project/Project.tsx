import Image from 'next/image'
import AstroIcon from '@/assets/svg/frameworks/astro.svg'
import TailwindIcon from '@/assets/svg/frameworks/tailwind.svg'

export default function Project() {
  return (
    <a
      href="https://lexingtonthemes.com/"
      className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8"
    >
      <div className="-mr-24">
        <Image
          width={800}
          height={500}
          src="/images/lexington.png"
          className="rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary"
          alt=""
        />
      </div>
      <div className="mt-8">
        <div className="flex flex-wrap">
          <div className="flex items-center text-sm font-medium text-primary dark:text-white">
            <AstroIcon />
            <span className="ml-2.5"> Astro</span>
          </div>
          <div className="flex items-center ml-6 text-sm font-medium text-primary dark:text-white">
            <TailwindIcon />
            <span className="ml-2.5"> Tailwind CSS</span>
          </div>
        </div>
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6">
          Lexington
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light">
          Free and premium multipage themes and UI Kits for freelancers,
          developers, businesses, and personal use. Beautifully crafted with
          Astro.js, and Tailwind CSS — Simple &amp; easy to customise.
        </p>
      </div>
    </a>
  )
}
