import { useContext } from 'react'
import CartTable from './CartTable'
import { CartContext } from '../context/cart'


const ShoppingCart = ({ handleCheckout }) => {
  const { cart: cartItems, _ } = useContext(CartContext)

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
          <CartTable  handleCheckout={handleCheckout} />
      }
    </div>
  )
}

export default ShoppingCart
