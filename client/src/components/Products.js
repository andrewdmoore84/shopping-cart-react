import Product from '../components/Product'
import React from 'react'

const Products = ({ items }) => (
  <>
    <h1>Products</h1>
    <ul>
      {items.map(item => 
      <li key={item.id}>
        <Product {...item} />
      </li>
    )}
    </ul>
  </>
)

export default Products