import { Logo } from '../../styles'
import * as S from './styles'
import logo from '../../assets/images/logo.png'
import instagramLogo from '../../assets/images/instagram.svg'
import facebookLogo from '../../assets/images/facebook.svg'
import twitterLogo from '../../assets/images/twitter.svg'

const Footer = () => (
  <S.FooterContainer>
    <Logo src={logo} />
    <S.List>
      <S.Item>
        <a href="">
          <img src={instagramLogo} alt="" />
        </a>
      </S.Item>
      <S.Item>
        <a href="">
          <img src={facebookLogo} alt="" />
        </a>
      </S.Item>
      <S.Item>
        <a href="">
          <img src={twitterLogo} alt="" />
        </a>
      </S.Item>
    </S.List>
    <S.TextContainer>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </S.TextContainer>
  </S.FooterContainer>
)

export default Footer
