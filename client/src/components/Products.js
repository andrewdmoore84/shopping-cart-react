import EditableProduct from './EditableProduct'
import React from 'react'

const Products = ({ items }) => (
  <div class="product-listing">
    <h2>Products</h2>
    <ul>
      {items.map(item =>
      <li key={item.id}>
        <EditableProduct productInfo={item} />
      </li>
    )}
    </ul>
  </div>
)

export default Products
