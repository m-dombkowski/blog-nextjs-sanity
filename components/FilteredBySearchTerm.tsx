import { Post } from 'lib/sanity.queries'
import FilteredPosts from './FilteredPosts'
import NoPostFound from './NoPostFound'
import PageWrapper from './PageWrapper'
import SearchByNameForm from './SearchByNameForm'
import { useContext, useEffect, useState } from 'react'
import { PostsContext } from 'lib/context/posts'

export default function FilteredBySearchTerm({
  formatedQuery,
}: {
  formatedQuery: string
}) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(null)

  const { posts } = useContext(PostsContext)

  useEffect(() => {
    if (posts) {
      setFilteredPosts(
        posts?.filter((post) => {
          return post.title?.toLowerCase().includes(formatedQuery)
        }),
      )
    }
  }, [formatedQuery, posts])

  return (
    <PageWrapper>
      <>
        <h1 className="text-xl my-10 md:text-4xl md:my-20">
          Wyniki wyszukiwania dla{' '}
          <span className="font-bold">&quot;{formatedQuery}&quot;</span>
        </h1>
        <SearchByNameForm initialDefaultValue={formatedQuery} />
        {filteredPosts?.length > 0 ? (
          <FilteredPosts filteredPosts={filteredPosts} />
        ) : (
          <NoPostFound />
        )}
      </>
    </PageWrapper>
  )
}
