"use client"
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa6"
const people = [
  { id: 0, name:'Séléctionnez le motif de votre demande*', unavailable:true,show:true}, 
  { id: 1, name: 'L’entretien de ma voiture', unavailable: false },
  { id: 2, name: 'Les offres promotionnelles', unavailable: false },
  { id: 3, name: 'Un contrat d’entretien ou une extension de garantie', unavailable: false },
  { id: 4, name: 'Documentation à bord', unavailable: true },
  { id: 5, name: 'Après-vente', unavailable: false },
]

export default function DropDown() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  return (
<div className='p-3 bg-gray-50 w-full border border-opacity-[25%] border-[#000000] rounded-[10px] '>
    <Listbox value={selectedPerson} name='dropdown' onChange={setSelectedPerson}>
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
  )
}