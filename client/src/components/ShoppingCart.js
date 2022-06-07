/*
Your cart

items ? Your cart is empty : itemsTable

Total: $${sumPrices}

*/
const ShoppingCart = ({ cartItems }) => (
  <div class="cart">
    <h2>Your cart</h2>

    {
      cartItems.length === 0 ?
        <p>Your cart is empty</p> :
        // <CartTable />
        cartItems.map(item => {

        })
    }
    <p>
      Total: $
      {
        cartItems.length === 0 ?
          "0" :
          {/* reduce cartItems to get total */}
      }
    </p>
    {

    }
  </div>
)

export default ShoppingCart
