import CartItem from './CartItem'

const CartTable = ({ cartItems }) => {
  const cartTotal = () => {
    const total = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0)

    return total.toFixed(2)
  }

  return (
    <>
      <table class="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>

      {
        cartItems.map(cartItem =>
          <CartItem item={cartItem} />
        )
      }

        <tr>
          <td colspan="3" class="total">Total: ${cartTotal()}</td>
        </tr>
      </table>
      <a class="button checkout">Checkout</a>
    </>
  )
}

export default CartTable
