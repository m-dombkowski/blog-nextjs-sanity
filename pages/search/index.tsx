import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import SearchByNameForm from 'components/SearchByNameForm'

export default function Page({ isFetching }: { isFetching: boolean }) {
  return (
    <PageTransition>
      <PageWrapper>
        <>
          <h1 className="text-xl my-10 md:text-4xl md:my-20">
            Znajdź post którego szukasz
          </h1>
          <SearchByNameForm initialDefaultValue="" isFetching={isFetching} />
        </>
      </PageWrapper>
    </PageTransition>
  )
}
