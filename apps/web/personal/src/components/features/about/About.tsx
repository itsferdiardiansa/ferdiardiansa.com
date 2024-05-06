export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-4">
          About
          <span className="w-full border-1.5 border-t border-slate-200 block"></span>
        </h2>
      </div>
      <div>
        <p className="mb-4">
          Over the past 5+ years, I&apos;ve worked in various areas of digital
          company, including front-end development, and Web UI/UX. I&apos;m
          proud to have worn many hats. Fast-forward to today, and I&apos;ve had
          the privilege of building variety software for many start-up huge
          corporations digital product.
        </p>
        <p className="mb-4">
          My main focus these days is building accessible user interfaces for
          any clients that I&apos;m working for. I most enjoy building software
          in the sweet spot where design and engineering meet — things that look
          good but are also built well under the hood.
        </p>
        <p>
          When I&apos;m not in front of the computer, I&apos;m usually playing
          console games, hanging out with friends, or wandering around the house
          looking for peace.
        </p>
      </div>
    </section>
  )
}
