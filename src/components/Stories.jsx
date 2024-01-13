import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import { story } from '../data';
import { EffectCreative } from 'swiper/modules';
import { PiHandSwipeRightLight } from "react-icons/pi"
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai';

const Stories = () => {
  return (
      <div className='flex flex-col gap-5 mx-5 md:mx-10 mt-20'>
          <div className='flex flex-row gap-5 items-center'>
            <h1 className='text-3xl lg:text-5xl font-bold text-black'>Top Stories</h1>
            <PiHandSwipeRightLight className='text-3xl'/>
          </div>

        {/* For Mobile  */}
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="w-full text-center max-sm:block hidden">
        
            {story.news.map((each , i) => {
                return (
                    <SwiperSlide>
                        <div className='w-full h-fit flex flex-col gap-3 justify-center items-center bg-gradient-to-b from-blue-500 to-cyan-500 text-white'>
                            <img src={each.img} alt="" className='' />
                            <div className='flex flex-row w-full items-center justify-around'>
                                <div className='flex gap-2 items-center'>
                                    <AiOutlineHeart />
                                    <p>{each.like}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <AiOutlineClockCircle />
                                    <p>{each.time}</p>
                                </div>
                                <p className='text-lg'>#{each.by}</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl'>{each.title}</h1>
                                <p>{each.text}</p>
                            </div>
                            <button className='bg-black p-3 w-full '>Read More</button>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper> 
        
          
          {/* For Desktop  */}
          <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                  clickable: true,
              }}
              modules={[Pagination]}
              className="w-full text-center hidden md:block pb-10"
          >
              {story.news.map((each , i) => {
                   return (
                    <SwiperSlide>
                        <div className='w-full h-fit flex flex-col gap-3 justify-center items-center bg-gradient-to-b from-blue-500 to-cyan-500 text-white'>
                            <img src={each.img} alt="" className='' />
                            <div className='flex flex-row w-full items-center justify-around'>
                                <div className='flex gap-2 items-center'>
                                    <AiOutlineHeart />
                                    <p>{each.like}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <AiOutlineClockCircle />
                                    <p>{each.time}</p>
                                </div>
                                <p className='text-lg'>#{each.by}</p>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-xl'>{each.title}</h1>
                                <p className=''>{each.text.substring(0,200)}</p>
                            </div>
                               <button className='bg-black p-3 w-full transition-all hover:text-black hover:bg-white hover:border-2 hover:border-black' onClick={() => {
                                   window.open(`${each.url}`)
                            }}>Read More</button>
                        </div>
                    </SwiperSlide>
                )
              })}
          </Swiper>
        

    </div>
  )
}

export default Stories