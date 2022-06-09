export const cartItemsReceived = (cartItems) => {
  return {
    type: 'CART_ITEMS_RECEIVED',
    payload: cartItems
  }
}

export const cartItemAdded = (newCartItem) => {
  return {
    type: 'CART_ITEM_ADDED',
    payload: newCartItem
  }
}

export const cartCheckedOut = () => {
  return {
    type: 'CART_CHECKED_OUT'
  }
}