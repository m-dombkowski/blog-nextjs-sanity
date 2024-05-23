import { motion,Variants } from 'framer-motion'
import { Post } from 'lib/sanity.queries'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import PostPreview from './PostPreview'

export default function FilteredPosts({
  filteredPosts,
}: {
  filteredPosts: Post[]
}) {
  const anim = (variants: Variants, custom: number | null) => {
    return {
      initial: 'initial',
      animate: 'open',
      open: 'open',
      exit: 'exit',
      variants,
      custom,
    }
  }

  const slideUp = {
    initial: { y: '25px', opacity: '0' },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.75 * i },
    }),
    exit: {
      y: '25px',
      opacity: 0,
    },
  }

  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 500: 1, 800: 2, 1100: 3 }}
      className=" w-full"
    >
      <Masonry style={{ gap: '1.25rem' }}>
        {filteredPosts.map((post, i) => (
          <motion.div
            {...anim(slideUp, i * 0.3)}
            key={post._id}
            className="border-2 mb-5 border-[#000]"
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              group={post.group}
            />
          </motion.div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
