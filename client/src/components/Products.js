import Product from "./Product"

const Products = ({ products, onAddToCart, onEditProduct, onDeleteProduct }) => (
  <div class="product-listing">
    <h2>Products</h2>
    {products.map(product => (
      <Product
        key={product._id}
        product={product}
        onAddToCart={onAddToCart}
        onEditProduct={onEditProduct}
        onDeleteProduct={onDeleteProduct}
      />
    ))}
  </div>
);

export default Products