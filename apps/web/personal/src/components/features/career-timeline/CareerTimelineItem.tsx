import ChevronTopRight from '@/assets/svg/chevron-top-right.svg'
import { type CareerTimeline } from '@/types/contents'

export default function CareerTimelineItem({
  title,
  subTitle,
  time,
  description,
  techStacks,
  link,
}: CareerTimeline) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        {time && (
          <header
            className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
            data-testid="careerTimeText"
          >
            {time}
          </header>
        )}

        <div className="z-10 sm:col-span-6">
          {(title || subTitle) && (
            <h3 className="font-medium leading-snug text-slate-200">
              {title && (
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link ? link : '#'}
                    data-testid="careerLink"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                    <span data-testid="careerTitleText">
                      {title}

                      {link && (
                        <span
                          className="inline-block"
                          data-testid="careerLinkIcon"
                        >
                          <ChevronTopRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      )}
                    </span>
                  </a>
                </div>
              )}

              {subTitle && (
                <div
                  className="text-slate-400 text-sm"
                  aria-hidden="true"
                  data-testid="careerSubTitleText"
                >
                  {subTitle}
                </div>
              )}
            </h3>
          )}

          {description && (
            <p
              className="mt-2 text-sm text-slate-500"
              data-testid="careerDescriptionText"
            >
              {description}
            </p>
          )}

          {!!techStacks.length && (
            <ul className="mt-2 flex flex-wrap" data-testid="careerTechList">
              {techStacks.map((tech, techKey) => (
                <li
                  className="mr-1.5 mt-2"
                  key={techKey}
                  data-testid="careerTechItem"
                >
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  )
}
