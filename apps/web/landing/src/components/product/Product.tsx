export default function Product() {
  return (
    <div className="relative ring-1 lg:row-span-1 dark:ring-white/10 ring-primary/5 lg:col-span-4 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
      <div className="relative">
        <p className="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
          Articles
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
          In development
          {/* Design &amp; development subscriptions for startups.
          <br /> <br />
          Monomod streamlines the design process with a fixed monthly rate and
          limitless design requests. Say goodbye to phone calls and extensive
          contracts; reach out to Monomod directly at any time. Embrace
          flexibility, pause or terminate your subscription whenever you need. */}
        </p>
      </div>
    </div>
  )
}
