import { Delivery as DeliveryStyle, Input, Label } from './styles'

import { Button } from '../../styles'
import { useDispatch } from 'react-redux'
import { close as closeDelivery } from '../../store/reducers/delivery'
import { open as openCart } from '../../store/reducers/cart'
import { open as openPayment } from '../../store/reducers/payment'

const Delivery = () => {
  const dispatch = useDispatch()

  const goToCart = () => {
    dispatch(closeDelivery())
    dispatch(openCart())
  }

  const goToPayment = () => {
    dispatch(closeDelivery())
    dispatch(openPayment())
  }

  return (
    <DeliveryStyle>
      <form onSubmit={(e) => e.preventDefault()}>
        <h4>Entrega</h4>
        <div>
          <Label htmlFor="name">Quem irá receber</Label>
          <Input type="text" id="name" />
        </div>
        <div>
          <Label htmlFor="description">Endereço</Label>
          <Input type="text" id="description" />
        </div>
        <div>
          <Label htmlFor="city">Cidade</Label>
          <Input type="text" id="city" />
        </div>
        <div id="address-numbers">
          <div>
            <Label htmlFor="zip-code">CEP</Label>
            <Input type="text" id="zip-code" />
          </div>
          <div>
            <Label htmlFor="number">Número</Label>
            <Input type="text" id="number" />
          </div>
        </div>
        <div className="margin-bottom">
          <Label htmlFor="complement">Complemento (opcional)</Label>
          <Input type="text" id="complement" />
        </div>
        <Button type="primary" onClick={goToPayment}>
          Continuar com o pagamento
        </Button>
        <Button type="primary" onClick={goToCart}>
          Voltar para o carrinho
        </Button>
      </form>
    </DeliveryStyle>
  )
}

export default Delivery
