import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from '../service/ProductService';

const initialState = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await ProductService.getAll();
    console.log("thunk", products)
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

// export const productUpdated = (updatedProduct) => {
//   return { type: "PRODUCT_UPDATED", payload: updatedProduct };
// };

// export const productDeleted = (id) => {
//   return { type: "PRODUCT_DELETED", payload: id };
// }

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
  }
});

export default productsSlice.reducer;
