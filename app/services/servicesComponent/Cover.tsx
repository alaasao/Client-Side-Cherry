import React from 'react'

type Demoprop={
    src : string
}
const Cover = (props:Demoprop) => {
  return (
    <div className='w-full '>
              <img src={`${props.src}`} alt='presentation' className='w-full  lg:h-[500px] 2xl:h-[1000px] flex items-center justify-center  object-cover ' >
              </img>    
    </div>
  )
}

export default Cover