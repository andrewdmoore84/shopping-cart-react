import axios from "axios"

const getItems = async () => {
  const cartURL = '/api/cart'
  const response = await axios.get(cartURL);

  return response.data
}

const checkout = async () => {
  const checkoutURL = '/api/checkout'
  await axios.post(checkoutURL)

  return
}

export default { checkout, getItems };
