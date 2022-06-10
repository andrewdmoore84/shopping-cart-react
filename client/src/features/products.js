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

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await ProductService.deleteProduct(id)

    return id
  }
)

// export const productUpdated = (updatedProduct) => {
//   return { type: "PRODUCT_UPDATED", payload: updatedProduct };
// };

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
  }
});

export default productsSlice.reducer;
