import React from 'react';

import { useState, useEffect } from 'react';

import Header from './Header';
import Products from './Products';
import AddProductForm from './AddProductForm';

import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data);
    }
    getProducts()
  }, []);

  return (
    <div id="app">
      <Header />
      <main>
        <Products products={products} />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;