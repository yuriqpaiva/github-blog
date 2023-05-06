import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
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
}

export function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const response = await api.get('/search/issues', {
        params: {
          q: ' repo:yuriqpaiva/github-blog',
        },
      })
      setPosts(response.data.items)
    }

    fetchPosts()
  }, [])

  console.log(posts)

  return (
    <div>
      <Header />
      <Profile />
      <SearchBar />

      <PostsContainer>
        {posts.map((post: PostData) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsContainer>
    </div>
  )
}
