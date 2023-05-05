import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['base-profile']};
  width: 100%;
  height: 296px;

  display: flex;
  align-items: center;
  justify-content: center;

  img:first-child {
    position: absolute;
    left: 0;
  }

  img:nth-child(2) {
    margin-top: -70px;
  }

  img:last-child {
    position: absolute;
    right: 0;
  }
`
