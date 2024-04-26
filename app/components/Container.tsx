import React from 'react'
type DemoProp={
  title:string,
  subtitle:string,
  redtitle:string,
}
const Container = (props:DemoProp) => {
  return (
    <div className='w-full  flex items-start justify-center text-center bg-white text-black font-good '>
              <div className='sm:w-[80%] relative shadow-[14px_20px_50px_7px] shadow-[#00000040]  max-sm:w-[90%] max-sm:h-[50vh] h-[50vh] lg:h-[50vh] 2xl:h-[50vh] 2xl:w-[60%] lg:w-[80%] mt-10 shadow-3xl flex justify-center items-center flex-col gap-8 py-10 rounded-[10px]'>
                    <div className='font-light text-wrap text-lg sm:text-xl md:text-3xl lg:text-4xl  font-good leading-[60px]'>
                     {props.title}<span className='text-[#D12621]' >{props.redtitle}</span>
                    </div>  
                    <div  className='text-xs sm:text-sm  md:max-w-[70%] text-center  text-[#686565] '>
                          {props.subtitle}
                    </div>
              </div>     
    </div>
  )
}

export default Container