import React from 'react'
import { useState } from 'react'
import Button from './Button'

const AddProductForm = ({ handleAddProduct, toggleIsFormVisible }) => {
  const [productTitle, setProductTitle] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleOnChange = (callback) => {
    return (e) => callback(e.target.value)
  }

  const handleAddClick = async () => {
    await handleAddProduct({ title: productTitle, price: productPrice, quantity: productQuantity });
    toggleIsFormVisible();
  };

  return (
    <form class="">
        <div class="input-group">
          <label for="product-name">Product Name</label>
        <input type="text" id="product-name" onChange={handleOnChange(setProductTitle)} value={productTitle} />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
        <input type="text" id="product-price" onChange={handleOnChange(setProductPrice)} value={productPrice} />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" onChange={handleOnChange(setProductQuantity)} value={productQuantity} />
        </div>

        <div class="actions form-actions">
          <Button className handleClick={handleAddClick} name="Add" />
          {/* <a class="button">Add</a> */}
          <Button className handleClick={toggleIsFormVisible} name="Cancel" />
          {/* <a class="button">Cancel</a> */}
        </div>
      </form>
  )
}

export default AddProductForm
