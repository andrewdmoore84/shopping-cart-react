import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addProduct } from '../features/products'

const AddProductForm = ({ toggleIsFormVisible }) => {
  const dispatch = useDispatch()
  const [productTitle, setProductTitle] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleOnChange = (callback) => {
    return (e) => callback(e.target.value)
  }

  const handleAddClick = async () => {
    dispatch(addProduct({ title: productTitle, price: productPrice, quantity: productQuantity }))
    toggleIsFormVisible();
  };

  return (
    <form className="">
        <div className="input-group">
          <label for="product-name">Product Name</label>
        <input type="text" id="product-name" onChange={handleOnChange(setProductTitle)} value={productTitle} />
        </div>

      <div className="input-group">
          <label for="product-price">Price</label>
        <input type="text" id="product-price" onChange={handleOnChange(setProductPrice)} value={productPrice} />
        </div>

      <div className="input-group">
          <label for="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" onChange={handleOnChange(setProductQuantity)} value={productQuantity} />
        </div>

      <div className="actions form-actions">
          <Button className handleClick={handleAddClick} name="Add" />
          <Button className handleClick={toggleIsFormVisible} name="Cancel" />
        </div>
      </form>
  )
}

export default AddProductForm
