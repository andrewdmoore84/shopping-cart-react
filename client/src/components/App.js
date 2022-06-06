import React from 'react';

import { useState, useEffect } from 'react';

import Header from './Header';
import Products from './Products';
import AddProductForm from './AddProductForm';

import productData from '../lib/data';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <>
      <Header />
      <Products products={products} />
      <AddProductForm />
    </>
  );
};

export default App;