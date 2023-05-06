import styled from 'styled-components'

export const ProfileContainer = styled.div`
  height: auto;

  margin: -88px auto 0;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;

  @media screen and (max-width: 694px) {
    flex-direction: column;
  }
`

export const ProfileMobileHeader = styled.header`
  display: flex;
`

export const ProfileImage = styled.img`
  border-radius: 8px;

  width: 148px;
  height: 148px;
  object-fit: cover;

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
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
  height: 100%;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme['base-title']};
  }

  @media screen and (max-width: 694px) {
    flex-direction: column;
  }
`

export const ExternalGithubLink = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 19px;
  max-width: 66px;

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

  @media screen and (max-width: 694px) {
    margin-top: 1rem;
  }
`
