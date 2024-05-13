import { Form } from './styles'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { formatPrice, getTotalPrice } from '../../utils'
import { Label } from '../../styles'
import InputMask from 'react-input-mask'
import Button from '../Button'
import { close as closePayment } from '../../store/reducers/payment'
import { open as openDelivery } from '../../store/reducers/delivery'
import { clear as clearCart } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'
import { setInfo as setPaymentInfo } from '../../store/reducers/payment'
import { clear as clearDelivery } from '../../store/reducers/delivery'
import { clear as clearPayment } from '../../store/reducers/payment'

const Payment = () => {
  const { info: deliveryInfo } = useSelector(
    (state: RootReducer) => state.delivery
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { info } = useSelector((state: RootReducer) => state.payment)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [orderId, setOrderId] = useState(false)

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
    const error = field in paymentForm.touched && field in paymentForm.errors

    return error
  }

  const paymentForm = useFormik({
    initialValues: {
      cardName: info.cardName,
      cardNumber: info.cardNumber,
      cardCode: info.cardCode,
      cardExpirationMonth: info.cardExpirationMonth,
      cardExpirationYear: info.cardExpirationYear
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
      dispatch(
        setPaymentInfo({
          cardName: values.cardName,
          cardNumber: values.cardNumber,
          cardCode: values.cardCode,
          cardExpirationMonth: values.cardExpirationMonth,
          cardExpirationYear: values.cardExpirationYear
        })
      )

      const data = getData(deliveryInfo, values)
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
      } else {
        alert('Houve um erro no pedido')
      }
    }
  })

  const finishPurchase = () => {
    dispatch(clearCart())
    dispatch(clearDelivery())
    dispatch(clearPayment())
    navigate('/')
  }

  const gotToDelivery = () => {
    dispatch(closePayment())
    dispatch(openDelivery())
  }

  return (
    <>
      {!orderId ? (
        <Form
          onSubmit={paymentForm.handleSubmit}
          onReset={paymentForm.handleReset}
        >
          <h4>
            Pagamento - Valor a pagar: R$ {formatPrice(getTotalPrice(items))}
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
              <Label htmlFor="cardExpirationMonth">Mês de vencimento</Label>
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
              <Label htmlFor="cardExpirationYear">Ano de vencimento</Label>
              <InputMask
                type="text"
                id="cardExpirationYear"
                name="cardExpirationYear"
                className={checkInputError('cardExpirationYear') ? 'error' : ''}
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
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Button onClick={finishPurchase}>Concluir</Button>
        </>
      )}
    </>
  )
}

export default Payment
