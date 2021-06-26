import React from 'react'
import shoppingBag from '../../assets/shoppingBag.jpeg'
import './cart-icon.styles.scss'

const CartIcon = () => {
          return (
                    <div className='cart-container'>
                              <img src={shoppingBag} alt="cart-icon" />
                              <span className='cart-count'> 5 </span>
                    </div>
          )
}
export default CartIcon