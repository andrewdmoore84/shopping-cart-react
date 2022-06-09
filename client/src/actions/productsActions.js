
export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
};

export const productUpdated = (updatedProduct) => {
  return { type: "PRODUCT_UPDATED", payload: updatedProduct };
};

export const productDeleted = (id) => {
  return { type: "PRODUCT_DELETED", payload: id };
}