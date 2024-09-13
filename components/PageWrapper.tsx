export default function PageWrapper({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <main className="mt-28 flex max-w-7xl mx-auto sm:px-12 md:px-32 flex-col items-center px-6 min-h-[calc(100vh-300px)]">
      {children}
    </main>
  )
}
