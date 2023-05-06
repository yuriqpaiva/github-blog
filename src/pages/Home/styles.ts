import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 912px;
  width: 100%;
  padding: 0 24px 2.5rem;
  margin: 0 auto;
`

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  max-width: 912px;
  margin: 3rem auto 0;

  @media screen and (max-width: 912px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
