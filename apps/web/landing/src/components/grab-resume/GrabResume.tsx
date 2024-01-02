export default function GrabResume() {
  return (
    <div className="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-white dark:bg-secondary overflow-hidden text-center lg:text-left">
      <div>
        <p className="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">
          Grab my résumé!
        </p>
        <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
          Unlock the doors to explore the rich tapestry of my professional
          journey and accomplishments.
        </p>
      </div>
      <div className="w-full mt-8 md:max-w-xs lg:max-w-none">
        <button
          type="button"
          disabled
          className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
        >
          Development in progress
        </button>
      </div>
    </div>
  )
}
