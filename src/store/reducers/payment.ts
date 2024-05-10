import { createSlice } from '@reduxjs/toolkit'

type PaymentState = {
  isOpen: boolean
}

const initialState: PaymentState = {
  isOpen: false
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
    }
  }
})

export const { open, close } = PaymentSlice.actions
export default PaymentSlice.reducer
