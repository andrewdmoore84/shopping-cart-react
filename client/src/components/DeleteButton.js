import React from 'react'

const DeleteButton = ({ handleClick, id}) => {
  return (
    <a class="delete-button" onClick={() => handleClick(id)}><span>X</span></a>
  )
}

export default DeleteButton;