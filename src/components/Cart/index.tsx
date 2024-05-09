import { CartItem, DeleteIcon, Image, Title, TotalPrice } from './styles'
import trashBin from '../../assets/images/trash-bin.png'
import { Button } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { formatPrice } from '../DishCard'
import Sidebar from '../Sidebar'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((total, current) => total + current.preco, 0)
  }

  return (
    <Sidebar isOpen={isOpen}>
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
    </Sidebar>
  )
}

export default Cart
