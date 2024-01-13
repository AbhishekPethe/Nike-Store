import React from 'react'
import { popularsales } from '../data'
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, openCart } from '../features/cart/cartSlice'

const Popular = () => {

    
    const dispatch = useDispatch()

    return (
        <div className='mt-24 lg:mt-44 flex flex-col gap-5 mx-5 md:mx-10'>
            <h1 className='text-3xl lg:text-5xl font-bold text-black'>Popular Sales</h1>

            <div className={`flex flex-col md:grid-cols-2 lg:flex-row gap-5 -mx-5 text-white`}>

                {
                    popularsales.items.map((each, i) => {
                        return (
                            <div className={`flex flex-row justify-between ease-in-out duration-300 p-5 rounded-2xl items-center bg-gradient-to-r  ${each.color} ${each.shadow} hover:scale-105  `}>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='text-2xl font-semibold'>{each.title}</h1>
                                    <p>{each.text}</p>
                                    <div className='flex flex-row gap-3'>
                                        <p>{each.price}</p>
                                        <p className='flex flex-row gap-2 items-center'><AiFillStar /> {each.rating}</p>
                                    </div>
                                    <div className='flex flex-row gap-3 items-center cursor-pointer'>
                                        <AiOutlineShopping className='text-2xl'
                                        onClick={() => {
                                            dispatch(addToCart(each))
                                        }}/>
                                        <button className='border-[1px] p-2 rounded-xl ease-in duration-300 hover:text-black hover:bg-white'
                                        onClick={() => {
                                        dispatch(openCart(true)),
                                        dispatch(addToCart(each))
                                        }}    
                                        >Buy Now</button>
                                    </div>
                                </div>
                                <img src={each.img} alt="" className='w-[60%] md:w-[40%] lg:w-[60%] ease-in duration-300 -rotate-45 hover:-rotate-12' />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Popular