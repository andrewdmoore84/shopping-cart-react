import EditProductForm from './EditProductForm';
import ProductDetail from './ProductDetail';
import { useState } from 'react';

const Product = ({ product }) => {
  const [ showEditForm, setShowEditForm ] = useState(false)

  const toggleEditFormClick = () => {
    setShowEditForm(!showEditForm)
  }

  return (
    <>
      <ProductDetail product={product} onEditFormClick={toggleEditFormClick} />
      {showEditForm && <EditProductForm onEditFormClick={toggleEditFormClick} />}
    </>
  )
}

export default Product
