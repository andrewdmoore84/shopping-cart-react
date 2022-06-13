import { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../context/cart'
import CartService from '../service/CartService'

const CartTable = () => {
  const { cart: cartItems, setCart } = useContext(CartContext)

  const checkoutCart = async () => {
    await CartService.checkout()

    setCart([])
  }

  const cartTotal = () => {
    const total = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)

    return total.toFixed(2)
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
      <a className="button checkout" onClick={checkoutCart}>Checkout</a>
    </>
  )
}

export default CartTable
