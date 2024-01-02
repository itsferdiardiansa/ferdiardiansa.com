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
    <section>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 xl:grid-cols-3">
          {children}
        </div>
      </div>
    </section>
  )
}
