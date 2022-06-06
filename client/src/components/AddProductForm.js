import { useState } from 'react';

const AddProductForm = () => {
  const [visibility, setVisibility] = useState('');

  const handleAddButton = () => {
    setVisibility('visible');
  }

  const handleCancelButton = () => {
    setVisibility('');
  }

  return (
    <div class={`add-form ${visibility}`}>
      <p>
        <a onClick={handleAddButton} class="button add-product-button">
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div class="input-group">
          <label for="product-name">Product Name</label>
          <input type="text" id="product-name" value="" />
        </div>

        <div class="input-group">
          <label for="product-price">Price</label>
          <input type="text" id="product-price" value="" />
        </div>

        <div class="input-group">
          <label for="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value="" />
        </div>

        <div class="actions form-actions">
          <a class="button">Add</a>
          <a onClick={handleCancelButton} class="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;