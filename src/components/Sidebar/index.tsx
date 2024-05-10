import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Input,
  Label,
  Overlay,
  Sidebar as SidebarStyle
} from './styles'
import { RootReducer } from '../../store'
import Cart from '../Cart'
import { close as closeCart } from '../../store/reducers/cart'
import { close as closeDelivery } from '../../store/reducers/delivery'
import { close as closePayment } from '../../store/reducers/payment'
import { Content } from './styles'
import Button from '../Button'
import { open as openCart } from '../../store/reducers/cart'
import { open as openPayment } from '../../store/reducers/payment'
import { open as openDelivery } from '../../store/reducers/delivery'
import { formatPrice, getTotalPrice } from '../../utils'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Sidebar = () => {
  const { isOpen: cartIsOpen, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const { isOpen: deliveryIsOpen } = useSelector(
    (state: RootReducer) => state.delivery
  )
  const { isOpen: paymentIsOpen } = useSelector(
    (state: RootReducer) => state.payment
  )
  const dispatch = useDispatch()

  const goToCart = () => {
    dispatch(closeDelivery())
    dispatch(openCart())
  }

  const goToPayment = () => {
    dispatch(closeDelivery())
    dispatch(openPayment())
  }

  const gotToDelivery = () => {
    dispatch(closePayment())
    dispatch(openDelivery())
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpireMonth: '',
      cardExpireYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(4, 'O campo da cidade precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O campo precisa ter pelo menos 5 caracteres'
      ),
      cardName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .min(16, 'O campo precisa ter 16 caracteres')
        .max(16, 'O campo precisa ter 16 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('O campo é obrigatório'),
      cardExpireMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      cardExpireYear: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres')
        .max(4, 'O campo precisa ter 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  if (cartIsOpen) {
    return (
      <Container>
        <>
          <Overlay onClick={() => dispatch(closeCart())} />
          <SidebarStyle>
            <Cart />
          </SidebarStyle>
        </>
      </Container>
    )
  } else if (deliveryIsOpen || paymentIsOpen) {
    const isSuccess = false

    return (
      <Container>
        <>
          <Overlay
            onClick={
              deliveryIsOpen
                ? () => dispatch(closeDelivery())
                : () => dispatch(closePayment())
            }
          />
          <SidebarStyle>
            <Content>
              {!isSuccess ? (
                <form onSubmit={form.handleSubmit}>
                  <div className={deliveryIsOpen ? 'visible' : 'invisible'}>
                    <h4>Entrega</h4>
                    <div>
                      <Label htmlFor="receiver">Quem irá receber</Label>
                      <Input
                        type="text"
                        id="receiver"
                        name="receiver"
                        value={form.values.receiver}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                    <div>
                      <Label htmlFor="description">Endereço</Label>
                      <Input
                        type="text"
                        id="description"
                        name="description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                    <div id="address-numbers">
                      <div>
                        <Label htmlFor="zipCode">CEP</Label>
                        <Input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={form.values.zipCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </div>
                      <div>
                        <Label htmlFor="number">Número</Label>
                        <Input
                          type="text"
                          id="number"
                          name="number"
                          value={form.values.number}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </div>
                    </div>
                    <div className="margin-bottom">
                      <Label htmlFor="complement">Complemento (opcional)</Label>
                      <Input
                        type="text"
                        id="complement"
                        name="complement"
                        value={form.values.complement}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                    <Button onClick={goToPayment}>
                      Continuar com o pagamento
                    </Button>
                    <Button onClick={goToCart}>Voltar para o carrinho</Button>
                  </div>
                  <div className={paymentIsOpen ? 'visible' : 'invisible'}>
                    <h4>
                      Pagamento - Valor a pagar R${' '}
                      {formatPrice(getTotalPrice(items))}
                    </h4>
                    <div>
                      <Label htmlFor="cardName">Nome no cartão</Label>
                      <Input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                    <div id="security">
                      <div>
                        <Label htmlFor="cardNumber">Número do cartão</Label>
                        <Input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardCode">CVV</Label>
                        <Input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </div>
                    </div>
                    <div id="expiration">
                      <div>
                        <Label htmlFor="cardExpireMonth">
                          Mês de vencimento
                        </Label>
                        <Input
                          type="text"
                          id="cardExpireMonth"
                          name="cardExpireMonth"
                          value={form.values.cardExpireMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardExpireYear">
                          Ano de vencimento
                        </Label>
                        <Input
                          type="text"
                          id="cardExpireYear"
                          name="cardExpireYear"
                          value={form.values.cardExpireYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                      </div>
                    </div>
                    <Button type="submit" onClick={form.handleSubmit}>
                      Finalizar pagamento
                    </Button>
                    <Button onClick={gotToDelivery}>
                      Voltar para a edição de endereço
                    </Button>
                  </div>
                </form>
              ) : (
                <>
                  <h4>Pedido realizado - ORDER_ID</h4>
                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.
                  </p>
                  <p>
                    Lembre-se da importância de higienizar as mãos após o
                    recebimento do pedido, garantindo assim sua segurança e
                    bem-estar durante a refeição.
                  </p>
                  <p>
                    Esperamos que desfrute de uma deliciosa e agradável
                    experiência gastronômica. Bom apetite!
                  </p>
                  <Button>Concluir</Button>
                </>
              )}
            </Content>
          </SidebarStyle>
        </>
      </Container>
    )
  } else {
    return <></>
  }
}

export default Sidebar
