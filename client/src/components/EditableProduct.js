import { useState } from 'react';

import Product from "./Product";
import Button from './Button';
import DeleteButton from "./DeleteButton";
import EditProductForm from "./EditProductForm";

const EditableProduct = ({ productInfo }) => {
  const [ isEditing, setIsEditing ] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div class="product">
      <div class="product-details">
        <Product {...productInfo} />
      </div>
      { isEditing ?
        <EditProductForm {...productInfo} handleHideForm={handleEditToggle} /> :
        (
          <div class="actions product-actions">
            <Button className="add-to-cart" name="Add To Cart" />
            <Button className="edit" name="Edit" handleClick={handleEditToggle}/>
          </div>
        )
      }
      <DeleteButton />
    </div>
  )
};

export default EditableProduct;
