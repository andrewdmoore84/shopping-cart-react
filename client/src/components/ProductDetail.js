import { deleteProduct, ProductContext } from '../context/productsContext'
import { addToCart, CartItemContext } from '../context/cartItemsContext'
import {useContext } from "react";

const ProductDetail = ({ product,  onEditFormClick }) => {
  const { dispatch: productDispatch } = useContext(ProductContext)
  const { dispatch: cartItemDispatch } = useContext(CartItemContext)

  const handleEditFormClick = (event) => {
    event.preventDefault()
    onEditFormClick()
  }

  const handleAddToCart = (event) => {
    event.preventDefault()
    addToCart({ productId: product._id, ...product }, productDispatch, cartItemDispatch)
  }

  const handleDeleteProduct = (event) => {
    event.preventDefault()
    deleteProduct(product._id, productDispatch)
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <a href='/' onClick={handleAddToCart} className="button add-to-cart">Add to Cart</a>
          <a href='/' onClick={handleEditFormClick} className="button edit">Edit</a>
        </div>
        <a href='/' onClick={handleDeleteProduct} className="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default ProductDetail;