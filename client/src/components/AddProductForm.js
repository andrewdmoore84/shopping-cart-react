import { useState } from 'react'

const AddProductForm = ({ onAddProduct }) => {
  const [showAddProduct, setShowAddProduct] = useState(false)
  const addFormClass = showAddProduct ? 'add-form visible' : 'add-form'
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const toggleAddFormButton = (event) => {
    event.preventDefault()
    setShowAddProduct(!showAddProduct)
  }

  const resetProductForm = () => {
    setTitle('')
    setPrice(0)
    setQuantity(0)
  }

  const handleAddProduct = (event) => {
    event.preventDefault()
    onAddProduct({ title, price, quantity }, resetProductForm)
  }

  return (
    <div class={addFormClass}>
      <p>
        <a href='/' onClick={toggleAddFormButton} class="button add-product-button">
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            id="product-name"
            value={title}
          />
        </div>

        <div class="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            onChange={(event) => setPrice(event.target.value)}
            type="text"
            id="product-price"
            value={price}
          />
        </div>

        <div class="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            onChange={(event) => setQuantity(event.target.value)}
            type="text"
            id="product-quantity"
            value={quantity}
          />
        </div>

        <div class="actions form-actions">
          <a href='/api/products' onClick={handleAddProduct} class="button">Add</a>
          <a href='/' onClick={toggleAddFormButton} class="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm