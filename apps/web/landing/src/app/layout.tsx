import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-primary bg-zinc-200">{children}</body>
    </html>
  )
}
