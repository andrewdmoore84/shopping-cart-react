import EditableProduct from './EditableProduct'
import React from 'react'

const Products = ({ items }) => (
  <>
    <h1>Products</h1>
    <ul>
      {items.map(item =>
      <li key={item.id}>
        <EditableProduct productInfo={item} />
      </li>
    )}
    </ul>
  </>
)

export default Products
