import React from 'react'
import Image from 'next/image'
import Cover from './servicesComponent/Cover'
import FirstSection from './servicesComponent/FirstSection'
import CarInformation  from './servicesComponent/CarInformation'
import LittleVidange from './servicesComponent/LittleVidange'
import BigVidange from './servicesComponent/BigVidange'
const page = () => {
  return (
    <div className='h-[95%] w-screen flex flex-col items-center justify-start'>
                <FirstSection />
                <CarInformation/>
                <LittleVidange />
                <BigVidange />
    </div>
  )
}

export default page