// context/DataContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
} from 'react'
import { getAllPosts, getClient } from 'lib/sanity.client'
import { Post } from 'lib/sanity.queries'

interface PostsContextType {
  posts: Post[] | null
  setPosts: React.Dispatch<SetStateAction<Post[] | null>>
}

interface PostsPropsInterface {
  children?: ReactNode
}

export const PostsContext = createContext<PostsContextType | undefined>({
  posts: [],
  setPosts: () => {},
})

export const PostsProvider: React.FC<PostsPropsInterface> = ({ children }) => {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [error, setError] = useState<string>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const client = getClient()
        const data = await getAllPosts(client)
        setPosts(data)
      } catch (err: any) {
        console.error('Error fetching posts:', err)
        setError(err)
        setPosts(null)
      }
    }
    fetchPosts()
  }, [])

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  )
}

export const useData = () => {
  const context = React.useContext(PostsContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
