import { useEffect, useState } from 'react'
import {
  ExternalGithubLink,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileMobileHeader,
  TitleWrapper,
} from './styles'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ProfileStats } from './ProfileStats'
import useScreenSizeStore from '../../stores/useScreenSizeStore'

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
  const screenSize = useScreenSizeStore((state) => state.screenSize)

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
      <ProfileMobileHeader>
        <ProfileImage src={profile?.avatar_url} alt="" />
        {screenSize.width <= 694 && <ProfileStats profile={profile} />}
      </ProfileMobileHeader>
      <ProfileInfo>
        <TitleWrapper>
          <div>
            <h1>{profile?.name}</h1>
            <p>{profile?.bio}</p>
          </div>
          <ExternalGithubLink href={profile?.html_url} target="_blank">
            <span>Github</span>
            <FaExternalLinkAlt />
          </ExternalGithubLink>
        </TitleWrapper>
        {screenSize.width > 694 && <ProfileStats profile={profile} />}
      </ProfileInfo>
    </ProfileContainer>
  )
}
