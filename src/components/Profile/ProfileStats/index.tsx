import { FaBuilding, FaGithub, FaUserFriends } from 'react-icons/fa'
import { ProfileStatsContainer, ProfileStatsItem } from './styles'

interface Props {
  profile: {
    login: string
    followers: number
  } | null
}

export function ProfileStats({ profile }: Props) {
  return (
    <ProfileStatsContainer>
      <ProfileStatsItem>
        <FaGithub />
        <span>{profile?.login}</span>
      </ProfileStatsItem>

      <ProfileStatsItem>
        <FaBuilding />
        <span>Rocketseat</span>
      </ProfileStatsItem>

      <ProfileStatsItem>
        <FaUserFriends />
        <span>{profile?.followers} seguidores</span>
      </ProfileStatsItem>
    </ProfileStatsContainer>
  )
}
