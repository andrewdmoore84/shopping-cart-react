import React from "react"
import { useEffect } from "react"
import Header from "./Header"
import Products from "./Products"
import AddProductSection from "./AddProductSection"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products";
import { fetchCart } from "../features/cart"

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div id="app">
      <Header cartItems={cart} />
      <main>
        <Products items={products} />
        <AddProductSection />
      </main>

    </div>
  );
};

export default App
