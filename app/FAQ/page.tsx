import React from 'react'
import Container from '../components/Container'
import Questions from "./FAQcomponents/Questions"
const page = () => {
  return (
    <div  className='h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black'>
      <Container title={'BIENVENUE DANS LA '} subtitle={'NOUS SOMME LA POUR VOUS AIDER'} redtitle={'FAQ CHERY'} />     
        <p className='font-light text-wrap text-center text-xl sm:text-3xl lg:text-4xl leading-[60px] mt-10'>
                    QUESTIONS  <span className='text-[#D12621]'> GÉNÉRALES</span>
                    
        </p>
        <p className="  text-center mt-4 text-lg sm:text-2xl lg:3xl font-light m-4">
                  Vous trouverez ci-dessous les réponses aux questions les plus fréquentes
        </p>
        <div className='w-[70%] bg-white text-black'>
            <Questions /> 
        </div>
    </div>     
  )
}

export default page
