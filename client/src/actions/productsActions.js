
export const productsReceived = (products) => {
  return { type: "PRODUCTS_RECEIVED", payload: products };
};

export const productUpdated = (updatedProduct) => {
  return { type: "PRODUCT_UPDATED", payload: updatedProduct };
};