import React from "react"

const CarInformation = () => {
  return (
    <div className="w-[90%] justify-center items-center   ">
        <h1 className="good text-3xl my-14">Mon vehicule</h1>
        
        <div className=" bg-gradient-to-r h-[500px] relative from-[#3E3D45] to-[#202020] shadow-[ 0px 2px 6px 0px rgba(0, 0, 0, 0.25)] ">
            <img  src="/assets/serv/back.png"/>
        <div className="w-full h-full absolute  top-0 left-0 grid  max-sm:grid-rows-[1fr_1fr]  gap-[50px] justify-center items-center text-black ">
          <div className="flex flex-row sm:order-2 items-center justify-around w-full h-full text-white  max-lg:ml-10">
                <div className="flex flex-col justify-start  gap-10 text-xs text-nowrap lg:text-sm underline">
                        <p>Votre Modele</p>
                        <p>Numéro de série VIN </p>
                        <p>Année de fabrication :</p>
                        <p>Date d achat :</p>
                        <p>Kilometrage : </p>
                        <p>Le prix :</p>
                        <p>Garentie Restente : </p>
                </div>
                <div className="flex flex-col justify-end  gap-10 text-xs text-nowrap lg:text-sm">
                        <p>Votre Modele</p>
                        <p>Numéro de série VIN </p>
                        <p>Année de fabrication :</p>
                        <p>Date d achat :</p>
                        <p>Kilometrage : </p>
                        <p>Le prix :</p>
                        <p>Garentie Restente : </p>
                </div>
          </div>
          <div className="flex h-full max-sm:h-[50%] justify-center max-sm:order-1 items-center rounded-l-[60px] bg-[#ECECEC]">
                <img src="/assets/serv/littlecar.png" className="w-[80%] sm:w-full  "/>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default CarInformation