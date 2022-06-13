import { createContext, useReducer } from "react"
import ProductService from '../service/ProductService'

export const ProductContext = createContext();

export const fetchProducts = async (dispatch) => {
  const data = await ProductService.getAll()
  dispatch({ type: "PRODUCTS_RECEIVED", payload: data })
}

export const updateProduct = async (updatedProduct, id, dispatch) => {
  const data = await ProductService.update(updatedProduct, id);
  dispatch({ type: "PRODUCT_UPDATED", payload: data })
}

export const deleteProduct = async (id, dispatch) => {
  await ProductService.deleteProduct(id);
  dispatch({ type: "PRODUCT_DELETED", payload: id })
}


// export const productAdded = (newProduct) => {
//   return { type: "PRODUCT_ADDED", payload: newProduct };
// }

const productReducer = ( state, action ) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED" : {
      return action.payload;
    }
    case "PRODUCT_UPDATED" : {
      const updatedProducts = state.map(product => {
        if (product._id === action.payload._id) {
          return action.payload
        } else {
          return product
        }
      })
      return updatedProducts;
    }
    case "PRODUCT_DELETED": {
      const updatedProducts = state.filter(product => product._id !== action.payload)
      return updatedProducts
    }
    default: {
      return state
    }
  }
}

export const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, []);

  return (
    <ProductContext.Provider value={{products, dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};