import Product from "./Product"
import { useEffect, useContext } from "react";
import { ProductContext, getProducts } from "../context/productsContext";

const Products = () => {
  const { products, dispatch } = useContext(ProductContext)

  useEffect(() => {
    getProducts(dispatch)
  }, [dispatch]);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product
          key={product._id}
          product={product}
        />
      ))}
    </div>
  )
}

export default Products