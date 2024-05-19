import { type Contents } from '@/types/contents'

export default function About({ about }: Pick<Contents, 'about'>) {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2
          className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-4"
          data-testid="aboutTitleText"
        >
          {about.title}
          <span className="w-full border-1.5 border-t border-slate-200 block"></span>
        </h2>
      </div>
      {!!about.items && (
        <div className="flex flex-col gap-4" data-testid="aboutDescriptionList">
          {about.items.map((item, key) => (
            <p key={key} data-testid="aboutDescriptionItem">
              {item}
            </p>
          ))}
        </div>
      )}
    </section>
  )
}
