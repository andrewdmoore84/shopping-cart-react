import axios from "axios";
const baseURL = "/api/products"

const getAll = async () => {
  const response = await axios.get(baseURL);
  return response.data
}

const create = async (newProduct) => {
  try {
    const response = await axios.post(`${baseURL}`, newProduct)
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}

const update = async (updatedProduct, id) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, updatedProduct)
    return response.data
  } catch (error){
    console.log('error', error)
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`)
    return response.data
  } catch (error){
    console.log('error', error)
  }
}

export default { create, update, getAll, deleteProduct };
