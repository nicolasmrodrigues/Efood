import InputMask from 'react-input-mask'
import { Label } from '../../styles'
import { Form } from './styles'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { close as closeDelivery } from '../../store/reducers/delivery'
import { open as openPayment } from '../../store/reducers/payment'
import Button from '../Button'
import { open as openCart } from '../../store/reducers/cart'
import { setInfo as setDeliveryInfo } from '../../store/reducers/delivery'
import { RootReducer } from '../../store'

const Delivery = () => {
  const dispatch = useDispatch()

  const { info } = useSelector((state: RootReducer) => state.delivery)

  const checkInputError = (field: string) => {
    const error = field in deliveryForm.touched && field in deliveryForm.errors

    return error
  }

  const deliveryForm = useFormik({
    initialValues: {
      receiver: info.receiver,
      description: info.description,
      city: info.city,
      zipCode: info.zipCode,
      number: info.number,
      complement: info.complement
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
    onSubmit: (values) => {
      dispatch(
        setDeliveryInfo({
          receiver: values.receiver,
          description: values.description,
          city: values.city,
          zipCode: values.zipCode,
          number: values.number,
          complement: values.complement
        })
      )
      goToPayment()
    }
  })

  const goToPayment = () => {
    dispatch(closeDelivery())
    dispatch(openPayment())
  }

  const goToCart = () => {
    dispatch(closeDelivery())
    dispatch(openCart())
  }

  return (
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
      <Button type="submit" onClick={deliveryForm.handleSubmit}>
        Continuar com o pagamento
      </Button>
      <Button type="button" onClick={goToCart}>
        Voltar para o carrinho
      </Button>
    </Form>
  )
}

export default Delivery
