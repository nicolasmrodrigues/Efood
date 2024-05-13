import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Form,
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
import Button from '../Button'
import { open as openCart, clear as clearCart } from '../../store/reducers/cart'
import { open as openPayment } from '../../store/reducers/payment'
import { open as openDelivery } from '../../store/reducers/delivery'
import { formatPrice, getTotalPrice } from '../../utils'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

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

  const [orderId, setOrderId] = useState(false)

  const finishPurchase = () => {
    dispatch(clearCart())
    dispatch(closePayment())
    deliveryForm.resetForm()
    paymentForm.resetForm()
  }

  const getData = (delivery: DeliveryInfo, payment: PaymentInfo) => {
    const products = items.map((item) => {
      return {
        id: item.id,
        price: item.preco
      }
    })

    return {
      products,
      delivery: {
        receiver: delivery.receiver,
        address: {
          description: delivery.description,
          city: delivery.city,
          zipCode: delivery.zipCode,
          number: Number(delivery.number),
          complement: delivery.complement
        }
      },
      payment: {
        card: {
          name: payment.cardName,
          number: payment.cardNumber,
          code: Number(payment.cardCode),
          expires: {
            month: Number(payment.cardExpirationMonth),
            year: Number(payment.cardExpirationYear)
          }
        }
      }
    }
  }

  const deliveryForm = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
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
      )
    }),
    onSubmit: () => {
      goToPayment()
    }
  })

  const paymentForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      cardExpirationMonth: '',
      cardExpirationYear: ''
    },
    validationSchema: Yup.object({
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
      cardExpirationMonth: Yup.string()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('O campo é obrigatório'),
      cardExpirationYear: Yup.string()
        .min(4, 'O campo precisa ter 4 caracteres')
        .max(4, 'O campo precisa ter 4 caracteres')
        .required('O campo é obrigatório')
    }),
    onSubmit: async (values) => {
      const data = getData(deliveryForm.values, values)
      const response = await fetch(
        'https://fake-api-tau.vercel.app/api/efood/checkout',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      const responseJson = await response.json()

      if (response.ok) {
        setOrderId(responseJson.orderId)
      }
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
  } else if (deliveryIsOpen) {
    return (
      <Container>
        <>
          <Overlay onClick={() => dispatch(closeDelivery())} />
          <SidebarStyle>
            <Form onSubmit={deliveryForm.handleSubmit}>
              {`${cartIsOpen}, ${deliveryIsOpen}, ${paymentIsOpen}`}
              <h4>Entrega</h4>
              <div>
                <Label htmlFor="receiver">Quem irá receber</Label>
                <Input
                  type="text"
                  id="receiver"
                  name="receiver"
                  value={deliveryForm.values.receiver}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <div>
                <Label htmlFor="description">Endereço</Label>
                <Input
                  type="text"
                  id="description"
                  name="description"
                  value={deliveryForm.values.description}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <div>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={deliveryForm.values.city}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <div id="address-numbers">
                <div>
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={deliveryForm.values.zipCode}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                  />
                </div>
                <div>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    type="text"
                    id="number"
                    name="number"
                    value={deliveryForm.values.number}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                  />
                </div>
              </div>
              <div className="margin-bottom">
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  type="text"
                  id="complement"
                  name="complement"
                  value={deliveryForm.values.complement}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <Button type="submit" onClick={deliveryForm.handleSubmit}>
                Continuar com o pagamento
              </Button>
              <Button type="button" onClick={goToCart}>
                Voltar para o carrinho
              </Button>
            </Form>
          </SidebarStyle>
        </>
      </Container>
    )
  } else if (paymentIsOpen) {
    return (
      <Container>
        <>
          <Overlay onClick={() => dispatch(closePayment())} />
          <SidebarStyle>
            {!orderId ? (
              <Form
                onSubmit={paymentForm.handleSubmit}
                onReset={deliveryForm.handleReset}
              >
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
                    value={paymentForm.values.cardName}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                  />
                </div>
                <div id="security">
                  <div>
                    <Label htmlFor="cardNumber">Número do cartão</Label>
                    <Input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={paymentForm.values.cardNumber}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCode">CVV</Label>
                    <Input
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={paymentForm.values.cardCode}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                    />
                  </div>
                </div>
                <div id="expiration">
                  <div>
                    <Label htmlFor="cardExpirationMonth">
                      Mês de vencimento
                    </Label>
                    <Input
                      type="text"
                      id="cardExpirationMonth"
                      name="cardExpirationMonth"
                      value={paymentForm.values.cardExpirationMonth}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardExpirationYear">
                      Ano de vencimento
                    </Label>
                    <Input
                      type="text"
                      id="cardExpirationYear"
                      name="cardExpirationYear"
                      value={paymentForm.values.cardExpirationYear}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                    />
                  </div>
                </div>
                <Button type="submit" onClick={paymentForm.handleSubmit}>
                  Finalizar pagamento
                </Button>
                <Button type="button" onClick={gotToDelivery}>
                  Voltar para a edição de endereço
                </Button>
              </Form>
            ) : (
              <>
                <h4>Pedido realizado - {orderId}</h4>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço fornecido
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
                <Button onClick={finishPurchase}>Concluir</Button>
              </>
            )}
          </SidebarStyle>
        </>
      </Container>
    )
  } else {
    return <></>
  }
}

export default Sidebar
