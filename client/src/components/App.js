import React from 'react'

import { useState, useEffect } from 'react'

import Header from './Header'
import Products from './Products'
import AddProductForm from './AddProductForm'

import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productData = await axios.get('/api/products')
      setProducts(productData.data)
      const cartData = await axios.get('/api/cart')
      setCartItems(cartData.data)
    }
    getProducts()
  }, []);

  const handleAddProduct = async (newProduct, callback) => {
    try {
      const { data } = await axios.post('/api/products', {...newProduct})
      setProducts(products.concat(data))
      if (callback) {
        callback()
      }
    } catch(err) {
      console.error(err)
    }
  }

  const handleAddToCart = async (productInfo) => {
    try {
      console.log(productInfo)
      const { data } = await axios.post('/api/add-to-cart', productInfo)
      setCartItems(cartItems.concat(data.item))
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div id="app">
      <Header cartItems={cartItems} />
      <main>
        <Products products={products} onAddToCart={handleAddToCart} />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App