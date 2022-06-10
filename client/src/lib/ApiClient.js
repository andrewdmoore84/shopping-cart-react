import axios from 'axios'

const apiClient = {
  getProducts: async () => {
    const { data } = await axios.get('/api/products')
    return data
  },

  createProduct: async ({ title, price, quantity }) => {
    const { data } = await axios.post('/api/products', { title, price, quantity })
    return data
  },

  updateProduct: async ({ _id, title, price, quantity }) => {
    const { data } = await axios.put(
      `/api/products/${_id}`,
      { _id, title, price, quantity }
    )
    return data
  },

  deleteProduct: async (productId) => {
    await axios.delete(`/api/products/${productId}`)
  },

  getCartItems: async () => {
    const { data } = await axios.get('/api/cart')
    return data
  },

  addItemToCart: async (product) => {
    const { data } = await axios.post('/api/add-to-cart', product)
    return data
  },

  checkout: async () => {
    await axios.post('api/checkout')
  }
}

export default apiClient