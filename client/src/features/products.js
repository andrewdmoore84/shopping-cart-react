import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from '../service/ProductService';
import { addItemToCart } from "./cart";

const initialState = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await ProductService.getAll();
    return products;
  }
)

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (newProductInfo) => {
    const newProduct = await ProductService.create(newProductInfo)

    return newProduct
  }
)

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await ProductService.deleteProduct(id)

    return id
  }
)

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({updatedProductInfo, id}) => {
    const updatedProduct = await ProductService.update(updatedProductInfo, id)

    return updatedProduct
  }
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return action.payload;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.push(action.payload)
    });

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const deleteIndex = state.findIndex(product => product._id === action.payload)
      state.splice(deleteIndex, 1)
    });

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updateIndex = state.findIndex(product => product._id === action.payload._id)
      state.splice(updateIndex, 1, action.payload)
    });

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      if (action.payload) {
        const updateIndex = state.findIndex(product => product._id === action.payload.productId)
        if (updateIndex !== -1) {
          const updateProduct = state[updateIndex]
          updateProduct.quantity -= 1
        }
      }
    });
  }
});

export default productsSlice.reducer;
