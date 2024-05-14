import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type PaymentState = {
  isOpen: boolean
  info: PaymentInfo
}

const initialState: PaymentState = {
  isOpen: false,
  info: {
    cardName: '',
    cardNumber: '',
    cardCode: '',
    cardExpirationMonth: '',
    cardExpirationYear: ''
  }
}

const PaymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.isOpen = false
      state.info = {
        cardName: '',
        cardNumber: '',
        cardCode: '',
        cardExpirationMonth: '',
        cardExpirationYear: ''
      }
    },
    setInfo: (state, action: PayloadAction<PaymentInfo>) => {
      state.info = action.payload
    }
  }
})

export const { open, close, clear, setInfo } = PaymentSlice.actions
export default PaymentSlice.reducer
