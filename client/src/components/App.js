import React from "react"
import { useEffect, useState } from "react"
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

  // const addToCart = async (id) => {
  //   const response = await CartService.add(id)

  //   if (response.item) {
  //     const newProducts = products.map(product => {
  //       if (product._id === response.item.productId) {
  //         product.quantity--
  //         return product
  //       } else {
  //         return product
  //       }
  //      })
  //      setProducts(newProducts)
  //     if (cart.some(item => item.productId === id.productId)) {
  //       const newItems = cart.map(item => {
  //         if (item.productId === id.productId) {
  //           item.quantity++
  //           return item
  //         } else {
  //           return item
  //         }
  //       })
  //       setCart(newItems)

  //     } else {
  //       setCart(cart.concat(response.item))
  //     }
  //   }
  // }

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
