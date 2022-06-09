import { useState } from 'react';

import Product from "./Product";
import Button from './Button';
import DeleteButton from "./DeleteButton";
import EditProductForm from "./EditProductForm";
import { useDispatch } from 'react-redux'
import { productDeleted } from '../actions/productsActions';
import ProductService from '../service/ProductService';
const EditableProduct = ({ productInfo, id, handleAddToCart}) => {
  const dispatch = useDispatch()
  const [ isEditing, setIsEditing ] = useState(false);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteProduct = async () => {
    await ProductService.deleteProduct(id)
    dispatch(productDeleted(id))
  }
  
  return (
    <div className="product">
      <div className="product-details">
        <Product {...productInfo} />
      </div>
      { isEditing ?
        <EditProductForm {...productInfo} handleHideForm={handleEditToggle} id={id}/> :
        (
          <div className="actions product-actions">
            <Button isDisabled = {productInfo.quantity === 0} className={`add-to-cart ${productInfo.quantity === 0 ? "disabled" : ""}`} name="Add To Cart" handleClick={() => handleAddToCart({productId: id})}/>
            <Button className="edit" name="Edit" handleClick={handleEditToggle}/>
          </div>
        )
      }
      <DeleteButton handleClick={handleDeleteProduct} id={id}/>
    </div>
  )
};

export default EditableProduct;
