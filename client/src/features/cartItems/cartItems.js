import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '../../lib/ApiClient'

export const fetchCartItems = createAsyncThunk(
  "cartItems/fetchCartItems",
  async () => {
    const cartItems = await apiClient.getCartItems()
    return cartItems
  }
)

export const addItemToCart = createAsyncThunk(
  "cartItems/addItemToCart",
  async (product) => {
    const newCartItem = await apiClient.addItemToCart(product)
    return newCartItem
  }
)

export const checkout = createAsyncThunk(
  "cartItems/checkout",
  async () => {
    await apiClient.checkout()
  }
)

const cartItemSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCartItems.fulfilled, (_, action) => {
      return action.payload
    })

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      const cartItemsSansAdded = state.filter(item => item.productId !== action.payload.item.productId)
      return cartItemsSansAdded.concat(action.payload.item)
    })

    builder.addCase(checkout.fulfilled, () => {
      return []
    })
  }
})

export default cartItemSlice.reducer