import { Payment as PaymentStyle, Input, Label } from './styles'

import { Button } from '../../styles'
import { useDispatch, useSelector } from 'react-redux'
import { close as closePayment } from '../../store/reducers/payment'
import { open as openDelivery } from '../../store/reducers/delivery'
import { RootReducer } from '../../store'
import { formatPrice, getTotalPrice } from '../../utils'

const Payment = () => {
  const dispatch = useDispatch()

  const gotToDelivery = () => {
    dispatch(closePayment())
    dispatch(openDelivery())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)
  const isSuccess = false

  return (
    <>
      <PaymentStyle>
        {!isSuccess ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <h4>
              Pagamento - Valor a pagar R$ {formatPrice(getTotalPrice(items))}
            </h4>
            <div>
              <Label htmlFor="card-name">Nome no cartão</Label>
              <Input type="text" id="card-name" />
            </div>
            <div id="security">
              <div>
                <Label htmlFor="card-number">Número do cartão</Label>
                <Input type="text" id="card-number" />
              </div>
              <div>
                <Label htmlFor="card-code">CVV</Label>
                <Input type="text" id="card-code" />
              </div>
            </div>
            <div id="expiration">
              <div>
                <Label htmlFor="card-expire-month">Mês de vencimento</Label>
                <Input type="text" id="card-expire-month" />
              </div>
              <div>
                <Label htmlFor="card-expire-year">Ano de vencimento</Label>
                <Input type="text" id="card-expire-year" />
              </div>
            </div>

            <Button type="primary">Finalizar pagamento</Button>
            <Button type="primary" onClick={gotToDelivery}>
              Voltar para a edição de endereço
            </Button>
          </form>
        ) : (
          <>
            <h4>Pedido realizado - ORDER_ID</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Button type="primary">Concluir</Button>
          </>
        )}
      </PaymentStyle>
    </>
  )
}

export default Payment
