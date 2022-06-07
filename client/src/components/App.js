import React from "react"
import { useEffect, useState } from "react"
// import data from "../lib/data"
import axios from "axios";

import Header from "./Header"
import Products from "./Products"


const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }

    getProducts();
  }, []);

  return (
    <div id="app">
      <Header cartItems={cart}/>
      <main>
        <Products items={products} />
      </main>

    </div>
  );
};

export default App
