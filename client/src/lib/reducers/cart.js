const cart = (state = [], action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload
    }
    case 'CART_CHECKED_OUT': {
      return []
    }
    case 'CART_ITEM_ADDED': {
      if (state.some(item => item.productId === action.payload.productId)) {
        return cart.map(item => {
          if (item.productId === action.payload.productId) {
            item.quantity++
            return item
          } else {
            return item
          }
        })
      } else {
        return state.concat(action.payload)
      }
    }
    default: {
      return state
    }
  }
}

export default cart
