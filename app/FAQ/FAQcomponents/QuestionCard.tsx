"use client"
import React from 'react'
import { useState } from 'react';
import {FaMinus , FaPlus} from "react-icons/fa";
import {motion , AnimatePresence}from"framer-motion"
type demoprops = {
  id:string,
  question:string,
  answer:string,
}
const QuestionCard = (props:demoprops) => {
  const [activequestion, setActiveQuestion] = useState<string | null>(null)

  return (
    <motion.div
    initial={{ y: 100 }}
    whileInView={{ y: 0 }}
    transition={{ duration: 1, type: "spring" }}
    viewport={{ once: true, amount: 0.1 }}
    key={props.id}
    className='flex  justify-start  items-center py-6 last:pb-8 bg-white text-black border-t-2 border-[#0C0C0C] border-opacity-[25%] last:border-y-2  last:border-[#0C0C0C] last:border-opacity-[25%] '>
            
            
            <div className='flex flex-col justify-between items-center w-full'>
              <button className='flex justify-between items-center  font-[500] w-full' onClick={()=>setActiveQuestion(activequestion? null :props.id )} >
                    <p className='text-start text-sm sm:text-lg max-w-[80%]'>
                            {props.question}
                    </p>
                    <div  className='text-start focus:outline-none   flex  flxe-col items-center justify-center '> 
                        {activequestion
                          ?(  <FaMinus onClick={()=>setActiveQuestion(activequestion? null :props.id )} />  )
                          :(  <FaPlus onClick={()=>setActiveQuestion(activequestion? null :props.id )} /> )
                        }
                    </div>
                </button>
                <AnimatePresence >
                              {activequestion && (
                                <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0 ,height:0}} className='mt-2 ml-4 '>
                                            <p>{props.answer}</p>
                                </motion.div>
                              )}
                </AnimatePresence>
            </div>     
    </motion.div>
  )
}

export default QuestionCard