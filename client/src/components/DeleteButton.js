import React from 'react'
import { useContext } from 'react';
import { deleteProduct, ProductContext } from '../context/products';

const DeleteButton = ({id}) => {
  const { dispatch: productDispatch } = useContext(ProductContext)
  const handleClick = (id) => {
    deleteProduct(id, productDispatch)
  }
  return (
    <a className="delete-button" onClick={() => handleClick(id)}><span>X</span></a>
  )
}

export default DeleteButton;
