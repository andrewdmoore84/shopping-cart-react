import EditableProduct from './EditableProduct'
import React from 'react'

const Products = ({ items, handleUpdateProduct, handleDeleteProduct}) => {
  return (
    <div class="product-listing">
      <h2>Products</h2>
      <ul>
        {items.map(item =>
        <li key={item._id}>
          <EditableProduct productInfo={item} id={item._id} handleUpdateProduct={handleUpdateProduct} handleDeleteProduct={handleDeleteProduct}/>
        </li>
      )}
      </ul>
    </div>
    )
}

export default Products
