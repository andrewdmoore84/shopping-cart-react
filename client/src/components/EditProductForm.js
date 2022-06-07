import Button from "./Button"
import {useState} from 'react'

const EditProductForm = ({ title, price, quantity, handleHideForm, handleUpdateProduct }) => {
  const [productTitle, setProductTitle] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleOnChange = (callback) => {
    return (e) => callback(e.target.value)
  }

  const handleUpdateClick = async () => {
    // TBD: implement this function: need to invoke fn passed from App (handleUpdateProduct) and pass it current state of title/price/quantity

    // after returning, invoke handleHideForm
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
        <Button name="Update" handleClick={()=>{}} className=""/>
        <Button name="Cancel" handleClick={handleHideForm} className=""/>
      </div>
      </form>
    </div>
  )
}

export default EditProductForm;
