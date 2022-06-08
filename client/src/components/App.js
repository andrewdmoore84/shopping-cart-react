import React from "react"
import { useEffect, useState } from "react"
import ProductService from "../service/ProductService";
import Header from "./Header"
import Products from "./Products"


const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(products)

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
    console.log(response)
    const updatedProducts = products.filter(product => product._id !== response._id)
    console.log("updatedProducts", updatedProducts)
    setProducts(updatedProducts)
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductService.getAll();
      setProducts(response);
    }

    getProducts();
  }, []);

  return (
    <div id="app">
      <Header cartItems={cart}/>
      <main>
        <Products items={products} handleUpdateProduct={updateProduct} handleDeleteProduct={deleteProduct}/>
      </main>

    </div>
  );
};

export default App
