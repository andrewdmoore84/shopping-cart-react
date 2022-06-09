export const cartReceived = (cartItems) => {
  return { type: 'CART_RECEIVED', payload: cartItems }
}
