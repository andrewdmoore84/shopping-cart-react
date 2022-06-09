import React from "react"
import { useEffect, useState } from "react"
import ProductService from "../service/ProductService";
import CartService from "../service/CartService"
import Header from "./Header"
import Products from "./Products"
import AddProductSection from "./AddProductSection"
import { useDispatch, useSelector } from "react-redux";
import { productsReceived } from "../actions/productsActions";

const App = () => {
  const dispatch = useDispatch()
  const [cart, setCart] = useState([]);
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

  const checkoutCart = async () => {
    await CartService.checkout()

    setCart([])
  }

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

      setCart(response);
    }

    getCart();
  }, []);

  return (
    <div id="app">
      <Header cartItems={cart} handleCheckout={checkoutCart} />

      <main>
        <Products items={products} />
        <AddProductSection />
      </main>

    </div>
  );
};

export default App
