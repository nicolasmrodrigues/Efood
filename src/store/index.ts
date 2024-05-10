import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import deliveryReducer from './reducers/delivery'
import paymentReducer from './reducers/payment'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    delivery: deliveryReducer,
    payment: paymentReducer
  }
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
