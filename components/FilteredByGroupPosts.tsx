import { Post } from 'lib/sanity.queries'

import FilteredPosts from './FilteredPosts'
import PageWrapper from './PageWrapper'
import SearchByNameForm from './SearchByNameForm'

export default function FilteredByGroup({
  filteredByGroupPost,
  formatedQuery,
}: {
  filteredByGroupPost: Post[]
  formatedQuery: string
}) {
  return (
    <PageWrapper>
      <>
        <h1 className="text-2xl my-10 md:text-4xl md:mt-20 md:mb-40">
          Posty z tagiem <span className=" font-bold">#{formatedQuery}</span>
        </h1>

        <FilteredPosts filteredPosts={filteredByGroupPost} />
      </>
    </PageWrapper>
  )
}
