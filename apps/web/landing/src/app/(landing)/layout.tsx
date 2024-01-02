import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '@its.ferdi',
  description: 'A person who always curious in software development.',
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="max-w-8xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="p-4">
        {/* <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-2 xl:grid-cols-2"> */}
        {/* <div className="lg:flex gap-6"> */}
        <div className="grid gap-5 lg:grid-cols-3">{children}</div>
      </div>
    </section>
  )
}
