import React from "react"
import ShoppingCart from "./ShoppingCart"

const Header = ({ cartItems, handleCheckout }) => (
  <>
    <header>
      <h1>The Shop!</h1>
      <ShoppingCart cartItems={cartItems} handleCheckout={handleCheckout} />
    </header>
  </>
)

export default Header
