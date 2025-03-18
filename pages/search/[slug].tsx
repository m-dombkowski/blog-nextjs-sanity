import FilteredBySearchTerm from 'components/FilteredBySearchTerm'
import PageTransition from 'components/PageTransition'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getAllPostsSlugs, getClient } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SanityClient } from 'next-sanity'
import { SharedPageProps } from 'pages/_app'
import { useEffect, useState } from 'react'

interface PageProps extends SharedPageProps {
  formatedQuery: string
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { draftMode, formatedQuery } = props

  const [isFetching, setIsFetching] = useState(false)
  const [filteredPosts, setFilteredPosts] = useState<Post[] | []>([])
  const [error, setError] = useState<any | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true)
      setError(null)
      try {
        const client = getClient()
        const data = await getAllPosts(client)
        console.log(data)
        setFilteredPosts(
          data.filter((post, i) => {
            return post.title.toLowerCase().includes(formatedQuery)
          }),
        )
        // setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err)
        setFilteredPosts(null)
      } finally {
        setIsFetching(false)
      }
    }

    fetchPosts()
  }, [])

  if (draftMode) {
    return <div>Prosze spróbować ponownie</div>
  }

  return (
    <PageTransition>
      <FilteredBySearchTerm
        formatedQuery={formatedQuery}
        filteredPosts={filteredPosts}
        isFetching={isFetching}
      />
    </PageTransition>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  console.log(ctx)
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const postsObj = await getAllPosts(client)

  const query = ctx.params?.slug
  const formatedQuery = query.split('-').join(' ')

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
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
