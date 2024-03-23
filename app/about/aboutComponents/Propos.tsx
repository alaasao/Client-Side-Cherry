"use client"
import React from 'react'
import { useState } from 'react'
type Demoprops={
    title:string;
    description:string;
}

const Propos = (props:Demoprops) => {
  const [collapse, setcollapse] = useState(false)
  return (
    <div className='flex sm:ml-6 mt-6 flex-col justify-center'>
      <div className='good text-sm font-[400]  sm:text-2xl lg:text-4xl '>a propos de <span className='text-[#D12621]'>{props.title} :</span></div>
        <div className='flex sm:flex-row gap-4 mt-6 ml-6 '>
            <div className='w-[10px] h-auto bg-gradient-to-t from-[#D12621] to-[#6B1311] '>
            </div>
          <div className=' italic sm:max-w-[90%] w-full h-auto  text-sm  font-[500] sm:font-[500] sm:text-sm md:text-xl text-start sm:pr-2 sm:leading-[37px]'>
                                Sarl Automobile Leader Company ALC est le représentant officiel de la marque CHERY en Algérie.<br/>
                    Depuis 2020, ALC est entrée en service en Algérie dans le but d&apos;assurer la distribution et la commercialisation des véhicules CHERY ainsi que, leur Service après-vente.<br/>
                    <span className={`max-h-0 transition-all ease-in-out duration-1000 overflow-hidden inline-block md:max-h-[50rem] ${collapse ? "max-h-[50rem] transition-all   ease-in-out duration-1000" :"" }` }>
                    Une équipe de cadres hautement qualifiée qui s&apos;engage à fournir un produit représentatif et compétitif afin de satisfaire les clients et créer de l&apos;emploi et de la richesse pour le pays.<br/>
                    L&apos;objectif de l&apos;ALC est de proposer une large gamme de véhicules CHERY, couvrant les besoins essentiels du marché algérien avec un choix de gammes diverses, de segments, de motorisations et de finitions, sur pratiquement toutes les régions d&apos;Algérie.<br/>
                    ALC compte prendre en charge tous les cas de garantie des véhicules qui seront vendus par son réseau en Algérie.<br/>
                    Ses succursales et agents agréés ne seront pas seulement des points de vente, mais elles offriront et couvriront également, tous les services et besoins des clients de la marque CHERY.
            </span>
            <button className='md:hidden text-red-500' onClick={()=>{setcollapse(prev =>!prev)}}>{`read ${collapse ? "less" :"more"}`}</button>
          </div>
        </div>
    </div>
  )
}

export default Propos