"use client"
import React from 'react'
import offfre from '../../../public/assets/offres/caroffre.png'
import car from '../../../public/assets/offres/car.jpg'
import Image from 'next/image'
import { Slide, Fade } from "react-awesome-reveal";
type Demoprop={
    title:string,
    image:string,
    sousTitle:string,
    description:string,
    price:number,
    id:number,
  }
const SmallCard = (props:Demoprop) => {
  return (
    <div
              key={props.id}
              className="text-white w-[90%] lg:hidden shadow-md rounded-lg overflow-hidden relative group h-[95%]"
            >
              <img
                src={props.image}
                alt=""
                className="w-full object-fill h-[350px] rounded-lg"
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <div className='flex flex-col gap-6 mb-10'>
                        <h1 className="text-xl sm:2xl font-bold">{props.title}</h1>
                        <h2 className='text-lg sm:xl font-semibold'>{props.sousTitle}</h2>
                    </div>    
                    <Fade cascade damping={0.05} className='text-wrap max-w-[80%]'>
                        <div className='flex flex-col gap-2 mb-2'>
                        <p className='text-wrap sm:text-xs  text-sm max-sm:hidden '> {props.description}</p>
                        <h3 className='text-lg sm:xl underline italic font-semibold text-red-500'>A partir de {props.price}$</h3>
                    </div></Fade>
                    <div>
                        <button  className='text-[#D12621] border rounded-[30px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  mt-4 h-4  animation ' >
                                    <span className='relative z-10'> En profiter</span>
                        </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
  )
}

export default SmallCard