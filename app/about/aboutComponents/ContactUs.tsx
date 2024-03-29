"use client"
import { Combobox } from '@mantine/core';
import React from 'react'
import { useState } from 'react';
import DropDown from './DropDown';
import {Listbox} from '@headlessui/react'
import {FaChevronDown} from "react-icons/fa6"
const people = [
  { id: 0, name:'Séléctionnez le motif de votre demande*', unavailable:true,show:true}, 
  { id: 1, name: 'L entretien de ma voiture', unavailable: false ,show:false},
  { id: 2, name: 'Les offres promotionnelles', unavailable: false,show:false },
  { id: 3, name: 'Un contrat d entretien ou une extension de garantie', unavailable: false,show:false},
  { id: 4, name: 'Documentation à bord', unavailable: true ,show:false},
  { id: 5, name: 'Après-vente', unavailable: false,show:false},
]

const ContactUs = () => {

  
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  return (
    <div>
  <form >
    <div className='flex flex-col md:flex-row justify-between items-center w-full'>
              <div className="w-full md:w-[40%] flex flex-col my-4">
                <label
                  className=" text-[#0C0C0C] mb-2 "
                  htmlFor="name">
                  Nom complet*
                </label>
                <input
                  type="text"
                  minLength={3}
                  maxLength={100}
                  required
                  placeholder='entrer votre nom et prenom'
                  className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] focus:border-red-500 rounded-[10px] "
                  autoComplete="off"
                  id="name"
                />
              </div>
              <div className="w-full md:w-[40%] flex flex-col my-4">
                <label
                  className="text-[#0C0C0C] mb-2"
                  htmlFor="numero"
                >
                  Numero du telephone
                </label>
                <input
                  type="number"
                  minLength={3}
                  placeholder='entrer votre numero du telephone'
                  maxLength={150}
                  required
                  name='numero'
                  className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[10px] "
                  autoComplete="off"
                  id="numero" />
          </div>
    </div>

    <div className="w-full flex flex-col my-4 p-6">
      <label htmlFor='dropdown' className='mb-4'>Que Concern Vous</label>
        <div className='p-3 bg-gray-50 w-full border border-opacity-[25%] border-[#000000] rounded-[10px] '>
            <Listbox value={selectedPerson} name='dropdown' onChange={setSelectedPerson} >
              <Listbox.Button className={`w-full`}  >
                  <div  className={`flex flex-row justify-between items-center text-[#5E5959]`}>
                      <span className={selectedPerson.show ? 'text-[#5E5959]' : ' text-black'}> {selectedPerson.name}</span>  
                      <FaChevronDown/>
                  </div>
              </Listbox.Button>
                
              <Listbox.Options>
                  {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          value={person}
                          disabled={person.unavailable}
                          className={`w-full py-2 px-4 `}
                        >
                          <span className={person.show ? 'hidden ' : 'text-[#5E5959] hover:cursor-pointer'}>
                            {person.name}
                          </span>
                        </Listbox.Option>
                  ))}
                </Listbox.Options>
            </Listbox>
        </div>
    </div>
  
    <div className='w-full flex flex-col my-4 p-6'>
        <label
          className=" text-[#0C0C0C] mb-2"
          htmlFor="message"
        >
          Décrivez votre demande* :
        </label>
        <textarea
          rows={4}
          placeholder='Laissez votre message afin que nous puissions vous aider*'
          required
          minLength={10}
          maxLength={500}
          name="message"
          className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[10px] "
        />
      </div>
      <div className='w-full flex justify-center items-center'>
      <button type='submit' className=' text-[#D12621] border-2 border-[#858282] w-[200px]  rounded-[10px] font-good mt-12 h-4  animation' >
                             <span className="relative  z-10 text-nowrap  good text-sm ">Sumbmit</span>  
         </button></div>
    </form>

    </div>
  )
}
/* disabled={loading} */
export default ContactUs