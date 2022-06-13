import { createContext, useState } from "react"
import { CartService } from '../service/CartService'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
