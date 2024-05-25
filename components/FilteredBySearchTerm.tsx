import { Post } from 'lib/sanity.queries'

import FilteredPosts from './FilteredPosts'
import NoPostFound from './NoPostFound'
import PageWrapper from './PageWrapper'
import SearchByNameForm from './SearchByNameForm'

export default function FilteredBySearchTerm({
  filtered,
  formatedQuery,
}: {
  filtered: Post[]
  formatedQuery: string
}) {
  return (
    <PageWrapper>
      <>
        <h1 className="text-xl my-10 md:text-4xl md:my-20">
          Wyniki wyszukiwania dla{' '}
          <span className="font-bold">&quot;{formatedQuery}&quot;</span>
        </h1>
        <SearchByNameForm initialDefaultValue={formatedQuery} />
        {filtered.length > 0 ? (
          <FilteredPosts filteredPosts={filtered} />
        ) : (
          <NoPostFound />
        )}
      </>
    </PageWrapper>
  )
}
