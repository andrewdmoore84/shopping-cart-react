import EditableProduct from './EditableProduct'
import React from 'react'

const Products = ({ items }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul>
        {items.map(item =>
        <li key={item._id}>
          <EditableProduct productInfo={item} id={item._id} />
        </li>
      )}
      </ul>
    </div>
    )
}

export default Products
