import React from 'react'

const CartProduct = ({data}) => {
  const {cartQuantity , color , img , price , title , text} = data
  return (
    <div className='flex flex-row justify-between'>
      <img src={img} alt="" />
      <div className='flex flex-col justify-between items-center'>
        <p>{title}</p>
        <p>{text}</p>
        
      </div>

    </div>
  )
}

export default CartProduct