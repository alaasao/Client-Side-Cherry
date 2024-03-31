import React from 'react'
import Container from '../components/Container'
import Image from 'next/image'
import cover from '../../public/assets/offres/cover.png'
import OffreCard from './offresComponents/OffresCard'
import Data from "./offresComponents/Data"
import Cover from './Cover'
const page = () => {
  return (
<div className=' h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black'>
            <Container title={'decouvrez nos offres du moment chez '} subtitle={'Comparez plusieurs offres et trouvez facilement votre véhicule.Renseignez-vous sur les offres de toute notre gamme '} redtitle={'chery'}  />
            <div className='w-full h-[20%]'>
              <Cover src='/assets/offres/cover.png' />
             </div>
            <div className='flex items-center justify-center good text-sm sm:text-lg md:text-xl lg:text-4xl my-8'>
                      <p>DÉCOUVREZ NOS <span className='text-[#D12621]'>OFFRES VÉHICULES</span></p>
            </div>
    
    <div className='w-screen flex flex-col gap-20   h-[90%]'>
      {Data.map((offre,index)=>(
        <OffreCard  id={index} title={offre.title} image={offre.image} sousTitle={offre.sousTitle} description={offre.descrition} price={offre.price}  key={index}/>
      ))}   
    </div>
</div>  
  )
}

export default page