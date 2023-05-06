import styled from 'styled-components'

export const PostCardContainer = styled.div`
  height: 260px;
  width: 416px;

  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  overflow: hidden;

  &:hover {
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['base-label']};
  }
`

export const PostHeader = styled.header`
  display: flex;
  gap: 1rem;
`

export const PostTitle = styled.h2`
  color: ${({ theme }) => theme['base-title']};

  max-width: 283px;

  font-size: 1.25rem;
  font-weight: bold;
`

export const PostDate = styled.time`
  color: ${({ theme }) => theme['base-span']};
  font-size: 0.875rem;
  margin-top: 0.3125rem;
`

export const PostContent = styled.p`
  margin-top: 1.25rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
