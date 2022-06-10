import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '../../lib/ApiClient'

import { addItemToCart } from '../cartItems/cartItems'

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await apiClient.getProducts()
    return products
  }
)

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async ({ newProductInput, callback }) => {
    const newProduct = await apiClient.createProduct(newProductInput)
    if (callback) { callback() }
    return newProduct
  }
)

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (updatedProductInput) => {
    const updatedProduct = await apiClient.updateProduct(updatedProductInput)
    return updatedProduct
  }
)

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (updatedProductId) => {
    await apiClient.deleteProduct(updatedProductId)
    return updatedProductId
  }
)

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return action.payload
    })

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.push(action.payload)
    })

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      return state.map(product => product._id === action.payload._id ? action.payload : product)
    })

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return state.filter(product => product._id !== action.payload) 
    })

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      return state.map(product => product._id === action.payload.product._id ? action.payload.product : product)
    })
  }
})

export default productSlice.reducer