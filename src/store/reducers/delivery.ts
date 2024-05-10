import { createSlice } from '@reduxjs/toolkit'

type DeliveryState = {
  isOpen: boolean
}

const initialState: DeliveryState = {
  isOpen: false
}

const DeliverySlice = createSlice({
  name: 'delivery',
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

export const { open, close } = DeliverySlice.actions
export default DeliverySlice.reducer
