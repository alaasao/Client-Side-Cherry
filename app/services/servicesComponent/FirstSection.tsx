import React from 'react'
import Cover from './Cover'
const FirstSection = () => {
  return (
    <div className="w-screen  relative ">
        <Cover  src='/assets/serv/backk.png'/>
        <div className="w-full h-full absolute  top-0 left-0 grid sm:grid-cols-[1fr_1fr] gap-[50px] justify-center items-center text-black ">
          <div></div>
          <div className="flex justify-center items-center">
                <div className='w-[80%] md:w-[90%] h-[10vh] sm:h-[25vh] flex justify-center items-center  bg-[#F7F7F7CF] rounded-md '>
                            <p className='p-5  text-sm sm:text-lg lg:text-2xl'><span className='text-[#EC0101]'>CHERY </span> Votre partenaire de confiance pour l&apos;entretien automobile </p>
                </div>
          </div>
        </div>
      </div>
  )
}

export default FirstSection