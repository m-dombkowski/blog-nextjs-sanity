import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient } from 'lib/sanity.client'
import Link from 'next/link'
import { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  uniqueGroups: string[]
}

export default function Page(props: PageProps) {
  const { uniqueGroups } = props

  uniqueGroups.sort()

  return (
    <PageTransition>
      <PageWrapper>
        <>
          <h1 className="text-4xl my-20">Znajdź post po grupie</h1>

          {uniqueGroups.map((group, i) => (
            <Link href={`/group/${group}`} key={group}>
              {group}
            </Link>
          ))}
        </>
      </PageWrapper>
    </PageTransition>
  )
}

export const getStaticProps = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const allPosts = await getAllPosts(client)

  let groups: string[] = []

  allPosts.forEach((post, i) => {
    let grupy = post.group

    grupy.forEach((el, j) => {
      groups.push(el.toLowerCase())
    })
  })

  const uniqueGroups = [...new Set(groups)]
  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      uniqueGroups,
    },
  }
}
