import React from 'react'

const Button = ({ className, handleClick, name }) => {
  return (
    <a className={`button ${className}`} onClick={handleClick}>{name}</a>
  )
}

export default Button;
