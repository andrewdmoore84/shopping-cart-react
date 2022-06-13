import { createContext, useReducer } from 'react';
import axios from 'axios';

export const CartItemContext = createContext();

const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case 'CART_ITEMS_RECEIVED': {
      return action.payload
    }
    case 'CART_ITEM_ADDED': {
      const cartItemsSansItem = state.filter(cartItem => (
        cartItem.productId !== action.payload.productId
      ))

      return cartItemsSansItem.concat(action.payload)
    }
    case 'CART_CHECKED_OUT': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getCartItems = async (dispatch) => {
  const { data } = await axios.get('/api/cart')
  dispatch({type: 'CART_ITEMS_RECEIVED', payload: data})
}

export const addToCart = async (productInfo, productDispatch, cartItemDispatch) => {
  try {
    const { data } = await axios.post('/api/add-to-cart', productInfo)
    productDispatch({type: 'CART_ITEM_ADDED', payload: data.product})
    cartItemDispatch({type: 'CART_ITEM_ADDED', payload: data.item})
  } catch(err) {
    console.error(err)
  }
}

export const checkout = async (dispatch) => {
  try {
    await axios.post('api/checkout')
    dispatch({type: 'CART_CHECKED_OUT'})
  } catch(err) {
    console.error(err)
  }
}


export const CartItemProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartItemsReducer, [])

  return (
    <CartItemContext.Provider value={{cartItems, dispatch}}>
      { children }
    </CartItemContext.Provider>
  )
}