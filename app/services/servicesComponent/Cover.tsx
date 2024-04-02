import React from 'react'

type Demoprop={
    src : string
}
const Cover = (props:Demoprop) => {
  return (
    <div className='w-full'>
              <img src={`${props.src}`} alt='presentation' className='w-full  h-[20%] flex items-center justify-center  object-cover ' >
              </img>    
              <div className='flex flex-col items-center w-full  md:w-[90%] h-full justify-center gap-8'>
                <div className='flex flex-row gap-4 w-[90%] text-xs md:text-sm md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10'>Votre Modele</p>
                    <p>TIGOO 8</p>
                </div>
                <div className='flex flex-row text-xs md:text-sm gap-4 text-nowrap  w-[90%] md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10 '>Numéro de série VIN :</p>
                    <p>0124587919</p>
                </div>
                <div className='flex flex-row text-xs md:text-sm gap-4 text-nowrap  w-[90%] md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10 '>Année de fabrication : </p>
                    <p >2022</p>
                </div>
                <div className='flex flex-row text-xs md:text-sm gap-4 text-nowrap  w-[90%] md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10 '>Date d achat :</p>
                    <p>12 janvier 2022</p>
                </div>
                <div className='flex flex-row text-xs md:text-sm gap-4 text-nowrap  w-[90%] md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10 '>Kilometrage : </p>
                    <p >15.000 km</p>
                </div>
                <div className='flex flex-row text-xs md:text-sm gap-10 text-nowrap  w-[90%] md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10 '>Le prix :</p>
                    <p>2.950.000 dz</p>
                </div>
                <div className='flex flex-row text-xs md:text-sm gap-10 text-nowrap  w-[90%] md:w-[70%] items-start justify-between text-white'>
                    <p className='underline w-[30%] pr-10 '>Garentie Restente : </p>
                    <p>3 ans / 60.000 km</p>
                </div>
          </div>
    </div>
  )
}

export default Cover