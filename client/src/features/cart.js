import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CartService from "../service/CartService";

const initialState = [];

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const cart = await CartService.getItems();
    return cart
  }
)

export const checkoutCart = createAsyncThunk(
  "cart/checkoutCart",
  async () => {
    await CartService.checkout();
    return []
  }
)

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (id) => {
    const response = await CartService.add(id);
    return response.item;
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (_, action) => {
      return action.payload
    });

    builder.addCase(checkoutCart.fulfilled, (_, action) => {
      return action.payload;
    });

    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      if (action.payload) {
        const updateIndex = state.findIndex(item => item.productId === action.payload.productId)
        if (updateIndex !== -1) {
          const updateItem = state[updateIndex]
          updateItem.quantity += 1
          state.splice(updateIndex, 1, updateItem)
        } else {
          state.push(action.payload)
        }
      }
    })
  }
})

export default cartSlice.reducer;
