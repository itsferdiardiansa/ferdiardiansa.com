export default function Description() {
  return (
    <div className="lg:col-span-3 xl:col-span-2 h-full flex flex-col justify-between ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <h2 className="block-title">About me</h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-5">
        Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia
        dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et
        voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci
        dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.
      </p>

      <div className="flex flex-col space-y-4">
        <a
          href="mailto:ferdiardiansa@gmail.com"
          className="mail-link social-link-hover"
        >
          <i className="bx bx-at text-xl"></i>
          <span className="ml-1">ferdiardiansa@gmail.com</span>
        </a>

        <ul className="flex space-x-5">
          <li>
            <a
              href="https://www.linkedin.com/in/ferdi-a-7737aa109/"
              className="social-link-hover"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/itsferdiardiansa"
              className="social-link-hover"
            >
              <i className="bx bxl-github text-2xl"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-200"></div>

      <ul className="flex space-x-8 font-medium">
        <li>
          <a
            href="/personal_cv/index.html"
            className="menu-link-active menu-link-hover"
          >
            Tech
          </a>
        </li>
        <li>
          <a
            href="/personal_cv/products.html"
            className="menu-link menu-link-hover"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="/personal_cv/blog.html"
            className="menu-link menu-link-hover"
          >
            Blog
          </a>
        </li>
      </ul>
    </div>
  )
}
