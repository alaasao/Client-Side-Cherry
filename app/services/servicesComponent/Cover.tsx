import React from 'react'

type Demoprop={
    src : string
}
const Cover = (props:Demoprop) => {
  return (
    <div className='w-full'>
              <img src={`${props.src}`} alt='presentation' className='w-full  h-[20%] flex items-center justify-center  object-cover ' >
              </img>    
    </div>
  )
}

export default Cover