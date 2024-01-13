import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotals, clearCart, openCart, removeItem, toggleAmount } from '../features/cart/cartSlice'
import { BiArrowBack } from 'react-icons/bi'
import { BsCartXFill, BsTrash3 } from 'react-icons/bs'
import CartProduct from './cartProduct'
import { HiMinus, HiPlus } from "react-icons/hi"
import {RxCross2} from "react-icons/rx"
const Cart = () => {

    const { cartItems, totalamount, totalquantity, opencart } = useSelector((store) => store.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("d");
        dispatch(calculateTotals());
    })

    return (
        <div className={`pt-5 flex flex-col gap-5 fixed bg-white bg-opacity-95 top-0 w-full h-[100vh] z-50 lg:w-[35%] ease-linear duration-300 
        ${opencart ? "right-0" : "-right-[100%]"}`}>

            <div className='flex flex-row justify-between items-center mx-5'>
                <BiArrowBack className='font-bold text-2xl cursor-pointer' onClick={()=> dispatch(openCart(false))}/>
                <p className='text-xl font-semibold'>Your Cart</p>
                <button className='flex gap-2 items-center p-2 bg-red-500 text-white rounded-xl hover:scale-90 hover:shadow-xl transition-all'
                onClick={()=>dispatch(clearCart())}
                >Clear Cart <BsTrash3 /></button>
            </div>

            {/* empty cart  */}
            {
                totalquantity === 0 &&
                <div className='text-center flex flex-col gap-5 justify-center items-center mt-[50%] text-5xl'>
                    <p>Your Cart is EMPTY</p>
                    <BsCartXFill />
                </div>
            }

            {/* cart items  */}

            <div className='flex flex-col w-full h-[80vh] overflow-y-scroll gap-4 '>
                {cartItems.map((each, i) => {
                    const { cartQuantity, color, img, price, title, text } = each
                    return (
                        <div className='flex flex-row justify-between mx-5 border-2 border-black rounded-xl p-5 hover:scale-105 transition-all '>
                            <div className='w-[35%]'>

                            <img src={img} alt="" className='w-full h-full object-contain'/>
                            </div>
                            <div className='flex flex-col justify-between items-center gap-4'>
                                <div className='text-center'>
                                    <p className='text-base lg:text-xl font-bold'>{title}</p>
                                    <p className='text-xs lg:text-sm'>{text}</p>
                                </div>
                                <div className='flex flex-row gap-5 font-bold'>
                                    <button onClick={() => dispatch(toggleAmount([each, "increase"]))} className='transition-all'><HiPlus /></button>
                                    <p className='text-2xl'>{cartQuantity}</p>
                                    <button onClick={() => {
                                        if (each.cartQuantity === 1) {
                                            dispatch(removeItem(each.id))
                                            return
                                        }
                                        dispatch(toggleAmount([each, "decrease"]))
                                    }} ><HiMinus /></button>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between items-center'>
                                <p className='font-semibold flex flex-row'>${price*cartQuantity}</p>
                                <RxCross2 className='text-red-600 font-semibold text-xl cursor-pointer' onClick={() => {
                                    dispatch(removeItem(each.id))
                                }} />
                            </div>

                        </div>
                    )
                })}
            </div>

            {/* total and checkout */}
            <div className='flex flex-col gap-3 mx-5'>
                <div className='flex justify-between font-bold text-xl'>
                    <p>TOTAL :</p>
                    <p className='text-green-600'>$ {totalamount}</p>
                </div>
                <button className='bg-black text-white p-2 hover:scale-105 transition-all'>Checkout</button>
            </div>
        </div>
    )
}

export default Cart

/*    
    
<p>Total : {totalamount}</p>
            <button onClick={()=>dispatch(clearCart())} >Clear Cart</button>
        {cartItems.map((each) => {
            return (
                <div className='flex flex-col'>
                    <p>{each.title}</p>
                    <p>{each.color}</p>
                    <p>{each.price}</p>
                    <button onClick={()=>dispatch(removeItem(each.id))} >Remove Item</button>
                    <button onClick={() => dispatch(toggleAmount([each, "increase"]))}>+</button>
                    <p>
                    {each.cartQuantity}
                    </p>
                    <button onClick={() => {
                        if (each.cartQuantity === 1) {
                            dispatch(removeItem(each.id))
                            return
                        }
                        dispatch(toggleAmount([each, "decrease"]))
                    }
                    
                    }>-</button>
                    <hr />

                
                </div>
            )    
        })}        
*/ 