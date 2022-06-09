import axios from "axios"

const getCart = async () => {
  const cartURL = '/api/cart'
  const response = await axios.get(cartURL);

  return response.data
}

// const create = async (newProduct) => {
//   try {
//     const response = await axios.post(`${baseURL}`, newProduct)
//     return response.data
//   } catch (error) {
//     console.log('error', error)
//   }
// }

// const update = async (updatedProduct, id) => {
//   try {
//     const response = await axios.put(`${baseURL}/${id}`, updatedProduct)
//     return response.data
//   } catch (error){
//     console.log('error', error)
//   }
// }

// const deleteProduct = async (id) => {
//   try {
//     const response = await axios.delete(`${baseURL}/${id}`)
//     return response.data
//   } catch (error){
//     console.log('error', error)
//   }
// }

export default { getCart };
