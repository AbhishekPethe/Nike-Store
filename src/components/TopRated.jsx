import React from 'react'
import { toprateslaes } from '../data'
import { AiFillStar, AiOutlineShopping } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart, openCart } from '../features/cart/cartSlice'

const TopRated = () => {

    const dispatch = useDispatch(); 

  return (
    <div className='flex flex-col gap-5 mx-5 md:mx-10 mt-20' id="topRated">
        <h1 className='text-3xl lg:text-5xl font-bold text-black'>Top Rated Sales</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14 text-white '>
            {toprateslaes.items.map((each , i) => {
                return (
                    <div className={`flex flex-col gap-3 justify-between p-5 rounded-2xl items-center bg-gradient-to-r ease-in-out duration-300 hover:scale-105 ${each.color} ${each.shadow} `}>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl font-semibold'>{each.title}</h1>
                        <p>{each.text}</p>
                        <div className='flex flex-row gap-3'>
                            <p>{each.price}</p>
                            <p className='flex flex-row gap-1 items-center'><AiFillStar /> {each.rating}</p>
                        </div>
                        <div className='flex flex-row gap-4 items-center cursor-pointer'>
                                <AiOutlineShopping className='text-2xl' onClick={() => {
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
                    <img src={each.img} alt="" className='w-[60%] md:w-[40%] lg:w-[60%] ease-in duration-300 hover:-rotate-12 ' />
                </div>
                )    
            })}
        </div>  
    </div>
  )
}

export default TopRated