"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import QuestionCard from './QuestionCard';
import Data from '../FAQcomponents/Data'
const Questions = () => {
const [visible, setvisible] = useState(5)
    function showMore() {
        setvisible((prev)=>prev+4)
    }
return (
  <div className='bg-white text-black'>
    <div  className='flex flex-col justify-center items-center '>
        <div className='w-full '>
              <div  className='w-[100%] m-auto flex flex-col gap-4 justify-center'>
                  {Data.slice(0,visible).map((q) => 
                  (     
                      <QuestionCard key={q.id} id={q.id} question={q.question} answer={q.answer}/>
                  ))}
              </div> 
        </div>          
    </div>
    <div className='flex flex-col items-center justify-center mt-6'>
        <div className='font-light text-wrap text-center text-sm sm:text-2xl lg:text-3xl leading-[60px] mt-12 w-full'>
                VOUS N&apos;AVEZ PAS TROUVÉ LA RÉPONSE À  <span className='text-[#D12621]' >VOTRE QUESTION ?</span>    
        </div>
        <div  className='text-xs sm:text-lg font-semibold text-[#686565] mt-4 '>
            N&apos;hésitez pas à   
            <Link href="/about/contact"> 
                <span className='text-red-500'> nous contacter</span>
            </Link>    
        </div>
            <div className='mt-6  '>
                  <button  className='text-[#D12621] border rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  mt-4 h-4  animation'  onClick={showMore}>
                                          <span className='relative z-10'> Charger Plus</span>
                  </button>
            </div>
      </div> 
  </div>  
  )
}

export default Questions