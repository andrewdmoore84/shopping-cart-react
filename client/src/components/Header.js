import React from "react"
import ShoppingCart from "./ShoppingCart"

const Header = ({ cartItems }) => (
  <>
    <header>
      <h1>The Shop!</h1>
      <ShoppingCart cartItems={cartItems} />
    </header>
  </>
)

export default Header
