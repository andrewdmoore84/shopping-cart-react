import React from 'react'
import { useState } from 'react'
import Button from "./Button"
import AddProductForm from "./AddProductForm"

const AddProductSection = () => {
  const [ isFormVisible, setIsFormVisible ] = useState(false)

  const toggleFormClick = () => {
    setIsFormVisible(!isFormVisible)
  }

  return (
    <>
      {isFormVisible ?
        // <div class= "add-form visible" >
        <>
          <h3>Add Product</h3>
          <AddProductForm />
        </>
        // <div/>
        :
        <p>
          <Button className="add-product-button" handleClick={toggleFormClick} name="Add a Product" />
        </p>
      }
    </>
  )
}

export default AddProductSection
