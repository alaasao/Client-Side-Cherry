import React from 'react'
import Container from '../components/Container'
import OffreCard from './offresComponents/OffresCard'
import Data from "./offresComponents/Data"
const page = () => {
  return (
<div className=' h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black'>
    <Container title={'decouvrez nos offres du moment chez '} subtitle={'Comparez plusieurs offres et trouvez facilement votre véhicule.Renseignez-vous sur les offres de toute notre gamme '} redtitle={'chery'}  />
    <div className='w-screen flex flex-col justify-center items-center  mt-10 gap-10   h-[90%]'>
      {Data.map((offre,index)=>(
          <OffreCard  
            id={offre._id} 
            title={offre.Modele} 
            image={offre.Images}  
            isOffre={offre.PromoObj.IsPromo} 
            end={offre.PromoObj.end} 
            start={offre.PromoObj.start} 
            price={offre.PromoObj.value}  
            key={index}
            prixavant={offre.Prix_TTC}
            />
        ))}   
    </div>
</div>  
  )
}

export default page