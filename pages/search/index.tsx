import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import SearchByNameForm from 'components/SearchByNameForm'
import { readToken } from 'lib/sanity.api'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  formatedQuery: string
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  return (
    <PageTransition>
      <PageWrapper>
        <>
          <h1 className="text-xl my-10 md:text-4xl md:my-20">
            Znajdź post którego szukasz
          </h1>
          <SearchByNameForm initialDefaultValue="" />
        </>
      </PageWrapper>
    </PageTransition>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  let formatedQuery = ''
  const query = ctx.params?.slug
  if (query) {
    formatedQuery = query.split('-').join(' ')
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      formatedQuery,
    },
    revalidate: 60,
  }
}
