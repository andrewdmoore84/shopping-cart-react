import { useState } from 'react';

import Product from "./Product";
import Button from './Button';
import DeleteButton from "./DeleteButton";
import EditProductForm from "./EditProductForm";

const EditableProduct = ({ productInfo, id, handleUpdateProduct, handleDeleteProduct}) => {
  const [ isEditing, setIsEditing ] = useState(false);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="product">
      <div className="product-details">
        <Product {...productInfo} />
      </div>
      { isEditing ?
        <EditProductForm {...productInfo} handleHideForm={handleEditToggle} id={id} handleUpdateProduct={handleUpdateProduct}/> :
        (
          <div className="actions product-actions">
            <Button className="add-to-cart" name="Add To Cart" />
            <Button className="edit" name="Edit" handleClick={handleEditToggle}/>
          </div>
        )
      }
      <DeleteButton handleClick={handleDeleteProduct} id={id}/>
    </div>
  )
};

export default EditableProduct;
