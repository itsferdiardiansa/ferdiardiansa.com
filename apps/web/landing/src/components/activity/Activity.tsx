export default function Activity() {
  return (
    <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
      <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
        Testimonials
      </p>
      <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
        <div className="mt-4">
          <p className="text-sm text-pink-500 dark:text-pink-400">
            &quot;Big fan of your themes. They&apos;re well-organized, look
            clean, and are fast.&quot;
          </p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Kevin Focke</span>
            <span className="block text-xs"> Developer</span>
          </p>
        </div>
        <div className="mt-4">
          <p className="text-sm text-orange-500 dark:text-orange-300">
            &quot;Amazing resource using @astrodotbuild and @tailwindcss! I got
            it a week ago and have found the contents really useful. 5/5&quot;
          </p>
          <p className="text-xs mt-2 text-zinc-500">
            <span className="block text-xs">Alonso</span>
            <span className="block text-xs"> Entrepreneur</span>
          </p>
        </div>
      </div>
    </div>
  )
}
