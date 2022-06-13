import React, { useContext } from "react"
import { useEffect, useState } from "react"
import ProductService from "../service/ProductService";
import CartService from "../service/CartService"
import Header from "./Header"
import Products from "./Products"
import AddProductSection from "./AddProductSection"
import { fetchProducts, ProductContext } from "../context/products";
import { CartContext } from "../context/cart"

const App = () => {
  const { cart, setCart } = useContext(CartContext)
  const { products, dispatch: productDispatch } = useContext(ProductContext)

  // const addProduct = async (newProduct) => {
  //   const response = await ProductService.create(newProduct)

  //   const newProducts = products.concat(response)
  //   setProducts(newProducts)
  // }

  // const updateProduct = async (updatedProduct, id) => {
  //   const response = await ProductService.update(updatedProduct, id)

  //   const updatedProducts = products.map(product => {
  //     if (product._id === id) {
  //       return response
  //     } else {
  //       return product
  //     }
  //   })
  //   setProducts(updatedProducts)
  // }

  // const deleteProduct = async (id) => {
  //   await ProductService.deleteProduct(id)
  //   const updatedProducts = products.filter(product => product._id !== id)

  //   setProducts(updatedProducts)
  // }

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
    fetchProducts(productDispatch)
  }, [productDispatch]);

  return (
    <div id="app">
      <Header />

      <main>
        <Products items={products} />
        <AddProductSection />
      </main>

    </div>
  );
};

export default App
