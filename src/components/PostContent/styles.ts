import styled from 'styled-components'

export const PostContentContainer = styled.div`
  max-width: 864px;
  width: 100%;

  padding: 2.5rem 2rem;
  margin: 0 auto;

  a {
    color: ${({ theme }) => theme.blue};
  }

  h1 {
    color: ${({ theme }) => theme['base-title']};
    margin: 2rem 0 0.5rem;
  }

  h1:first-child {
    margin-top: 0;
  }

  @media screen and (max-width: 912px) {
    padding: 2.5rem 1rem;
  }
`
