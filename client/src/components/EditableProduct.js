import Product from "./Product";
import Button from './Button';
import DeleteButton from "./DeleteButton";
import EditProductForm from "./EditProductForm";
const EditableProduct = ({ productInfo }) => (
  <div class="product">
    <div class="product-details">
      <Product {...productInfo} />
    </div>
    <div class="actions product-actions">
      <Button className="add-to-cart" name="Add To Cart" />
      <Button className="edit" name="Edit" />
    </div>
    <DeleteButton />
    <EditProductForm {...productInfo}/>
  </div>
)

export default EditableProduct;
