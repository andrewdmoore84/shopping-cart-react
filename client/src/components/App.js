import React from "react"
import { useState } from "react"
import data from "../lib/data"

import Header from "./Header"
import Products from "./Products"

const App = () => {

  const [ cart, updateCart ] = useState([])

  return (
    <div id="app">
      <Header cartItems={cart}/>
      <Products items={data} />
    </div>
  );
};

export default App
