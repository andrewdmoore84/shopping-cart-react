import axios from "axios"
const baseURL = "/api"
const getItems = async () => {
  const response = await axios.get(`${baseURL}/cart`);

  return response.data
}

const checkout = async () => {
  await axios.post(`${baseURL}/checkout`)
  return
}

const add = async (id) => {
  const response = await axios.post(`${baseURL}/add-to-cart`, id);
  return response.data
}

export default { checkout, getItems, add};
