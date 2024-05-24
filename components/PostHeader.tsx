'use client'

import Avatar from 'components/AuthorAvatar'
// import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import PostTitle from 'components/PostTitle'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostHeader(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'author' | 'slug' | 'group'
  >,
) {
  const { title, coverImage, date, author, slug, group } = props

  function formatGroupToSlug(group: string) {
    return group.split(' ').join('-')
  }

  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div> */}
      <div className="flex gap-4 max-w-4xl mx-auto mb-12 items-center pb-6 border-b border-black">
        <div className="text-lg mr-10">
          <Date dateString={date} />
        </div>
        {group.map((el, i) => {
          return (
            <Link
              key={el}
              href={`/group/${formatGroupToSlug(el).toLowerCase()}`}
              className=" text-xs md:text-base transition duration-300  font-bold hover:text-sky-600"
            >
              {el.toLowerCase()}
            </Link>
          )
        })}
      </div>

      {/* <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div> */}
      {/* <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div> */}
    </>
  )
}
