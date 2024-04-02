import React from 'react'
import Data from '../eventComponents/data'
type DemoProp={
    params:any,
}
const page = (props:DemoProp) => {
  const foundObject = Data.find(obj => obj.id == props.params.eventid);
  return (
    <div className='h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black'>
          <p className='text-sm sm:text-lg  my-4 md:text-2xl lg:text-4xl mt-8 w-[80%] text-center good '>{foundObject?.title}</p> 
          
          <div className='w-[90%] flex flex-col items-center justify-center'>
                  <img alt='car' className=' w-[95%] rounded-md md:w-[80%]  object-cover' src={`${foundObject?.image}`} width={200} height={200}/>
                  <p className='w-[90%] md:w-[80%] md:max-w-[75%] text-xs md:text-sm md:font-[600]  text-[#5E5959] mt-2'>{`${foundObject?.littledescription}`}</p>
          </div>
          <div className='w-[85%] text-xs sm:text-sm md:text-xl  mt-4'>
              
             {/*  mba3ed nnhoha */} 
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