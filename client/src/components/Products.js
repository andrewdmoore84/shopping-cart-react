import ProductDetail from './ProductDetail';

const Products = ({ products }) => (
  <div class="product-listing">
    <h2>Products</h2>
    {products.map(product => (
      <ProductDetail key={product.id} product={product} />
    ))}
  </div>
);

export default Products;