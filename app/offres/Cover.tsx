import React from 'react'

type Props={
       src: string, 
}
const Cover = (props :Props) => {
  return (
    <div>
         <img src={`${props.src}`} alt="tigoo" className='w-full h-[500px]' width={200} height={500}/>
    </div>
  )
}

export default Cover