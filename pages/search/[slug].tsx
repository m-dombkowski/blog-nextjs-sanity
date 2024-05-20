import FilteredBySearchTerm from 'components/FilteredBySearchTerm'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getAllPostsSlugs, getClient } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  filtered: Post[]
  formatedQuery: string
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { filtered, draftMode, formatedQuery } = props

  if (draftMode) {
    return <div>Prosze spróbować ponownie</div>
  }

  return (
    <FilteredBySearchTerm filtered={filtered} formatedQuery={formatedQuery} />
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const allPosts = await getAllPosts(client)
  const query = ctx.params?.slug
  const formatedQuery = query.split('-').join(' ')

  const filtered = allPosts.filter((post, i) => {
    return post.title.toLowerCase().includes(formatedQuery)
  })

  if (!allPosts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      filtered,
      formatedQuery,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/search/${slug}`) || [],
    fallback: 'blocking',
  }
}
