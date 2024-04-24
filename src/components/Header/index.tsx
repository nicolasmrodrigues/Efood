import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartButton, HeaderContainer, Title } from './styles'
import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

export type Props = {
  type?: 'primary' | 'secondary'
}

const Header = ({ type = 'primary' }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  if (type === 'primary') {
    return (
      <HeaderContainer type={type}>
        <Link to="/">Restaurantes</Link>
        <h1>
          <Logo src={logo} alt="Efood" />
        </h1>
        <CartButton onClick={() => dispatch(open())}>
          <span>{items.length} </span>
          produto(s) no carrinho
        </CartButton>
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
