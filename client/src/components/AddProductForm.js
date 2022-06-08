import React from 'react'
import { useState } from 'react'

const AddProductForm = () => {
  const [productTitle, setProductTitle] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleOnChange = (callback) => {
    return (e) => callback(e.target.value)
  }

  // const handleUpdateClick = async () => {
  //   await handleUpdateProduct({ title: productTitle, price: productPrice, quantity: productQuantity }, id);
  //   handleHideForm()
  // };

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
          <a class="button">Add</a>
          <a class="button">Cancel</a>
        </div>
      </form>
  )
}

export default AddProductForm
