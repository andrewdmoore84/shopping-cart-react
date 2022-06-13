import { createContext, useReducer } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

const productsReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCTS_RECEIVED': {
      return action.payload
    }
    case 'PRODUCT_ADDED': {
      return state.concat(action.payload)
    }
    case 'PRODUCT_DELETED': {
      return state.filter(product => (product._id !== action.payload))
    }
    case 'PRODUCT_EDITED': {
      return state.map(product => (product._id === action.payload._id ? action.payload : product))
    }
    case 'CART_ITEM_ADDED': {
      return state.map(product => product._id === action.payload._id ? action.payload : product)
    }
    default: {
      return state
    }
  }
}

export const getProducts = async (dispatch) => {
  const { data } = await axios.get('/api/products')
  dispatch({type: 'PRODUCTS_RECEIVED', payload: data})
}

export const addProduct = async (newProduct, callback, dispatch) => {
  try {
    const { data } = await axios.post('/api/products', {...newProduct})
    dispatch({type: 'PRODUCT_ADDED', payload: data})
    if (callback) {
      callback()
    }
  } catch(err) {
    console.error(err)
  }
}

export const deleteProduct = async (productId, dispatch) => {
  try {
    await axios.delete(`/api/products/${productId}`)
    dispatch({type: 'PRODUCT_DELETED', payload: productId})
  } catch(err) {
    console.error(err)
  }
}

export const editProduct = async (newProduct, dispatch) => {
  try {
    const { data } = await axios.put(`/api/products/${newProduct._id}`, newProduct)
    dispatch({type: 'PRODUCT_EDITED', payload: data})
  } catch(err) {
    console.error(err)
  }
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productsReducer, [])

  return (
    <ProductContext.Provider value={{products, dispatch}}>
      { children }
    </ProductContext.Provider>
  )
}