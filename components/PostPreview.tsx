import Avatar from 'components/AuthorAvatar'
// import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  group,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <Link
      href={`/posts/${slug}`}
      className=" border-2 p-5 break-inside-avoid  mb-5"
    >
      {/* <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div> */}
      <h3 className="mb-20 text-2xl leading-snug text-balance">
        <div className="hover:underline">{title}</div>
      </h3>
      <div className="text-lg flex gap-5 flex-col mt-auto">
        <Date dateString={date} />
        <p>{group}</p>
      </div>
    </Link>
  )
}
