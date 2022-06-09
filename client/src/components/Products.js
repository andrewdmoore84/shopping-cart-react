import EditableProduct from './EditableProduct'
import React from 'react'

const Products = ({ items, handleUpdateProduct, handleDeleteProduct, handleAddToCart}) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul>
        {items.map(item =>
        <li key={item._id}>
          <EditableProduct productInfo={item} id={item._id} handleUpdateProduct={handleUpdateProduct} 
                           handleDeleteProduct={handleDeleteProduct} handleAddToCart={handleAddToCart}/>
        </li>
      )}
      </ul>
    </div>
    )
}

export default Products
