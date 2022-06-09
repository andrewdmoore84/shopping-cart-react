const cartItems = (state=[], action) => {
  switch (action.type) {
    case 'CART_ITEMS_RECEIVED': {
      return action.payload
    }
    case 'CART_ITEM_ADDED': {
      const cartItemsSansAdded = state.filter(item => item.productId !== action.payload.item.productId)
      return cartItemsSansAdded.concat(action.payload.item)
    }
    case 'CART_CHECKED_OUT': {
      return []
    }
    default: {
      return state
    }
  }
}

export default cartItems