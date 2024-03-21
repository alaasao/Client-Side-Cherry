"use client"
import React from 'react'
import Link from 'next/link';
import { useState } from 'react';
import QuestionCard from './QuestionCard';
const Questions = () => {
const [visible, setvisible] = useState(5)
    function showMore() {
        setvisible((prev)=>prev+4)
    }
 const questions=[
    {id:1,
      question:"Quels types de voitures proposez-vous ?",
      answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
    },
    {id:122,
      question:"Quels types de voitures proposez-vous ?",
      answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
    },
    {id:112,
      question:"Quels types de voitures proposez-vous ?",
      answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
    },
    {id:12,
      question:" Fournissez-vous des services d'entretien et de réparation ?",
      answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement."
    },
    {id:13,
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
    },
    {id:6,
      question:"Offrez-vous une garantie sur les véhicules neufs ?",
      answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement.",
    },
    {id:7,
      question:"Offrez-vous une garantie sur les véhicules neufs ?",
      answer:"Oui, nous proposons des services d'entretien et de réparation pour tous les types de véhicules. Notre équipe qualifiée de techniciens est là pour vous aider à garder votre voiture en parfait état de fonctionnement.",
    },]
  
  return (
  <div>
    <div className='flex flex-col justify-center items-center '>
        <div className='w-full '>
            <div  className='w-[100%] m-auto flex flex-col gap-4 justify-center'>
                {questions.slice(0,visible).map((q) => 
                (     
                    <QuestionCard key={q.id} id={q.id} question={q.question} answer={q.answer}/>
                ))}
            </div> 
            </div>          
        </div>
        <div className='flex flex-col items-center justify-center mt-6'>
            <div className='font-light text-wrap text-center text-md sm:text-2xl lg:text-3xl leading-[60px] mt-12'>
                VOUS N'AVEZ PAS TROUVÉ LA RÉPONSE À  <span className='text-[#D12621]' >VOTRE QUESTION ?</span>
                
            </div>
            <div  className='text-sm sm:text-xl font-semibold text-[#686565] mt-4 '>N'hésitez pas à   <Link href="/about/contact"> <span className='text-red-500'>nous contacter</span></Link>    </div>
            <div className='mt-6  '>
                <button  className='text-[#D12621] border-2 border-[#858282] w-[200px] rounded-[10px] font-good mt-12 h-4  animation' onClick={showMore}>
                             <span className="relative  z-10 text-nowrap  good text-sm ">CHARGER PLUS</span>  
                </button>
                
              </div>
               
          </div> 
  </div>  
  )
}

export default Questions