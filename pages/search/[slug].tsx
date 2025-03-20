import FilteredBySearchTerm from 'components/FilteredBySearchTerm'
import PageTransition from 'components/PageTransition'
import { readToken } from 'lib/sanity.api'
import { getAllPostsSlugs } from 'lib/sanity.client'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  formatedQuery: string
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { draftMode, formatedQuery } = props

  if (draftMode) {
    return <div>Prosze spróbować ponownie</div>
  }

  return (
    <PageTransition>
      <FilteredBySearchTerm formatedQuery={formatedQuery} />
    </PageTransition>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx

  const query = ctx.params?.slug
  const formatedQuery = query.split('-').join(' ')

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      formatedQuery,
    },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/search/${slug}`) || [],
    fallback: 'blocking',
  }
}
