const Cart = ({ cartItems }) => {
  const totalPrice = () => (
    cartItems.reduce((accum, cartItem) => {
      return accum + cartItem.price
    }, 0)
  )

  return (
    <div class="cart">
      <h2>Your Cart</h2>
      <table class="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cartItems.map(cartItem => (
          <tr key={cartItem._id}>
            <td>{cartItem.title}</td>
            <td>{cartItem.quantity}</td>
            <td>{cartItem.price}</td>
          </tr>
        ))}
        <tr>
          <td colspan="3" class="total">Total: {totalPrice()}</td>
        </tr>
      </table>
      <a href='/' class="button checkout">Checkout</a>
    </div>
  )
}

export default Cart;