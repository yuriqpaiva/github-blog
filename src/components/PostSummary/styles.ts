import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostSummaryContainer = styled.div`
  max-width: 864px;
  width: 100%;
  min-height: 168px;
  margin: 0 auto;

  border-radius: 10px;

  background-color: ${({ theme }) => theme['base-profile']};

  margin: -88px auto 0;
  padding: 2rem;
`

export const PostSummaryHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostSummaryLink = styled(Link)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  height: 19px;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;

  span {
    text-transform: uppercase;
  }

  svg {
    margin-top: -0.125px;

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

export const PostTitle = styled.h1`
  color: ${({ theme }) => theme['base-title']};
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.25rem;
`

export const PostStatsContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 580px) {
    margin-top: 1rem;
    gap: 0.5rem;
    flex-direction: column;
  }
`

export const PostStatsItem = styled.div`
  margin-top: 0.5rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;

  span,
  time {
    color: ${({ theme }) => theme['base-span']};
  }

  svg {
    color: ${({ theme }) => theme['base-label']};

    height: 18px;
    width: 18px;
  }
`
