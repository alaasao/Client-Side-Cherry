"use client"
import React, { FC } from "react";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import ImagesDisplay from "./ImagesDisplay.jsx";
import Sliderrr from "./Sliderrr.jsx";
import { useState } from "react";

const Main: FC<MainProps> = ({
  _id,
  Modele,
  Garentie,
  Disponabilite,
  Prix_TTC,
  Images,
  Moteur,
  updatedAt,
}: MainProps) => {
  const [colorlist, setColorlist] = useState(Images.map(item=>item.Color))
  const [image, setImage] = useState(Images[0].Images.map(item=>item))
  const handleColorClick = (color:any) => {
    const jj = Images
      .filter((e) => e.Color.toLowerCase() === color)
      .flatMap((e) => e.Images);
    setImage(jj);
  };
  return (
    <div className=" w-full   md:grid  md:grid-cols-2  max-md:gap-[100px] gap-[44px] md:h-[30%]   md:mb-[30px]">
        <div className="max-md:w-full max-md:mb-[30px] ">
          <Sliderrr Images={image}/>
        </div>
      <div className="w-full flex flex-col gap-[70px] max-md:gap-[30px] capitalize ">
              <div className="w-full flex flex-col">
                  <h2 className="text-2xl mb-3">{Modele}</h2>
                  <h2 className="text-2xl text-red-500">{Prix_TTC} DZ</h2>
                  <p className="mt-6 mb-2 text-2xl">Couleur</p>
                    <div className="w-full flex flex-row h-[50px] gap-10 mt-2">
                        {colorlist.map((e, index) => (
                            <button
                              key={index}
                              onClick={() => handleColorClick(e.toLowerCase())}
                              className={`w-[50px] h-[70px] flex flex-col items-center justify-center`}
                            >
                              <div
                                className={`w-[50px] h-[60px] rounded-md ${
                                  e.toLowerCase() === 'rouge' ? 'bg-[#D33030] opacity-100 z-10' : e.toLowerCase() === 'blanc' ? 'bg-white' : e.toLowerCase() === 'noir' ? 'bg-black' : 'bg-[#B9B9B9]'
                                }`}
                              >
                                <p className="opacity-0">haha</p>
                              </div>
                              <p>{e}</p>
                            </button>
                          ))}
                    </div>
        </div>
        <div className="grid grid-cols-3 mt-6 gap-[50px] max-md:gap-[15px] w-full  ">
          <div className="flex flex-col max-md:items-center gap-[30px] max-md:gap-[10px]  font-medium ">
            <h1 className="text-2xl max-lg:text-[16px] text-[#959494]">
              Modéle
            </h1>
            <p className="capitalize  text-2xl max-lg:text-[16px]">
              {} {Modele}{" "}
            </p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[30px] max-md:gap-[10px]  font-medium">
            <h1 className="text-2xl max-lg:text-[16px] text-[#959494]">
              Garentie{" "}
            </h1>
            <p className="capitalize  text-2xl max-lg:text-[16px]">
              {Garentie}
            </p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[30px] max-md:gap-[10px]  font-medium">
            <h1 className="text-2xl max-lg:text-[16px] text-[#959494]">
              Disponabilité
            </h1>
            <div className="capitalize  text-2xl max-lg:text-[16px]">
              {Disponabilite ? (
                <div className="text-[#39A63D] flex items-center gap-[20px] max-lg:gap-[5px] ">
                  <div className="rounded-full flex w-[30px] h-[30px] max-lg:w-[25px] max-lg:h-[25px] justify-center items-center border-2 border-[#39A63D] ">
                    <MdDone className="text-[20px] max-lg:text-[15px]" />
                  </div>
                  <span className=" max-lg:text-[16px] ">Disponible</span>
                </div>
              ) : (
                <div className="text-[#DB2719] flex items-center gap-[20px] max-lg:gap-[5px]">
                  <div className="rounded-full flex w-[30px] h-[30px]  max-md:w-[15px] max-md:h-[15px] justify-center items-center border-2 border-[#DB2719] ">
                    <IoClose className="text-[20px] max-md:text-[10px]" />
                  </div>
                  <span className=" max-lg:text-[16px]">InDisponible</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[50px] max-md:gap-[15px]  w-full">
          <div className="flex flex-col max-md:items-center gap-[30px] max-md:gap-[10px]  font-medium">
            <h1 className="text-2xl max-lg:text-[16px] capitalize  text-[#959494]">
              Prix_TTC
            </h1>
            <p className="capitalize  text-2xl max-lg:text-[16px]">
              {Prix_TTC.toLocaleString()}DZ
            </p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[30px] max-md:gap-[10px]  font-medium">
            <h1 className="text-2xl max-lg:text-[16px] text-[#959494]">
              Moteur{" "}
            </h1>
            <p className="capitalize  text-2xl max-lg:text-[16px]">{Moteur}</p>
          </div>
          <div className="flex flex-col max-md:items-center gap-[30px] max-md:gap-[10px]  font-medium">
            <h1 className="text-2xl max-lg:text-[16px] text-[#959494] ">
              Mise à jour{" "}
            </h1>
            <p className="capitalize  text-2xl max-lg:text-[16px]">
              {updatedAt.slice(0, 10)}
            </p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Main;
interface MainProps {
  _id: string;
  Images: { Images: string[]; Color: string }[];
  Modele: string;
  Garentie: string;
  Disponabilite: string;
  Prix_TTC: number;
  Moteur: string;
  updatedAt: string;
}
