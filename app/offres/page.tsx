import React from 'react'
import Container from '../components/Container'
import OffreCard from './offresComponents/OffresCard'
import Data from "../marketplace/components/data"
import Nouveau from './offresComponents/Nouveau'
const page = ({ params }: { params: { productId: string } }) => {
  let car = Data
  return (
<div className=' h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black'>
    <Container title={'decouvrez nos offres du moment chez '} subtitle={'Comparez plusieurs offres et trouvez facilement votre véhicule.Renseignez-vous sur les offres de toute notre gamme '} redtitle={'chery'}  />
    <div className='w-screen flex flex-col lg:flex-row justify-evenly   mt-10   h-[90%]'>
     <div className='xl:w-[70%] w-full flex flex-col justify-start items-center  mt-10 gap-10'>
      {Data.map((offre,index)=>(
            <OffreCard  
              id={offre._id} 
              title={offre.Modele} 
              image={offre.Images}  
              isOffre={offre.PromoObj.IsPromo} 
              end={offre.PromoObj.End} 
              start={offre.PromoObj.Start} 
              price={offre.PromoObj.Value}  
              key={index}
              prixavant={offre.Prix_TTC}
              />
          ))}
      </div>
        <div className='items-center justify-center  xl:w-[30%] max-xl:hidden'>
          <Nouveau Images={car[0].Images} Modele={car[0].Modele} id={car[0]._id} price={car[0].Prix_TTC}/>  
        </div>
    </div>
</div>  
  )
}

export default page