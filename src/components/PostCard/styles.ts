import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(Link)`
  text-decoration: none;

  height: 260px;
  width: 416px;

  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  &:hover {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['base-label']};
  }

  @media screen and (max-width: 912px) {
    width: 100%;
    height: auto;
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const PostTitle = styled.h2`
  color: ${({ theme }) => theme['base-title']};

  max-width: 259px;

  font-size: 1.25rem;
  font-weight: bold;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const PostDate = styled.time`
  color: ${({ theme }) => theme['base-span']};
  font-size: 0.875rem;
  margin-top: 0.3125rem;

  display: inline-block;

  ::first-letter {
    text-transform: capitalize;
  }
`

export const PostContent = styled.p`
  margin-top: 1.25rem;

  color: ${({ theme }) => theme['base-text']};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
