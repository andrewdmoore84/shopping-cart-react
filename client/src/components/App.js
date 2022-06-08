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
  }, [cartItems]);

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
      const { data } = await axios.post('/api/add-to-cart', productInfo)
      
      const cartItemsSansItem = cartItems.filter(cartItem => (
        cartItem.productId !== data.item.productId
      ))

      setCartItems(cartItemsSansItem.concat(data.item))
    } catch(err) {
      console.error(err)
    }
  }

  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`)
      setProducts(products.filter(product => (
        product._id !== productId
      )))
    } catch(err) {
      console.error(err)
    }
  }

  const handleEditProduct = async (newProduct) => {
    try {
      const { data } = await axios.put(`/api/products/${newProduct._id}`, newProduct)

      setProducts(products.map(product => (
        product._id === newProduct._id ? data : product
      )))
    } catch(err) {
      console.error(err)
    }
  }

  const handleCheckout = async () => {
    try {
      await axios.post('api/checkout')

      setCartItems([])
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckout={handleCheckout} />
      <main>
        <Products
          products={products}
          onAddToCart={handleAddToCart}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
        />
        <AddProductForm onAddProduct={handleAddProduct} />
      </main>
    </div>
  );
};

export default App