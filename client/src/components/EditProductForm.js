import Button from "./Button"
import {useState} from 'react'

const EditProductForm = ({ title, price, quantity, handleHideForm, handleUpdateProduct, id }) => {
  const [productTitle, setProductTitle] = useState(title)
  const [productPrice, setProductPrice] = useState(price)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const handleOnChange = (callback) => {
    return (e) => callback(e.target.value)
  }

  const handleUpdateClick = async () => {
    await handleUpdateProduct({title: productTitle, price: productPrice, quantity: productQuantity}, id);
    handleHideForm()
  };

  return (
    <div class="edit-form">
      <h3>Edit Product</h3>
      <form>
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
        <Button name="Update" handleClick={handleUpdateClick} className="" />
        <Button name="Cancel" handleClick={handleHideForm} className=""/>
      </div>
      </form>
    </div>
  )
}

export default EditProductForm;
