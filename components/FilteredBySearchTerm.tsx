import { Post } from 'lib/sanity.queries'

import FilteredPosts from './FilteredPosts'
import NoPostFound from './NoPostFound'
import PageWrapper from './PageWrapper'
import SearchByNameForm from './SearchByNameForm'
import { useEffect, useState } from 'react'
import { getAllPosts, getClient } from 'lib/sanity.client'
import { SanityClient } from 'sanity'

export default function FilteredBySearchTerm({
  formatedQuery,
  isFetching,
  filteredPosts,
}: {
  formatedQuery: string
  isFetching: boolean
  filteredPosts: Post[]
}) {
  return (
    <PageWrapper>
      <>
        <h1 className="text-xl my-10 md:text-4xl md:my-20">
          Wyniki wyszukiwania dla{' '}
          <span className="font-bold">&quot;{formatedQuery}&quot;</span>
        </h1>
        <SearchByNameForm
          initialDefaultValue={formatedQuery}
          isFetching={isFetching}
        />
        {filteredPosts.length > 0 && !isFetching && (
          <FilteredPosts filteredPosts={filteredPosts} />
        )}
        {filteredPosts && filteredPosts.length === 0 && <NoPostFound />}
      </>
    </PageWrapper>
  )
}
