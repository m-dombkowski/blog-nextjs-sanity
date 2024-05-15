import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 500: 1, 800: 2, 1100: 3 }}>
      <Masonry style={{ gap: '25px' }}>
        {posts.map((post) => (
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
  )
}
