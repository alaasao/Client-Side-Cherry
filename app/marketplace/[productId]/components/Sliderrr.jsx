'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import daata from './daaata'

export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <section className=' h-full max-w-[100px] bg-black pb-12'>
      <div className='container'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-full w-full rounded-lg'
        >
          {daata.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full gap-[10px] items-center justify-center'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className=' h-[14vh] rounded-md w-[90%] object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {daata.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='block h-full mt-4 rounded-md w-[80%] object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}