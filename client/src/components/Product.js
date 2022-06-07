import EditProductForm from './EditProductForm'
import ProductDetail from './ProductDetail'
import { useState } from 'react'

const Product = ({ product, onAddToCart }) => {
  const [ showEditForm, setShowEditForm ] = useState(false)

  const toggleEditFormClick = () => {
    setShowEditForm(!showEditForm)
  }

  return (
    <>
      <ProductDetail product={product} onEditFormClick={toggleEditFormClick} onAddToCart={onAddToCart} />
      {showEditForm && <EditProductForm onEditFormClick={toggleEditFormClick} />}
    </>
  )
}

export default Product
