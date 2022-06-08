const ShoppingCart = ({ cartItems }) => (
  <div class="cart">
    <h2>Your cart</h2>

    {
      cartItems.length === 0 ?
        <p>Your cart is empty</p> :
        <CartTable cartItems={cartItems}/>
    }
    <p>
      Total: $
      {
        cartItems.length === 0 ?
          "0" :
          "Reduce items to get total price"
      }
    </p>
    {

    }
  </div>
)

export default ShoppingCart
