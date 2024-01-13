import React from 'react'
import Navbar from './Navbar'
import heroimg from "../assets/hero.webp"

const Hero = () => {
  return (
    <div className=' h-[80vh] w-[100vw] flex flex-col items-center gap-20 lg:justify-between pt-32 lg:pt-20 relative'>
      <div className='bg-color-shape absolute -z-10 top-0 left-0 h-[90vh] w-full'></div>
      <h1 className='text-4xl lg:text-6xl text-center text-[#F3FDE8] font-extrabold leading-10 tracking-wider'>Play With Electric Nike <br />
        Adapt 2.0 Sneakers</h1>
      <div className='relative w-[200px] group'>
        <span className='absolute border-black  border-2 w-full h-[40px] ease-in duration-300 group-hover:scale-[1.5] group-hover:opacity-0 '></span>
        <a href="#topRated" className='absolute w-full text-center pt-[5px] border-2 h-[40px]  border-black font-semibold'>Explore Products</a>
      </div>
      <img src={heroimg} alt="" className='w-[80%] lg:w-[35%] ease-out duration-500 delay-75 -rotate-[30deg] hover:rotate-0' />

    </div>
  )
}

export default Hero