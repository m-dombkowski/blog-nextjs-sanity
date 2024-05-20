import PageWrapper from 'components/PageWrapper'
import SearchByNameForm from 'components/SearchByNameForm'

export default function Page() {
  return (
    <PageWrapper>
      <>
        <h1 className="text-4xl my-20">Znajdź post którego szukasz</h1>
        <SearchByNameForm initialDefaultValue="" />
      </>
    </PageWrapper>
  )
}
