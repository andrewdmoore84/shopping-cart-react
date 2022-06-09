const cart = (state = [], action) => {
  switch (action.type) {
    case 'CART_RECEIVED': {
      return action.payload
    }
    case 'CART_CHECKED_OUT': {
      return []
    }
    default: {
      return state
    }
  }
}

export default cart
