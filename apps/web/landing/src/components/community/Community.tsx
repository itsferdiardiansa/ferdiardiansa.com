import FigmaSVG from '@/assets/svg/figma.svg'

export default function Community() {
  return (
    <a
      href="https://www.figma.com/@mikeandreuzza"
      className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick"
    >
      <FigmaSVG />
      <p className="text-xl  text-primary dark:text-white lg:text-2xl mt-6">
        Figma Community
      </p>
    </a>
  )
}
