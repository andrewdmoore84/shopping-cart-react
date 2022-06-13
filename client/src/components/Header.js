import React from "react"
import ShoppingCart from "./ShoppingCart"

const Header = ({ handleCheckout }) => (
  <>
    <header>
      <h1>The Shop!</h1>
      <ShoppingCart handleCheckout={handleCheckout} />
    </header>
  </>
)

export default Header
