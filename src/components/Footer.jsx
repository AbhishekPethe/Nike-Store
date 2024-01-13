import React from 'react'
import {SiNike} from "react-icons/si"
const Footer = () => {
  return (
      <div className=' w-full bg-black mt-10'>
          <p className='text-lg text-gray-500 flex justify-center items-center gap-5 lg:gap-10 pt-20'>code @ABdev <SiNike className='text-2xl' /> design @JSstack </p>
          <div className='stroke-text-sm lg:stroke-text text-[6rem] lg:text-[18rem] text-center '>
              
        N I K E
          </div>
      </div>
  )
}

export default Footer