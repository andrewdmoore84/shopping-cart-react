import React from "react"
import ShoppingCart from "./ShoppingCart"

const Header = ({ cartItems }) => (
  <>
    <header>
      <h1>The Shop!</h1>
    </header>

    {/* pass in state */}
    <ShoppingCart cartItems={cartItems}/>
  </>
)

export default Header
