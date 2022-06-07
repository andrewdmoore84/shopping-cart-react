import Product from "./Product"

const Products = ({ products, onAddToCart }) => (
  <div class="product-listing">
    <h2>Products</h2>
    {products.map(product => (
      <Product key={product._id} product={product} onAddToCart={onAddToCart} />
    ))}
  </div>
);

export default Products