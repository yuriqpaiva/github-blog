import { Header } from '../../components/Header'
import { PostCard } from '../../components/PostCard'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'
import { PostsContainer } from './styles'

export function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <SearchBar />

      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </div>
  )
}
