import { Post } from 'lib/sanity.queries'
import PostPreview from './PostPreview'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function FilteredByGroup({
  filteredPost,
  formatedQuery,
}: {
  filteredPost: Post[]
  formatedQuery: string
}) {
  return (
    <div className=" max-w-7xl mx-auto">
      <h1 className="text-4xl mt-20 mb-40">
        Posty z tagiem <span className=" font-bold">#{formatedQuery}</span>
      </h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 800: 2, 1100: 3 }}>
        <Masonry style={{ gap: '1.25rem' }}>
          {filteredPost.map((post, i) => (
            <PostPreview
              key={post._id}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              group={post.group}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
