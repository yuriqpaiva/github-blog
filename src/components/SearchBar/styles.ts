import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  max-width: 864px;
  width: 100%;

  margin: 4.5rem auto 0;
`

export const SearchBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
  }
`

export const SearchBarLabel = styled.label`
  color: ${({ theme }) => theme['base-subtitle']};
  font-size: 1.125rem;
  font-weight: bold;
`

export const SearchBarInput = styled.input`
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme['base-input']};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme['base-text']};
  border: 1px solid ${({ theme }) => theme['base-border']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
