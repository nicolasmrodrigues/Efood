import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DishType } from '../../pages/RestaurantProfile'

type CartState = {
  items: DishType[]
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
    add: (state, action: PayloadAction<DishType>) => {
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
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
