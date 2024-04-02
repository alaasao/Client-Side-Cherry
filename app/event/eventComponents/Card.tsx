"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
type DemoProp={
    image:String,
    littleDescription:String,
    date:String,
    id:number,
}
const Card = (props:DemoProp) => {
  return (
    <div className='flex flex-col md:flex-row  max-md:items-center max-md:justify-center gap-4 w-[80%] md:w-[80%] h-full border-b-2 border-black border-opacity-[25%] py-4 '>
        <div className='flex items-center justify-center w-full'>
            <img src={`${props.image}`} 
                className='w-full h-full rounded-[10px]  items-stretch sm:w-[70%] md:w-[80%] lg:w-full' 
                alt="haha" 
                width={500} 
                height={500}
                
            />
        </div>     
            
            <div className='flex flex-col  justify-around'>
                        <p className='w-full md:max-w-[80%] lg:max-w-[80%] text-xs sm:text-lg md:text-sm md:text-left lg:text-lg text-center'>{props.littleDescription}</p>

                        <div className='flex flex-col-reverse  gap-2 mt-4 sm:flex-row items-center  w-full md:items-end md:w-[80%]  sm:justify-between' > 
                             <Link href={`/event/${props.id}`}>
                                <button  className='text-[#D12621] border rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  mt-4 h-4  animation ' >
                                        <span className='relative z-10'> En profiter</span>
                                </button>
                            </Link>
                            <p className='text-[#00000080] w-full  text-center sm:w-[10%]  text-lg md:text-opacity-[50%]'>{props.date}</p>
                    </div>
             </div>
    </div>
  )
}

export default Card