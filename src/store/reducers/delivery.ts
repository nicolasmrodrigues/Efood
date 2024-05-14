import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type DeliveryState = {
  isOpen: boolean
  info: DeliveryInfo
}

const initialState: DeliveryState = {
  isOpen: false,
  info: {
    receiver: '',
    description: '',
    city: '',
    zipCode: '',
    number: '',
    complement: ''
  }
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
    },
    clear: (state) => {
      state.isOpen = false
      state.info = {
        receiver: '',
        description: '',
        city: '',
        zipCode: '',
        number: '',
        complement: ''
      }
    },
    setInfo: (state, action: PayloadAction<DeliveryInfo>) => {
      state.info = action.payload
    }
  }
})

export const { open, close, clear, setInfo } = DeliverySlice.actions
export default DeliverySlice.reducer
