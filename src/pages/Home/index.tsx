import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchBar } from '../../components/SearchBar'

export function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <SearchBar />
    </div>
  )
}
