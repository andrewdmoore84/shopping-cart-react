const products = (state = [], action) => {
  switch (action.type) {
    case "PRODUCTS_RECEIVED": {
      return action.payload;
    }
    case "PRODUCT_ADDED": {
      return state.concat(action.payload)
    }
    case "PRODUCT_DELETED": {
      const updatedProducts = state.filter(product => product._id !== action.payload)
      return updatedProducts
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
    case "CART_ITEM_ADDED": {
      const updatedProducts = state.map(product => {
        if (product._id === action.payload.productId) {
          product.quantity--;
        }
        return product;
      })
      return updatedProducts;
    }
    default: {
      return state;
    }
  }
};

export default products;
