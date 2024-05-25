export default function PageWrapper({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <main className="flex justify-center max-w-7xl mx-auto sm:pl-24 sm:pr-12 md:px-32 flex-col items-center pl-[72px] pr-6">
      {children}
    </main>
  )
}
