import type { Post } from 'lib/sanity.queries'

import FilteredPosts from './FilteredPosts'

export default function MoreStories({ posts }: { posts: Post[] }) {
  return <FilteredPosts filteredPosts={posts} />
}
