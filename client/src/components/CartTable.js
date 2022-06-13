import { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../context/cart'

const CartTable = ({ handleCheckout }) => {
  const { cart: cartItems, _ } = useContext(CartContext)

  const cartTotal = () => {
    const total = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)

    return total.toFixed(2)
  }

  const onCheckoutClick = () => {
    handleCheckout()
  }

  return (
    <>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {
            cartItems.map(cartItem =>
              <CartItem item={cartItem} key={cartItem._id} />
            )
          }

          <tr>
            <td colSpan="3" className="total">Total: ${cartTotal()}</td>
          </tr>

        </tbody>
      </table>
      <a className="button checkout" onClick={onCheckoutClick}>Checkout</a>
    </>
  )
}

export default CartTable
