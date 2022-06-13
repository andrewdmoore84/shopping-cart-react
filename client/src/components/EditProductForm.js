import { useState } from 'react';
import { editProduct, ProductContext } from '../context/productsContext'
import {useContext } from "react";

const EditProductForm = ({ product, onEditFormClick }) => {
  const { dispatch } = useContext(ProductContext)
  const [title, setTitle] = useState(product.title)
  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

  const resetEditForm = () => {
    setTitle(product.title)
    setPrice(product.price)
    setQuantity(product.quantity)
  }

  const handleCancelEditForm = (event) => {
    event.preventDefault()
    onEditFormClick(resetEditForm)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    editProduct({ _id: product._id, title, price, quantity }, dispatch)
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text" id="product-name" value={title}
          />
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            onChange={(event) => setPrice(event.target.value)}
            type="text" id="product-price" value={price}
          />
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input onChange={(event) => setQuantity(event.target.value)}
            type="text" id="product-quantity" value={quantity}
          />
        </div>

        <div className="actions form-actions">
          <a href='/' onClick={handleSubmitForm} className="button">Update</a>
          <a href='/' onClick={handleCancelEditForm} className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm;