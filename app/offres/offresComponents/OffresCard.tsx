import React from 'react'
import offfre from '../../../public/assets/offres/caroffre.png'
import car from '../../../public/assets/offres/car.jpg'
import Image from 'next/image'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'

type Demoprop={
  title:string,
  image:string,
  sousTitle:string,
  description:string,
  price:number,
  id:number,
}
const OffresCard = (props :Demoprop) => {
 
  return (
    <div className='flex flex-col justify-center items-center'>
      <LargeCard id={props.id} title={props.title} image={props.image} sousTitle={props.sousTitle} description={props.description} price={props.price}  key={props.id} />
      <SmallCard id={props.id} title={props.title} image={props.image} sousTitle={props.sousTitle} description={props.description} price={props.price}  key={props.id}/>
    </div>
  )
}

export default OffresCard