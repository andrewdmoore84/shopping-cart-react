export const productsReceived = (products) => {
  return {
    type: 'PRODUCTS_RECEIVED',
    payload: products
  }
}

export const productAdded = (newProduct) => {
  return {
    type: 'PRODUCT_ADDED',
    payload: newProduct
  }
}

export const productEdited = (editedProduct) => {
  return {
    type: 'PRODUCT_EDITED',
    payload: editedProduct
  }
}

export const productDeleted = (deletedProductId) => {
  return {
    type: 'PRODUCT_DELETED',
    payload: deletedProductId
  }
}
