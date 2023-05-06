import { useEffect, useState } from 'react'
import {
  ExternalGithubLink,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileStats,
  ProfileStatsItem,
  TitleWrapper,
} from './styles'
import {
  FaGithub,
  FaUserFriends,
  FaBuilding,
  FaExternalLinkAlt,
} from 'react-icons/fa'

interface ProfileData {
  name: string
  bio: string
  login: string
  followers: number
  html_url: string
  avatar_url: string
}

export function Profile() {
  const [profile, setProfileInformation] = useState<ProfileData | null>(null)

  useEffect(() => {
    async function fetchProfileInformation() {
      const response = await fetch('https://api.github.com/users/yuriqpaiva')
      const data = await response.json()

      setProfileInformation(data)
    }

    fetchProfileInformation()
  }, [])

  return (
    <ProfileContainer>
      <ProfileImage src={profile?.avatar_url} alt="" />
      <ProfileInfo>
        <div>
          <TitleWrapper>
            <h1>{profile?.name}</h1>
            <ExternalGithubLink href={profile?.html_url} target="_blank">
              <span>Github</span>
              <FaExternalLinkAlt />
            </ExternalGithubLink>
          </TitleWrapper>
          <p>{profile?.bio}</p>
        </div>
        <ProfileStats>
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
        </ProfileStats>
      </ProfileInfo>
    </ProfileContainer>
  )
}
