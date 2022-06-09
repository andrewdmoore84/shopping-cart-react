import React from 'react'

const Button = ({ className, handleClick, name, isDisabled = false}) => {
  return (
    <a disabled= {isDisabled} className={`button ${className}`} onClick={handleClick}>{name}</a>
  )
}

export default Button;
