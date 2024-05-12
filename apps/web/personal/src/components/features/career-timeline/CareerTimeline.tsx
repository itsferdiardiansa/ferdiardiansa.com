import { type Contents } from '@/types/contents'
import CareerTimelineItem from './CareerTimelineItem'

export default function CareerTimeline({ career }: Pick<Contents, 'career'>) {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-4">
          Experience
          <span className="w-full border-1.5 border-t border-slate-200 block"></span>
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {career.map((item, key) => (
            <CareerTimelineItem {...item} key={key} />
          ))}
        </ol>
      </div>
    </section>
  )
}
