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
//asyn functions for below
// export const cartReceived = (cartItems) => {
//   return { type: 'CART_RECEIVED', payload: cartItems }
// }

// export const cartCheckedOut = () => {
//   return { type: 'CART_CHECKED_OUT' }
// }

// export const cartItemAdded = (addedItem) => {
//   return { type: 'CART_ITEM_ADDED', payload: addedItem }
// }

const cartSlice = createSlice({ 
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (_, action) => {
      return action.payload
    });
  }
})

export default cartSlice.reducer;