const ProductDetail = ({ product, onEditFormClick, onAddToCart }) => {

  const handleEditFormClick = (event) => {
    event.preventDefault()
    onEditFormClick()
  }

  const handleAddToCart = (event) => {
    event.preventDefault()
    onAddToCart({ productId: product._id, ...product })
  }

  return (
    <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">{product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        <div class="actions product-actions">
          <a href='/' onClick={handleAddToCart} class="button add-to-cart">Add to Cart</a>
          <a href='/' onClick={handleEditFormClick} class="button edit">Edit</a>
        </div>
        <a href='/' class="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default ProductDetail;