import React from 'react'

const DeleteButton = ({ handleClick, id}) => {
  return (
    <a className="delete-button" onClick={() => handleClick(id)}><span>X</span></a>
  )
}

export default DeleteButton;
