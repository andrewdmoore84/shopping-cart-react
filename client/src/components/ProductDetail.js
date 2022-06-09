import axios from 'axios'
import { useDispatch } from 'react-redux'
import { productDeleted } from '../actions/productActions'
import { cartItemAdded } from '../actions/cartActions'

const ProductDetail = ({ product, onEditFormClick }) => {
  const dispatch = useDispatch()

  const handleEditFormClick = (event) => {
    event.preventDefault()
    onEditFormClick()
  }

  const handleAddToCart = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/add-to-cart', { productId: product._id, ...product })

      dispatch(cartItemAdded(data))
    } catch(err) {
      console.error(err)
    }
  }

  const handleDeleteProduct = async (event) => {
    event.preventDefault()
    try {
      await axios.delete(`/api/products/${product._id}`)
      dispatch(productDeleted(product._id))
    } catch(err) {
      console.error(err)
    }
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