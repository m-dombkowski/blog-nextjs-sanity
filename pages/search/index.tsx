import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import SearchByNameForm from 'components/SearchByNameForm'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getAllPostsSlugs, getClient } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import { SharedPageProps } from 'pages/_app'
import { useEffect, useState } from 'react'

interface PageProps extends SharedPageProps {
  formatedQuery: string
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { formatedQuery } = props
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
  }
}
