import React from 'react'
import offfre from '../../../public/assets/offres/caroffre.png'
import car from '../../../public/assets/offres/car.jpg'
import Image from 'next/image'
type Demoprop={
  title:string,
  image:string,
  sousTitle:string,
  description:string,
  price:number,
  id:number,
}
const LargeCard = (props:Demoprop) => {
    const direction=props.id%2===0?'l':'r' 
  return (
    <div className="w-screen  max-md:h-[120px] relative max-lg:hidden ">
          <div className='relative'>
                  { direction == 'l' && <div className={`absolute left-0 top-0 bg-gradient-to-l from-white to-transparent via-transparent  h-full w-full`}></div> }
                  { direction =='r' && <div className={`absolute left-0 top-0 bg-gradient-to-r from-white to-transparent via-transparent h-full w-full`}></div> }
                    <div className=' w-screen object-cover '>
                    <img
                src={props.image}
                alt=""
                className="w-full h-[500px]"
              />
                    </div>
          </div>
          <div className="w-full h-full  absolute max-md:h-[120px]  top-0 left-0 grid grid-cols-[1fr_1fr] gap-[50px] justify-center items-center text-black ">
                 { props.id%2===0 &&  <div></div>}
            <div className='h-[60%] w-full flex flex-col items-center  justify-around '>
                    <div className='flex items-center flex-col gap-6'>
                            <p className='text-sm sm:text-lg md:text-xl lg:text-3xl good'>{props.title}</p>
                            <p className='text-sm sm:text-lg md:text-2xl lg:text-4xl  max-w-[70%] text-center'>  {props.sousTitle}</p>
                    </div>
                    <div className='flex items-center flex-col   gap-6  '>
                                <p className='text-[#D12621] opacity-100 underline text-sm sm:text-lg  lg:text-xl text-center'>A partir de {props.price}$ par apport</p>
                                <button  className='text-[#D12621] border rounded-[30px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  mt-4 h-4  animation ' >
                                    En profiter
                                </button>
                    </div>
                </div>
          </div>
              <p className='m-4 max-w-[80%] font-semibold'>
                {props.description}
        </p>
  </div>
  )
}

export default LargeCard