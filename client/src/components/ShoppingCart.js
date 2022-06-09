import CartTable from './CartTable'

const ShoppingCart = ({ cartItems, handleCheckout }) => {

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {
        cartItems.length === 0 ?
          (
            <>
              <p>Your cart is empty</p>
              <p>Total: $0</p>
            </>
          )
          :
          <CartTable cartItems={cartItems} handleCheckout={handleCheckout} />
      }
    </div>
  )
}

export default ShoppingCart
