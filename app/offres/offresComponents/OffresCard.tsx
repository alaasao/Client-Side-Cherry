"use client";
import React from "react";
import Link from "next/link";
import {
  LookObj,
  MoteurObj,
  SecurityObj,
  VehiculeObj,
  PromoObj,
} from "../../marketplace/[productId]/components/Caracteristiques";
import { FC, useState, useEffect } from "react";
import Image from "next/image";
interface CarCardProps {
  Modele: string;
  Images: { Images: string[]; Color: string }[];
  PromoObj: PromoObj;
  Moteur: string;
  MoteurObj: MoteurObj;
  LookObj: LookObj;
  SecurityObj: SecurityObj;
  VehiculeObj: VehiculeObj;

  _id: string;
  Prix_TTC: number;
}
const OffresCard: FC<CarCardProps> = ({
  Modele,
  Images,
  Moteur,
  PromoObj,
  MoteurObj,
  LookObj,
  VehiculeObj,
  SecurityObj,
  _id,
  Prix_TTC,
}: CarCardProps) => {
  const percantge = Math.round((PromoObj.Value / Prix_TTC) * 100);
  const promostart=PromoObj.Start.slice(0,10)
  const promoend=PromoObj.End.slice(0,10)
  return (
    <div className="flex max-h-[400px]  max-sm:w-[90%] w-[90%] lg:w-[95%] 2xl:w-full  flex-col lg:flex-row justify-start  items-center">
      {PromoObj.IsPromo && (
        <div className="flex justify-evenly w-full items-center mb-10 ">
          <div className=" grid max-sm:flex max-sm:flex-col  lg:grid-cols-[1.5fr_2fr]  grid-cols-[1.8fr_2fr] h-[20%]  items-center justify-between gap-4 w-[90%]  md:w-[90%] md:h-[20%] border-2 border-[grey]  hover:border-[#D12621]  rounded-[20px] ">
            <div className="flex justify-start  h-full w-full overflow-hidden ">
              <div className="relative h-full  top-0 left-0  ">
                <p className="absolute  flex w-[80px] sm:w-[100px] lg:w-[120px] 2xl:w-[250px] border-y border-black sm:h-[30px] lg:h-[50px] 2xl:h-[50px] sm:text-center text-start  items-center text-white text-[0.7rem] skew-y-[-40deg] h-[30px] bg-[#D12621] ">
                  <span className="p-4 sm:p-4 lg:p-5  2xl:p-10 lg:text-lg 2xl:text-2xl  sm:text-xs skew-y-[1deg] font-bold ">
                    -20%
                  </span>
                </p>  
              </div>
              <img
                src={Images[0].Images[0]}
                alt="haha"
                className="w-full h-full max-h-[400px]  rounded-l-[19px] object-cover items-center "
                width={500}
                height={500}
              />
            </div>

            <div className="flex flex-col max-w-[1500px] h-full  w-full  justify-evenly ">
              <div className="2xl:flex 2xl:flex-col  justify-normal 2xl:justify-between gap-10">
                <p className="text-2xl sm:text-4xl lg:text-2xl 2xl:text-3xl  bold py-2">
                  {Modele}
                </p>
                <p className="text-sm max-sm:hidden lg:text-lg 2xl:text-xl  text-[#888888]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ipsam praesentium tempora quas blanditiis repellat dolorem!
                  Tempore magnam labore iste repellat, saepe iure sit sapiente
                  neque placeat totam voluptas odit! Odio.
                </p>
              </div>
              <div className="w-full  sm:pt-2 ">
                <p className="justify-evenly flex sm:w-full font-bold">
                  <span className="text-red-500 text-lg sm:text-xl  md:text-xl lg:text-xl 2xl:text-2xl">
                    {PromoObj.Value}.00 DZD{" "}
                  </span>{" "}
                  <span className=" text-lg sm:text-xl md:text-xl lg:text-xl 2xl:text-2xl line-through">
                    {" "}
                    {Prix_TTC}.00 DZD
                  </span>{" "}
                </p>
              </div>
              <div className="flex py-2  w-[90%] items-center justify-end sm:justify-between   ">
                <div className="flex flex-col text-[0.2rem] sm:text-[0.3rem] md:text-sm max-sm:hidden 2xl:text-lg text-gray-500">
                  <p>A partir de : {promostart}</p>
                  <p>Jusqu&apos;a : {promoend}</p>
                </div>
                <Link
                  href={"/marketplace/" + _id}
                  className=" text-white  no-underline"
                >
                  <button
                  className="text-[#D12621] border rounded-[10px] relative  z-10 text-nowrap good text-xs   font-good  mt-2 h-2  animation"
                >
                  <span className="relative z-10">Voir Plus</span>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OffresCard;
