import { useDispatch, useSelector } from 'react-redux'
import { Container, Overlay, Sidebar as SidebarStyle } from './styles'
import { RootReducer } from '../../store'
import Cart from '../Cart'
import { close as closeCart } from '../../store/reducers/cart'
import { close as closeDelivery } from '../../store/reducers/delivery'
import { close as closePayment } from '../../store/reducers/payment'
import Delivery from '../Delivery'
import Payment from '../Payment'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { isOpen: cartIsOpen } = useSelector((state: RootReducer) => state.cart)
  const { isOpen: deliveryIsOpen } = useSelector(
    (state: RootReducer) => state.delivery
  )
  const { isOpen: paymentIsOpen } = useSelector(
    (state: RootReducer) => state.payment
  )

  let elementToRender

  if (cartIsOpen) {
    elementToRender = <Cart />
  } else if (deliveryIsOpen) {
    elementToRender = <Delivery />
  } else if (paymentIsOpen) {
    elementToRender = <Payment />
  }

  const close = () => {
    if (cartIsOpen) {
      dispatch(closeCart())
    } else if (deliveryIsOpen) {
      dispatch(closeDelivery())
    } else if (paymentIsOpen) {
      dispatch(closePayment())
    }
  }

  if (cartIsOpen || deliveryIsOpen || paymentIsOpen) {
    return (
      <Container>
        <>
          <Overlay onClick={close} />
          <SidebarStyle>{elementToRender}</SidebarStyle>
        </>
      </Container>
    )
  } else {
    return <></>
  }
}

export default Sidebar
