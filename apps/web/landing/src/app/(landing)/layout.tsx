export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="xl:max-w-7xl mx-auto">
      <div className="lg:h-screen p-4 lg:flex lg:items-center">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-1">
          {children}
        </div>
      </div>
    </section>
  )
}
