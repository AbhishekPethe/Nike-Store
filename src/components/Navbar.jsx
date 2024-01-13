import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.webp";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../features/cart/cartSlice';


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false)
    const [initialPos, setInitialPos] = useState(window.scrollY)
    const dispatch = useDispatch();
    const {totalquantity} = useSelector((store)=> store.cart)
    

    const OnScroll = () => {
        let current = window.scrollY;
        if (current > initialPos) {
            setScrolled(true)
        }
        else {
            setScrolled(false) 
        }
        setInitialPos(current)
    }

    useEffect(() => {
        window.addEventListener("scroll", OnScroll)
        
        return () => window.removeEventListener("scroll" , OnScroll )
    })

    return (
        <div className={`fixed left-0 flex justify-between w-full pt-5 px-5 lg:px-10 z-50 transition-all delay-500 ${scrolled ? "-top-14" : "top-0"}  `}>
            <img src={Logo} alt="" className={`w-[100px] ${window.scrollY > 30 && "brightness-0" }`} />
            <div className='flex flex-row gap-6 text-4xl'>
               
                <AiOutlineHeart className='cursor-pointer'/>
                <div className='relative cursor-pointer' onClick={() => dispatch(openCart(true))} >
                    <AiOutlineShopping />
                    <p className='absolute -bottom-2 right-1 text-white text-xl font-bold'>{totalquantity}</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar