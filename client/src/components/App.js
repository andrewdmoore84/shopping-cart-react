import React from "react"
import { useEffect } from "react"
import CartService from "../service/CartService"
import Header from "./Header"
import Products from "./Products"
import AddProductSection from "./AddProductSection"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products";
import { cartReceived } from "../actions/cartActions"

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
    console.log("app", products)
  }, [dispatch]);

  useEffect(() => {
    const getCart = async () => {
      const response = await CartService.getItems();

      dispatch(cartReceived(response));
    }

    getCart();
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
