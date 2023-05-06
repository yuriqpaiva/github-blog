import styled from 'styled-components'

export const ProfileContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;

  margin: -88px auto 0;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;
`

export const ProfileImage = styled.img`
  border-radius: 8px;

  width: 148px;
  height: 148px;
  object-fit: cover;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  justify-content: space-between;

  p {
    font-size: 1rem;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const ExternalGithubLink = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 19px;

  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;

  span {
    text-transform: uppercase;
  }

  svg {
    width: 12px;
    height: 12px;
  }

  &:hover,
  &:focus {
    border-radius: 0px;
    padding: 0px;
    box-shadow: 0px 1px 0px 0px ${({ theme }) => theme.blue};
  }
`

export const ProfileStats = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const ProfileStatsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 18px;
    height: 18px;

    color: ${({ theme }) => theme['base-label']};
  }
`
