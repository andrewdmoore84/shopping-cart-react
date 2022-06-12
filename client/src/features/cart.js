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
//asyn functions for below

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
    
    builder.addCase(checkoutCart.fulfilled, (_, action) => {
      return action.payload;
    });
  }
})

export default cartSlice.reducer;