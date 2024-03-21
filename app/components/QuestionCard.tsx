"use client"
import React from 'react'
import { useState } from 'react';
import {FaMinus , FaPlus} from "react-icons/fa";
import {motion , AnimatePresence}from"framer-motion"
type demoprops = {
  id:number,
  question:string,
  answer:string,
}
const QuestionCard = (props:demoprops) => {
    const [activequestion , setActiveQuestion]=useState<number|null>(null)
  return (
    <div key={props.id} className='flex  justify-start  items-center py-6 last:pb-8  border-t-2 border-[#0C0C0C] border-opacity-[25%] last:border-y-2  last:border-[#0C0C0C] last:border-opacity-[25%] '>
            <div className='flex flex-col justify-between items-center w-full'>
              <div className='flex justify-between items-center text-sm sm:text-lg  w-full font-light'>
                          {props.question}
                <button className='text-start focus:outline-none  font-semibold flex  flxe-col items-center justify-center '> 
                    {activequestion === props.id 
                      ?(  <FaMinus onClick={()=>setActiveQuestion(activequestion === props.id ? null :props.id )} />  )
                      :(  <FaPlus onClick={()=>setActiveQuestion(activequestion === props.id ? null :props.id )} /> )
                    }
                </button>
              </div>
              <AnimatePresence >
                            {activequestion === props.id && (
                              <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0 ,height:0}} className='mt-2 ml-4 '>
                                          <p>{props.answer}</p>
                              </motion.div>
                            )}
              </AnimatePresence>
            </div>     
    </div>
  )
}

export default QuestionCard