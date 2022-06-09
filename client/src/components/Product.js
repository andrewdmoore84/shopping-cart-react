const Product = ({ quantity, title, price }) => (
  <>
    <h3>{title}</h3>
    <p className="price">${price}</p>
    <p className="quantity">{quantity} left in stock</p>
  </>
)

export default Product
