import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products'
import cartReducer from '../features/cart'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  }
})

export default store;