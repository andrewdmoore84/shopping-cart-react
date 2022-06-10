import React from "react"
import { useEffect } from "react"
import ProductService from "../service/ProductService";
import CartService from "../service/CartService"
import Header from "./Header"
import Products from "./Products"
import AddProductSection from "./AddProductSection"
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productsActions";
import { cartReceived } from "../actions/cartActions"

const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.products)

  useEffect(() => {
    const getProducts = async () => {
      const products = await ProductService.getAll();
      dispatch(productsReceived(products));
    }

    getProducts();
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
