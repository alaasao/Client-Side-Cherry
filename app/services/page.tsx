import React from 'react'
import Image from 'next/image'
import Cover from './servicesComponent/Cover'
import FirstSection from './servicesComponent/FirstSection'
import CarInformation  from './servicesComponent/CarInformation'
const page = () => {
  return (
    <div className='h-[95%] w-screen flex flex-col items-center justify-start'>
                <FirstSection />
                <CarInformation/>
    </div>
  )
}

export default page