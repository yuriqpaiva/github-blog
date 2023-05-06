import styled from 'styled-components'

export const ProfileStatsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 694px) {
    margin-left: 1rem;
    flex-direction: column;
    justify-content: space-between;
  }
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
