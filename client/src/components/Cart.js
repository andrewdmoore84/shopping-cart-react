import { useEffect, useContext } from "react";
import { CartItemContext, getCartItems, checkout } from "../context/cartItemsContext";

const Cart = () => {
  const { cartItems, dispatch } = useContext(CartItemContext)

  const totalPrice = () => (
    cartItems.reduce((accum, cartItem) => {
      return accum + cartItem.price
    }, 0)
  )

  useEffect(() => {
    getCartItems(dispatch)
  }, [dispatch]);

  const handleCheckout = (event) => {
    event.preventDefault();
    checkout(dispatch)
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