import React from 'react'
import Questions from "../components/Questions"
const Page = () => {
  return (

    <div  className='h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px]'>
        <div className='w-[100%]  flex items-start justify-center text-center '>
              <div className='w-[90%]  h-[60vh] mt-[10vh] shadow-3xl flex justify-center items-center flex-col gap-10  rounded-[10px]'>
                    <div className='font-light text-wrap text-lg sm:text-2xl good leading-[60px]'>
                      BIENVENUE DANS LA 
                            <span className='text-[#D12621]' >
                              FAQ CHERY
                            </span>
                    </div>  
                    <div  className='text-sm sm:text-xl sm:font-semibold font-bold text-[#686565] '>
                      NOUS SOMMES LA POUR VOUS AIDER
                    </div>
              </div>     
        </div>  

        <div className='font-light text-wrap text-center text-xl sm:text-2xl lg:text-3xl leading-[60px] mt-10'>
                   QUESTIONS 
                   <span className='text-[#D12621]'>
                     GÉNÉRALES
                    </span>
        </div>

        <div className='mb-16' >
            <p className="  text-center mt-4 text-lg sm:text-2xl lg:3xl font-light">
                Vous trouverez ci-dessous les réponses aux questions les plus fréquentes
            </p>
        </div>
        <div className='w-[70%]'>
                  <Questions /> 
        </div>
    </div>     
  )
}

export default Page