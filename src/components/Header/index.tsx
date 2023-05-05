import { CoverBlur, HeaderContainer } from './styles'
import coverEffectLeftImg from '../../assets/cover-effect-left.svg'
import coverEffectRightImg from '../../assets/cover-effect-right.svg'
import logoImg from '../../assets/github-blog.svg'

export function Header() {
  return (
    <HeaderContainer>
      <CoverBlur />
      <img src={coverEffectLeftImg} alt="" height={188} />
      <img src={logoImg} alt="" height={98} />
      <img src={coverEffectRightImg} alt="" height={236} />
    </HeaderContainer>
  )
}
