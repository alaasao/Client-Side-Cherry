import React from 'react'
import Data from '../eventComponents/data'
import Container from '../eventComponents/container'
import Image from 'next/image'
type DemoProp={
    params:any,
}
const page = (props:DemoProp) => {
  const foundObject = Data.find(obj => obj.id == props.params.eventid);
  return (
    <div className='h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black'>
          <Container title={`${foundObject?.title}`} subtitle='' redtitle=''/>
          <div className='w-[90%] flex flex-col items-center justify-center'>
                  <Image alt='car' className='w-[80%] relative rounded-[10px]' src={`${foundObject?.image}`} width={200} height={200}></Image>
                  <p className='w-[80%] max-w-[75%] text-xs md:text-sm font-[600]  text-[#5E5959] mt-2'>{`${foundObject?.littledescription}`}</p>
          </div>
          <div className='w-[90%] text-xs sm:text-sm md:text-lg lg:text-xl max-w-[80%] mt-4'>
          {foundObject?.description.split('.').map((line, index) => (
          <React.Fragment key={index}>
            <div className='mb-3'>
              {line}
            </div>
          </React.Fragment>
      ))}
          </div>        
    </div>
  )
}

export default page;