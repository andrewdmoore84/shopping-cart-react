import React from "react"
import { useEffect, useState } from "react"
import ProductService from "../service/ProductService";
import CartService from "../service/CartService"
import Header from "./Header"
import Products from "./Products"
import AddProductSection from "./AddProductSection"


const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addProduct = async (newProduct) => {
    const response = await ProductService.create(newProduct)
    console.log('response', response)

    const newProducts = products.concat(response)
    console.log('newProducts', newProducts)
    setProducts(newProducts)
  }

  const updateProduct = async (updatedProduct, id) => {
    const response = await ProductService.update(updatedProduct, id)

    const updatedProducts = products.map(product => {
      if (product._id === id) {
        return response
      } else {
        return product
      }
    })
    setProducts(updatedProducts)
  }

  const deleteProduct = async (id) => {
    const response = await ProductService.deleteProduct(id)
    const updatedProducts = products.filter(product => product._id !== id)

    setProducts(updatedProducts)
  }

  const checkoutCart = async () => {
    await CartService.checkout()

    setCart([])
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductService.getAll();
      setProducts(response);
    }

    getProducts();
  }, []);

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
        <Products items={products} handleUpdateProduct={updateProduct} handleDeleteProduct={deleteProduct}/>
        <AddProductSection handleAddProduct={addProduct} />
      </main>

    </div>
  );
};

export default App
