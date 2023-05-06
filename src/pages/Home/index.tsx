import { useEffect, useState } from 'react'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import { PostsContainer } from './styles'
import { api } from '../../lib/api'

export interface PostData {
  id: number
  title: string
  body: string
  created_at: string
  number: number
}

export function Home() {
  const [posts, setPosts] = useState([])
  const postsCount = posts.length

  async function fetchPosts(query: string = ' ') {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:yuriqpaiva/github-blog`,
      },
    })
    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <Profile />
      <SearchBar postsCount={postsCount} onSearch={fetchPosts} />

      <PostsContainer>
        {posts.map((post: PostData) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsContainer>
    </>
  )
}
