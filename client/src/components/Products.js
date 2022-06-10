import Product from "./Product"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchProducts } from '../features/products/products'

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(fetchProducts())

    // const getProducts = async () => {
    //   const productData = await axios.get('/api/products')
    //   dispatch(productsReceived(productData.data))
    // }
    // getProducts()
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