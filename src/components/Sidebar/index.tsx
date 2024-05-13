import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Form,
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
import InputMask from 'react-input-mask'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

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
    navigate('/')
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

  const checkInputError = (field: string) => {
    const error =
      (field in deliveryForm.touched && field in deliveryForm.errors) ||
      (field in paymentForm.touched && field in paymentForm.errors)

    return error
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
      zipCode: Yup.string()
        .min(9, 'O campo deve ter 9 caracteres')
        .max(9, 'O campo deve ter 9 caracteres')
        .required('O campo é obrigatório'),
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
        .min(19, 'O campo precisa ter 19 caracteres')
        .max(19, 'O campo precisa ter 19 caracteres')
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
              <h4>Entrega</h4>
              <div>
                <Label htmlFor="receiver">Quem irá receber</Label>
                <input
                  type="text"
                  id="receiver"
                  name="receiver"
                  className={checkInputError('receiver') ? 'error' : ''}
                  value={deliveryForm.values.receiver}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <div>
                <Label htmlFor="description">Endereço</Label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className={checkInputError('description') ? 'error' : ''}
                  value={deliveryForm.values.description}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <div>
                <Label htmlFor="city">Cidade</Label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className={checkInputError('city') ? 'error' : ''}
                  value={deliveryForm.values.city}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <div id="address-numbers">
                <div>
                  <Label htmlFor="zipCode">CEP</Label>
                  <InputMask
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    className={checkInputError('zipCode') ? 'error' : ''}
                    value={deliveryForm.values.zipCode}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                    mask="99999-999"
                    maskChar={''}
                  />
                </div>
                <div>
                  <Label htmlFor="number">Número</Label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    className={checkInputError('number') ? 'error' : ''}
                    value={deliveryForm.values.number}
                    onChange={deliveryForm.handleChange}
                    onBlur={deliveryForm.handleBlur}
                  />
                </div>
              </div>
              <div className="margin-bottom">
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  className={checkInputError('complement') ? 'error' : ''}
                  value={deliveryForm.values.complement}
                  onChange={deliveryForm.handleChange}
                  onBlur={deliveryForm.handleBlur}
                />
              </div>
              <Button
                type="submit"
                onClick={() => {
                  console.log(deliveryForm.errors)
                }}
              >
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
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    className={checkInputError('cardName') ? 'error' : ''}
                    value={paymentForm.values.cardName}
                    onChange={paymentForm.handleChange}
                    onBlur={paymentForm.handleBlur}
                  />
                </div>
                <div id="security">
                  <div>
                    <Label htmlFor="cardNumber">Número do cartão</Label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      className={checkInputError('cardNumber') ? 'error' : ''}
                      value={paymentForm.values.cardNumber}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      mask="9999 9999 9999 9999"
                      maskChar={''}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardCode">CVV</Label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      className={checkInputError('cardCode') ? 'error' : ''}
                      value={paymentForm.values.cardCode}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      mask="999"
                      maskChar={''}
                    />
                  </div>
                </div>
                <div id="expiration">
                  <div>
                    <Label htmlFor="cardExpirationMonth">
                      Mês de vencimento
                    </Label>
                    <InputMask
                      type="text"
                      id="cardExpirationMonth"
                      name="cardExpirationMonth"
                      className={
                        checkInputError('cardExpirationMonth') ? 'error' : ''
                      }
                      value={paymentForm.values.cardExpirationMonth}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      mask="99"
                      maskChar={''}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cardExpirationYear">
                      Ano de vencimento
                    </Label>
                    <InputMask
                      type="text"
                      id="cardExpirationYear"
                      name="cardExpirationYear"
                      className={
                        checkInputError('cardExpirationYear') ? 'error' : ''
                      }
                      value={paymentForm.values.cardExpirationYear}
                      onChange={paymentForm.handleChange}
                      onBlur={paymentForm.handleBlur}
                      mask="9999"
                      maskChar={''}
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
