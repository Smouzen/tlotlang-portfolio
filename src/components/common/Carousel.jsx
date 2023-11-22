import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'


import {FreeMode, Pagination} from 'swiper/modules'
// import {RxArrowTopRight} from 'react-icons/rx'

import tel from "../../Assests/telcom.png";
import software from "../../Assests/Software.jpg";
import consult from "../../Assests/consult.png"
import network from "../../Assests/network.png"
const Carousel = () => {


    const slide = [

      {
        id:1,
        img:tel,
        
       
      },
      {
        id:2,
        img:software,
        
       
      },
      {
        id:3,
        img:consult,
        
       
      },
      {
        id:4,
        img:network,
        
       
      }
    ]
  return (
    <div className='flex items-center justify-center flex-col h-screen '>
      
      <Swiper breakpoints={

        {
          304: {
            slidesPerView:2,
            spaceBetween:15
          },
          700: {
            slidesPerView:2,
            spaceBetween:15

          }
        }
      }
      
      freeMode={true}
      pagination={{

        clickable:true
      }
      }
      modules={{FreeMode,Pagination}}
      className='max-w-[90%] lg:max-w-[80%] '>

        {
          slide.map(({id, img}) =>(
            <SwiperSlide key={img}>
              <div className='flex flex-col gap-6 group relative shadow-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[440px] lg:w-[440px] '>
              <div className='absolute inset-0  bg-center ' 
              style={{img:img}}>
                
              </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Carousel