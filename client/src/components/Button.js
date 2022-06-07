import React from 'react'

const Button = ({ className, handleClick, name }) => {
  return (
    <a class={`button ${className}`}>{name}</a>
  )
}

export default Button;