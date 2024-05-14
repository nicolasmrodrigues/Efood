import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const AlredyInCart = state.items.find((item) => {
        return item.id === action.payload.id
      })
      if (!AlredyInCart) {
        state.items.push(action.payload)
      } else {
        alert('Este item já foi adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload
      })
    },
    clear: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, clear, open, close } = cartSlice.actions
export default cartSlice.reducer
