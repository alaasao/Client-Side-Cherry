import React from 'react'
type DemoProp={
  title:string,
  subtitle:string,
  redtitle:string,
}
const Container = (props:DemoProp) => {
  return (
    <div className='w-[100%]  flex items-start justify-center text-center bg-white text-black good '>
                <div className='w-[70%]  h-[60vh] mt-[10vh] shadow-3xl flex justify-center items-center flex-col gap-10  rounded-[10px]'>
                    <div className='font-light text-wrap text-sm sm:text-xl lg:2xl  good leading-[60px]'>
                     {props.title}<span className='text-[#D12621]' >{props.redtitle}</span>
                    </div>  
                    
                    <div  className='text-xs sm:text-lg sm:font-semibold md:text-xl font-bold text-[#686565] '>
                          {props.subtitle}
                    </div>
              </div>     
    </div>
  )
}

export default Container