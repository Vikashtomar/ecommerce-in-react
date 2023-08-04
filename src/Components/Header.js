import React, { useContext } from 'react'
import { cartContext } from '../App'

function Header() {
  const {cart} = useContext(cartContext)
  return (
    <div>
      <h1>
        Shopping Cart {cart.length}
      </h1>
    
    </div>
  )
}

export default Header