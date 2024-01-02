export default function AboutMe() {
  return (
    <div className="dark:ring-white/10 ring-primary/5 dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl">
      <div className="space-y-5">
        <div className="shadow rounded-xl overflow-hidden">
          <div
            className="h-32 bg-cover"
            style={{
              backgroundImage: "url('/images/lexington.png');",
            }}
          ></div>
          <div className="text-sm leading-6 p-7">
            <p className="text-primary dark:text-white text-2xl font-semibold">
              {/* <span className="absolute inset-0"></span> */}
              Ferdi Ardiansa
            </p>

            <p className="text-zinc-500 dark:text-zinc-400">
              Software Engineer | Typescript | Javascript | Web Developer
            </p>

            <div className="border-t border-gray-500 my-5"></div>

            <div className="block-section">
              <h2 className="font-bold text-lg mb-4">Information</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-gray-400">Location</div>
                  <div className="font-medium text-right text-gray-600">
                    Indonesia
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Experience</div>
                  <div className="font-medium text-right text-gray-600">
                    4+ years
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-gray-400">Availability</div>
                  <div className="font-medium text-right text-gray-600">
                    1 week
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
