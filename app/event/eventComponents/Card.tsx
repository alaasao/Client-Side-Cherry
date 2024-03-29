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
            <Image src={`${props.image}`} 
                className='w-full h-full rounded-[10px]  items-stretch sm:w-[70%] md:w-[80%] lg:w-full' 
                alt="haha" 
                width={500} 
                height={500}
                priority>
            </Image>
        </div>     
            
            <div className='flex flex-col  justify-between'>
                        <p className='w-full md:max-w-[80%] lg:max-w-[80%] text-xs sm:text-lg md:text-sm md:text-left text-center'>{props.littleDescription}</p>

                        <div className='flex flex-col-reverse gap-2 sm:flex-row items-center w-full justify-center sm:justify-between py-2' > 
                             <Link href={`/event/${props.id}`}>
                                <button  className='text-[#D12621] border-2 border-[#858282] rounded-[10px] good  animation' >
                                            <span className="relative  z-10 text-nowrap  good text-sm ">En Savoir Plus</span>  
                                </button>
                            </Link>
                                <p className='text-[#00000080] w-full sm:w-[30%] text-center text-lg md:text-opacity-[50%]'>{props.date}</p>
                    </div>
             </div>
    </div>
  )
}

export default Card