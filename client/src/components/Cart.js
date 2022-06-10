import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchCartItems } from '../features/cartItems/cartItems'
import { checkout } from '../features/cartItems/cartItems'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartItems)

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [dispatch]);

  const totalPrice = () => (
    cartItems.reduce((accum, cartItem) => {
      return accum + cartItem.price
    }, 0)
  )

  const handleCheckout = async (event) => {
    event.preventDefault()
    dispatch(checkout())
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