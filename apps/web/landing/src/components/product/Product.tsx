import Image from 'next/image'

export default function Product() {
  return (
    <a
      href="https://monomod.studio/"
      className="relative ring-1 lg:row-span-2 flex flex-col justify-between group hover:ring-primary/10 dark:hover:ring-white/20 duration-300 h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 md:grid-cols-2 md:grid lg:gap-0 md:items-center md:gap-12 lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
    >
      <div>
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
          Monomod
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          Design &amp; development subscriptions for startups.
          <br /> <br />
          Monomod streamlines the design process with a fixed monthly rate and
          limitless design requests. Say goodbye to phone calls and extensive
          contracts; reach out to Monomod directly at any time. Embrace
          flexibility, pause or terminate your subscription whenever you need.
        </p>
      </div>
      <div className="mt-8">
        <Image
          width={800}
          height={200}
          src="/images/monomod.png"
          className="rounded-2xl group-hover:ring-white/20 duration-300 invert dark:invert-0 aspect-[4/4] bg-primary/5 dark:bg-primary ring-1 ring-white/10  object-cover"
          objectFit="cover"
          alt=""
        />
      </div>
    </a>
  )
}
