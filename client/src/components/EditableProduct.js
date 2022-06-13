import { useContext, useState } from 'react';

import Product from "./Product";
import Button from './Button';
import DeleteButton from "./DeleteButton";
import EditProductForm from "./EditProductForm";
import { CartContext } from "../context/cart"
import CartService from "../service/CartService"

const EditableProduct = ({ productInfo, id }) => {
  const [ isEditing, setIsEditing ] = useState(false);
  const { cart, setCart } = useContext(CartContext)

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleAddToCart = async (id) => {
    const getIncreasedItemQuantityCart = (cart, updatedItem) => {
      return cart.map(cartItem => {
        if (cartItem.productId === updatedItem.productId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        } else {
          return cartItem
        }
      })
    }

    const { item: addedItem } = await CartService.add(id)

    const isAlreadyInCart = cart.some(cartItem => cartItem.productId === addedItem.productId)

    if (isAlreadyInCart) {
      const updatedCart = getIncreasedItemQuantityCart(cart, addedItem)

      setCart(updatedCart)
    } else {
      setCart(cart.concat(addedItem))
    }
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
      <DeleteButton id={id}/>
    </div>
  )
};

export default EditableProduct;
