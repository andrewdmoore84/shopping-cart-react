import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { cartItemsReceived, cartCheckedOut } from '../actions/cartActions'
import { useEffect } from 'react'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartItems)

  useEffect(() => {
    const getCartItems = async () => {
      const cartData = await axios.get('/api/cart')
      dispatch(cartItemsReceived(cartData.data))
    }
    getCartItems()
  }, [dispatch]);

  const totalPrice = () => (
    cartItems.reduce((accum, cartItem) => {
      return accum + cartItem.price
    }, 0)
  )

  const handleCheckout = async (event) => {
    event.preventDefault()
    try {
      await axios.post('api/checkout')

      dispatch(cartCheckedOut())
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(cartItem => (
            <tr key={cartItem._id}>
              <td>{cartItem.title}</td>
              <td>{cartItem.quantity}</td>
              <td>{cartItem.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan="3" className="total">Total: {totalPrice()}</td>
        </tr>
        </tfoot>
      </table>
      <a href='/' onClick={handleCheckout} className="button checkout">Checkout</a>
    </div>
  )
}

export default Cart;