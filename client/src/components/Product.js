import EditProductForm from './EditProductForm'
import ProductDetail from './ProductDetail'
import { useState } from 'react'

const Product = ({ product }) => {
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
        />
      {showEditForm &&
      <EditProductForm
        onEditFormClick={toggleEditFormClick}
        product={product}
      />}
    </>
  )
}

export default Product
