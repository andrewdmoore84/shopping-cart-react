import { useState } from 'react';
import Product from "./Product";
import Button from './Button';
import DeleteButton from "./DeleteButton";
import EditProductForm from "./EditProductForm";
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../features/products'
import { addItemToCart } from '../features/cart';

const EditableProduct = ({ productInfo, id }) => {
  const dispatch = useDispatch()
  const [ isEditing, setIsEditing ] = useState(false);
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleDeleteProduct = async () => {
    dispatch(deleteProduct(id))
  }

  const handleAddToCart = (idInfo) => {
    dispatch(addItemToCart(idInfo))
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
