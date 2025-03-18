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
