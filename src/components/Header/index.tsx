import { HeaderContainer, Title } from './styles'
import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'
import { Link } from 'react-router-dom'

export type Props = {
  type?: 'primary' | 'secondary'
}

const Header = ({ type = 'primary' }: Props) => {
  if (type === 'primary') {
    return (
      <HeaderContainer type={type}>
        <Link to="/">Restaurantes</Link>
        <h1>
          <Logo src={logo} alt="Efood" />
        </h1>
        <div>
          <span>0 </span>
          produto(s) no carrinho
        </div>
      </HeaderContainer>
    )
  } else {
    return (
      <HeaderContainer type={type}>
        <h1>
          <Logo src={logo} alt="Efood" />
        </h1>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </HeaderContainer>
    )
  }
}

export default Header
