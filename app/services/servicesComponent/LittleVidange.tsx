"use client"
import React from 'react' 
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css"
import Dateshac from"./Dateshac"
const LittleVidange = () => {
  
  return (
    <div className='w-[85%] sm:w-[90%] justify-center items-center md:hidden'>
        <h1 className='good text-2xl sm:text-3xl my-14'>Vidange</h1>
        <p className='text-lg font-[500]'>Dans notre section dédiée aux services chez Chery Algerie , nous nous engageons à maintenir votre véhicule en parfait état de fonctionnement. Planifiez votre vidange en ligne dès maintenant.</p>
    

        <form>
            <div className='bg-[#ECECEC] my-6 py-4 flex flex-col items-center justify-center'>
            
            <h1 className='text-xl sm:text-2xl font-bold p-8'>Prenez rendez-vous</h1>
            
            <div className='flex flex-col  items-center justify-center w-[90%]'>
                    <div className="w-full md:w-[40%] flex flex-col my-4">
                            <label className=" text-[#0C0C0C] mb-2" htmlFor="name">
                                Nom 
                            </label>
                            <input
                                type="text"
                                minLength={3}
                                maxLength={100}
                                required
                                placeholder='entrer votre nom et prenom'
                                className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] focus:border-red-500 rounded-[5px] "
                                autoComplete="off"
                                id="name"
                            />
                    </div>
                    <div className='w-full md:w-[40%] flex flex-col my-4 '>
                            <label className=" text-[#0C0C0C] mb-2" htmlFor="name">
                                Date
                            </label>
                            <Dateshac/>
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
                            className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                            autoComplete="off"
                            id="numero" />
                    </div>
                    <div className="w-full md:w-[40%] flex flex-col my-4">
                            <label
                            className="text-[#0C0C0C] mb-2"
                            htmlFor="numero"
                            >
                            Le modele
                            </label>
                            <input
                            type="number"
                            minLength={3}
                            placeholder='Votre modele'
                            maxLength={150}
                            required
                            name='text'
                            className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                            autoComplete="off"
                            id="numero" />
                    </div>
                </div>
            <div className='flex items-center justify-center'>
                <button  className='text-[#D12621] border rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  mt-4 h-4  animation'  type='submit'>
                                            <span className='relative z-10'> Envoyer</span>
                </button>
            </div>
            </div>
            
        </form>
    </div>
  )
}

export default LittleVidange