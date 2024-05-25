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
      className="group w-full h-auto block hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition duration-300 break-inside-avoid p-5 "
    >
      {/* <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div> */}
      <h3 className="mb-20 text-2xl leading-snug text-balance group-hover:text-sky-500 font-bold transition duration-300">
        <div>{title}</div>
      </h3>
      <div className="text-lg flex gap-5 flex-col mt-auto">
        <Date dateString={date} />
        <div className="flex gap-3 flex-wrap">
          {group.map((el, i) => {
            return (
              <p key={i} className=" text-xs">
                {el}
              </p>
            )
          })}
        </div>
      </div>
    </Link>
  )
}
