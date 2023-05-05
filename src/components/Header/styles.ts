import styled from 'styled-components'
import coverBlur from '../../assets/cover-blur.svg'

export const HeaderContainer = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme['base-profile']};
  width: 100%;
  height: 296px;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  img:nth-child(2) {
    position: absolute;
    left: 0;
  }

  img:nth-child(3) {
    margin-top: -70px;
  }

  img:last-child {
    position: absolute;
    right: 0;
  }
`

export const CoverBlur = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${coverBlur}) no-repeat center;
  background-size: cover;
`
