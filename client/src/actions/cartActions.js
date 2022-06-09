export const cartReceived = (cartItems) => {
  return { type: 'CART_RECEIVED', payload: cartItems }
}

export const cartCheckedOut = () => {
  return { type: 'CART_CHECKED_OUT' }
}

export const cartItemAdded = (addedItem) => {
  return { type: 'CART_ITEM_ADDED', payload: addedItem }
}
