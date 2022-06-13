import { useContext, useEffect } from 'react'
import CartService from '../service/CartService'
import CartTable from './CartTable'
import { CartContext } from '../context/cart'


const ShoppingCart = () => {
  const { cart: cartItems, setCart } = useContext(CartContext)

  useEffect(() => {
    const getCart = async () => {
      const response = await CartService.getItems();

      setCart(response);
    }

    getCart();
  }, []);

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
          <CartTable />
      }
    </div>
  )
}

export default ShoppingCart
