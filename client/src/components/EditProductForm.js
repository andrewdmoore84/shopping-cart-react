import Button from "./Button"
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { updateProduct } from "../features/products"

const EditProductForm = ({ title, price, quantity, handleHideForm, handleUpdateProduct, id }) => {
  const dispatch = useDispatch()
  const [productTitle, setProductTitle] = useState(title)
  const [productPrice, setProductPrice] = useState(price)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const handleOnChange = (callback) => {
    return (e) => callback(e.target.value)
  }

  const handleUpdateClick = async () => {
    dispatch(updateProduct({ updatedProductInfo: {title: productTitle, price: productPrice, quantity: productQuantity}, id, }))
    handleHideForm()
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
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
        <Button name="Update" handleClick={handleUpdateClick} className="" />
        <Button name="Cancel" handleClick={handleHideForm} className=""/>
      </div>
      </form>
    </div>
  )
}

export default EditProductForm;
