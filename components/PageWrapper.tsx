export default function PageWrapper({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <main className="flex justify-center max-w-7xl mx-auto pl-32 pr-16 md:px-32 flex-col items-center">
      {children}
    </main>
  )
}
