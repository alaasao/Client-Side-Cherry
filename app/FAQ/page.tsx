"use client"
import React from 'react'
import { useState } from 'react';
import {FaMinus , FaPlus} from "react-icons/fa";
import {motion , AnimatePresence}from"framer-motion"
const page = () => {

  const [activequestion , setActiveQuestion]= React.useState<number | null>(null)
  const questions=[
  {id:1,
    question:"Quels types de voitures proposez-vous ?",
    answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
  },
  {id:2,
    question:" Fournissez-vous des services d'entretien et de réparation ?",
    answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
  },
  {id:3,
    question:"Offrez-vous des options de financement ?",
    answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
  },
  {id:4,
    question:"Puis-je faire un essai routier avant d'acheter ?",
    answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
  },
  {id:5,
    question:"Offrez-vous une garantie sur les véhicules neufs ?",
    answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement.",
  },]


  return (

    <div  className='h-screen w-screen flex items-center gap-8 flex-col justify-center my-[700px]'>
        <div className='w-[100%] mt-20 flex items-start justify-center text-center '>
              <div className='w-[90%]  h-[60vh] mt-[10vh] shadow-3xl flex justify-center items-center flex-col gap-10  rounded-[10px]'>
                <div className='font-light text-wrap text-lg sm:text-2xl font-good leading-[60px]'>
                  BIENVENUE DANS LA <span className='text-[#D12621]' >FAQ CHERY</span>
                </div>  
                
                <div  className='text-sm sm:text-xl font-bold text-[#686565] '>NOUS SOMMES LA POUR VOUS AIDER</div>
              </div>     
        </div>  
              
              <div className='font-light text-wrap text-center text-xl sm:text-2xl lg:text-3xl leading-[60px] mt-10'>
                   QUESTIONS <span className='text-[#D12621]'> GÉNÉRALES</span>
              </div>
              <div className='mb-20' >
                    <p className="  text-center mt-4 text-lg sm:text-xl lg:3xl">
                    Vous trouverez ci-dessous les réponses aux questions les plus fréquentes
                    </p>
              </div>
              <div className='w-[80%]'>
                  <div  className='w-[80%] m-auto flex flex-col gap-4 justify-center '>
                      {questions.map((q) => 
                      (     
                        <div key={q.id} className='flex  justify-start  items-center   border-t-2 border-[#0C0C0C] border-opacity-[25%] last:border-y-2 last:border-[#0C0C0C] last:border-opacity-[25%]'>
                          <div className='flex flex-col justify-between items-center w-full'>
                            <div className='flex justify-between items-center text-sm sm:text-lg  w-full font-light'>
                                        {q.question}
                              <button className='text-start focus:outline-none  font-semibold flex  flxe-col items-center justify-center p-10 '> 
                                  {activequestion === q.id 
                                    ?(  <FaMinus onClick={()=>setActiveQuestion(activequestion === q.id ? null :q.id )} />  )
                                    :( <FaPlus onClick={()=>setActiveQuestion(activequestion === q.id ? null :q.id )} /> )
                                  }
                              </button>
                            </div>
                            <AnimatePresence>
                                          {activequestion === q.id && (
                                            <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0 ,height:0}} className='mt-2 ml-4'>
                                                        <p>{q.answer}</p>
                                            </motion.div>
                                          )}
                            </AnimatePresence>
                          </div>     
                        </div>
                      ))}
                  </div>
              </div>
              <div className='font-light text-wrap text-center text-sm sm:text-2xl lg:text-3xl leading-[60px] mt-12'>
              VOUS N'AVEZ PAS TROUVÉ LA RÉPONSE À  <span className='text-[#D12621]' >VOTRE QUESTION ?</span>
                </div>  
                
                <div  className='text-sm sm:text-xl font-semibold text-[#686565] '>N’hésitez pas à nous contacter</div>
               <div className='mt-6  '>
                  <button  className='text-[#D12621] border-2 border-[#858282] p-2 rounded-[10px] font-good mt-12 '>
                            CHARGER PLUS
                  </button>
                </div> 
    </div>     
  )
}

export default page