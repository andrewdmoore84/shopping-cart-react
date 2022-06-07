/*
Your cart

items ? Your cart is empty : itemsTable

Total: $${sumPrices}

*/
const ShoppingCart = ({ cartItems }) => (
  <>
    <h3>Your cart</h3>

    {
      cartItems.length === 0 ?
        <p>Your cart is empty</p> :

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
  </>
)

export default ShoppingCart
