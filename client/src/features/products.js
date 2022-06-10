import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from '../service/ProductService';

const initialState = [];

//some async functions
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await ProductService.getAll();
    console.log("thunk", products)
    return products;
  }
)

// export const productsReceived = (products) => {
//   return { type: "PRODUCTS_RECEIVED", payload: products };
// };

// export const productUpdated = (updatedProduct) => {
//   return { type: "PRODUCT_UPDATED", payload: updatedProduct };
// };

// export const productDeleted = (id) => {
//   return { type: "PRODUCT_DELETED", payload: id };
// }

// export const productAdded = (newProduct) => {
//   return { type: "PRODUCT_ADDED", payload: newProduct };
// }


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return action.payload;
    })
  }
});

export default productsSlice.reducer;