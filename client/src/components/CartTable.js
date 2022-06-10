import CartItem from './CartItem'
import CartService from '../service/CartService'
import { useDispatch } from 'react-redux'
import { cartCheckedOut } from '../actions/cartActions'

const CartTable = ({ cartItems }) => {
  const dispatch = useDispatch()

  const cartTotal = () => {
    const total = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)

    return total.toFixed(2)
  }

  const checkoutCart = async () => {
    await CartService.checkout()

    dispatch(cartCheckedOut())
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
