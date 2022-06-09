export const cartReceived = (cartItems) => {
  return { type: 'CART_RECEIVED', payload: cartItems }
}

export const cartCheckedOut = () => {
  return { type: 'CART_CHECKED_OUT' }
}
