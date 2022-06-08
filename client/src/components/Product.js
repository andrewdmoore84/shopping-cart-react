import EditProductForm from './EditProductForm'
import ProductDetail from './ProductDetail'
import { useState } from 'react'

const Product = ({ product, onAddToCart, onEditProduct, onDeleteProduct }) => {
  const [ showEditForm, setShowEditForm ] = useState(false)

  const toggleEditFormClick = (callback) => {
    setShowEditForm(!showEditForm)

    if (callback) {
      callback()
    }
  }

  return (
    <>
      <ProductDetail
        product={product}
        onEditFormClick={toggleEditFormClick}
        onAddToCart={onAddToCart}
        onDeleteProduct={onDeleteProduct}
        />
      {showEditForm &&
      <EditProductForm
        onEditFormClick={toggleEditFormClick}
        onEditProduct={onEditProduct}
        product={product}
      />}
    </>
  )
}

export default Product
