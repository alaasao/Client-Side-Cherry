'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs,Zoom } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/zoom'
import daata from './daaata'


export default function Page(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div className=' max-h-[200px]'>
      <div className=' max-h-[200px]'>
        <div className=''>
        <Swiper
          loop={true}
          autoHeight={true}
          spaceBetween={10}
          navigation={false}
          zoom={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation,Thumbs,Zoom]}
          className='max-h-[20px] h-[10%]  rounded-lg '
        >
          {props.Images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className=' h-full flex justify-center '>
                <img src={image} alt='fck my life' className='swiper-image  rounded-md object-cover w-full '/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
</div>
        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs  h-full w-[90%] rounded-md '
        >
          {props.Images.map((image, index) => (
            <SwiperSlide key={index} className='rounded-md mt-2'>
             <div>
                <img
                  src={image}
                  className={`h-full rounded-md w-full object-cover `}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
  )
}