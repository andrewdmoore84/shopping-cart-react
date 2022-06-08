const Product = ({ quantity, title, price }) => (
  <>
    <h3>{title}</h3>
    <p class="price">${price}</p>
    <p class="quantity">{quantity} left in stock</p>
  </>
)

export default Product
