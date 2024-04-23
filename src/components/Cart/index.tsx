import {
  CartContainer,
  CartContent,
  CartItem,
  DeleteIcon,
  Image,
  Overlay,
  Title,
  TotalPrice
} from './styles'
import trashBin from '../../assets/images/trash-bin.png'
import { Button } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice } from '../DishCard'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((total, current) => total + current.preco, 0)
  }

  return (
    <CartContainer className={isOpen ? 'visible' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <CartContent>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <Image src={item.foto} alt={item.nome} />
                  <div>
                    <h4>{item.nome}</h4>
                    <span>{formatPrice(item.preco)}</span>
                  </div>
                  <DeleteIcon
                    onClick={() => dispatch(remove(item.id))}
                    src={trashBin}
                    alt="Deletar item"
                  />
                </CartItem>
              ))}
            </ul>
            <TotalPrice>
              <span>Valor total</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </TotalPrice>
            <Button type="primary">Continuar com a entrega</Button>
          </>
        ) : (
          <Title>Você ainda não adicionou um item ao carrinho</Title>
        )}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
