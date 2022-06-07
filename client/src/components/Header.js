import React from "react"
import ShoppingCart from "./ShoppingCart"

const Header = ({ cartItems }) => (
  <>
    <h1>
      SHOP
    </h1>

    {/* pass in state */}
    <ShoppingCart cartItems={cartItems}/>
  </>
)

export default Header
