import PageTransition from 'components/PageTransition'
import PageWrapper from 'components/PageWrapper'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'components/ui/dialog'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient } from 'lib/sanity.client'

import Link from 'next/link'
import { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  groups: string[]
}

export default function Page(props: PageProps) {
  const { groups } = props
  const uniqueGroups = [...new Set(groups)]
  console.log(uniqueGroups)
  uniqueGroups.sort()

  return (
    <PageTransition>
      <PageWrapper>
        <>
          <div className="flex justify-center items-center gap-5">
            <h1 className="text-4xl my-20">Znajdź post po grupie</h1>
            <Dialog>
              <DialogTrigger className="font-bold rounded-full bg-sky-600 border-2 w-7 border-black ">
                i
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Grupy ustawione są alfabetycznie</DialogTitle>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-col gap-5 w-full">
            {uniqueGroups.map((group, i) => (
              <Link
                href={`/group/${group.split(' ').join('-')}`}
                key={group}
                className="font-bold hover:text-sky-600"
              >
                #{group}
              </Link>
            ))}
          </div>
        </>
      </PageWrapper>
    </PageTransition>
  )
}

export const getStaticProps = async (ctx) => {
  const { draftMode = false, params = {} } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const posts = await getAllPosts(client)
  const isFetching = posts

  let groups: string[] = []

  posts.forEach((post, i) => {
    let grupy = post.group

    grupy.forEach((el, j) => {
      groups.push(el.toLowerCase())
    })
  })

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      groups,
      isFetching,
      revalidate: 60,
    },
  }
}
