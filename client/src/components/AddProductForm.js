import { useState } from 'react'
import { createProduct } from '../features/products/products'
import { useDispatch } from 'react-redux'

const AddProductForm = () => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const addFormClass = showAddProduct ? 'add-form visible' : 'add-form'
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const dispatch = useDispatch()

  const toggleAddFormButton = (event) => {
    event.preventDefault()
    setShowAddProduct(!showAddProduct)
  }

  const resetProductForm = () => {
    setTitle('')
    setPrice(0)
    setQuantity(0)
  }

  const handleAddProduct = async (event) => {
    event.preventDefault()
    dispatch(createProduct({
      newProductInput: { title, price, quantity },
      callback: resetProductForm,
    }
    ))
  }

  return (
    <div className={addFormClass}>
      <p>
        <a href='/' onClick={toggleAddFormButton} className="button add-product-button">
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            id="product-name"
            value={title}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            onChange={(event) => setPrice(event.target.value)}
            type="text"
            id="product-price"
            value={price}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            onChange={(event) => setQuantity(event.target.value)}
            type="text"
            id="product-quantity"
            value={quantity}
          />
        </div>

        <div className="actions form-actions">
          <a href='/api/products' onClick={handleAddProduct} className="button">Add</a>
          <a href='/' onClick={toggleAddFormButton} className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm