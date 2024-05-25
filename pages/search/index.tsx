import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import SearchByNameForm from 'components/SearchByNameForm'

export default function Page() {
  return (
    <PageTransition>
      <PageWrapper>
        <>
          <h1 className="text-4xl my-20">Znajdź post którego szukasz</h1>
          <SearchByNameForm initialDefaultValue="" />
        </>
      </PageWrapper>
    </PageTransition>
  )
}
