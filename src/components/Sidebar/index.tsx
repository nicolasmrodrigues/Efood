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
  const { isOpen: cartIsOpen } = useSelector((state: RootReducer) => state.cart)
  const { isOpen: deliveryIsOpen } = useSelector(
    (state: RootReducer) => state.delivery
  )
  const { isOpen: paymentIsOpen } = useSelector(
    (state: RootReducer) => state.payment
  )
  const dispatch = useDispatch()

  if (cartIsOpen) {
    return (
      <Container className="visible">
        <>
          <Overlay onClick={() => dispatch(closeCart())} />
          <SidebarStyle>
            <Cart />
          </SidebarStyle>
        </>
      </Container>
    )
  } else if (deliveryIsOpen) {
    return (
      <Container className="visible">
        <>
          <Overlay onClick={() => dispatch(closeDelivery())} />
          <SidebarStyle>
            <Delivery />
          </SidebarStyle>
        </>
      </Container>
    )
  } else if (paymentIsOpen) {
    return (
      <Container className="visible">
        <>
          <Overlay onClick={() => dispatch(closePayment())} />
          <SidebarStyle>
            <Payment />
          </SidebarStyle>
        </>
      </Container>
    )
  } else {
    return <></>
  }
}

export default Sidebar
