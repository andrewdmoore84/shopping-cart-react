import { useDispatch } from 'react-redux'
import { deleteProduct } from '../features/products/products'
import { addItemToCart } from '../features/cartItems/cartItems'

const ProductDetail = ({ product, onEditFormClick }) => {
  const dispatch = useDispatch()

  const handleEditFormClick = (event) => {
    event.preventDefault()
    onEditFormClick()
  }

  const handleAddToCart = async (event) => {
    event.preventDefault()
    dispatch(addItemToCart({ productId: product._id, ...product }))
  }

  const handleDeleteProduct = async (event) => {
    event.preventDefault()
    dispatch(deleteProduct(product._id))
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