const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_UPDATED": {
      const updatedProducts = state.map(product => {
      if (product._id === action.payload._id) {
        return action.payload
      } else {
        return product
      }
    })
    return updatedProducts;
    }
    default: {
      return state;
    }
    case "PRODUCT_DELETED": {
      const updatedProducts = state.filter(product => product._id !== action.payload)
      return updatedProducts
    }
  }
};

export default products;