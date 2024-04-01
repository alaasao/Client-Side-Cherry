"use client";
import {
  LookObj,
  MoteurObj,
  SecurityObj,
  VehiculeObj,
} from "@/app/[productId]/components/Caracteristiques";
import Link from "next/link";
import { resolve } from "path";
import React, { FC, useState, useEffect } from "react";
import { GiGasPump } from "react-icons/gi";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
interface CarCardProps {
  Modele: string;
  Images: { Images: string[]; Color: string }[];

  Moteur: string;
  MoteurObj: MoteurObj;
  LookObj: LookObj;
  SecurityObj: SecurityObj;
  VehiculeObj: VehiculeObj;

  _id: string;
  Prix_TTC: number;
  searchKey: string;
  filter: {
    colors: string[];
    motors: string[];
    energie: string[];
    boite: string[];
    prix: number[];
  };
}
const CarCard: FC<CarCardProps> = ({
  Modele,
  Images,
  Moteur,

  MoteurObj,
  LookObj,
  VehiculeObj,
  SecurityObj,

  searchKey,
  _id,
  Prix_TTC,
  filter,
}: CarCardProps) => {
  let [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(
      (!filter.motors.some((e) => e === Moteur) &&
        filter.motors.length !== 0) ||
        (!filter.energie.some((e) => e === MoteurObj.Energie) &&
          filter.energie.length !== 0) ||
        (!filter.colors.some((e) => Images.some((ele) => ele.Color === e)) &&
          filter.colors.length !== 0) ||
        filter.prix[0] > Prix_TTC ||
        filter.prix[1] < Prix_TTC ||
        !Modele.toLowerCase().includes(searchKey) ||
        (!filter.boite.some((e) => e === MoteurObj.Boite) &&
          filter.boite.length !== 0)
    );
  }, [filter, searchKey]);
  return (
    <div
      className={`w-[333px] sm:max-lg:min-w-[250px] sm:lg:min-w-[330px] sm:max-md:min-w-[300px] sm:max-sm:w-[300px]  ${
        hide ? "hidden" : ""
      } `}
    >
      <div
        className={`sm:hidden w-[90vw] mx-auto flex flex-col py-[20px] px-[26px] h-[260px] bg-white rounded-lg ${
          hide ? "hidden" : ""
        } `}
      >
        {" "}
        <h1 className="font-bold text-xl  capitalize  ">{Modele}</h1>
        <div className="flex  mt-[25px] mb-[10px] 0 items-center justify-between h-[120px]">
          <img src={Images[0].Images[0]} alt="" className="w-1/2 h-full  " />
          <div className="flex flex-col gap-[20px] justify-center text-[#9A9A9A] ">
            <div className="flex gap-[4px]">
              <GiGasPump className=" text-xl  " />
              {VehiculeObj.Reservoir}L
            </div>
            <div className="flex  items-center gap-[7px]">
              {MoteurObj.Boite === "manuelle" ? (
                <TbManualGearbox />
              ) : (
                <TbAutomaticGearbox />
              )}
              <div className="capitalize ">{MoteurObj.Boite}</div>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between w-full">
          <div className="flex font-bold text-xl">
            {Prix_TTC.toLocaleString()}DZ
          </div>
          <Link
            href={`/${_id}`}
            className="text-white bg-[#DB2719] flex justify-center items-center w-[127px] max-lg:w-[100px] max-md:w-[127px] h-[50px] rounded-lg"
          >
            Voir plus
          </Link>
        </div>
      </div>
      <div
        className={` max-sm:hidden w-full h-[420px] bg-white flex flex-col rounded-xl  items-center ${
          hide ? "hidden" : ""
        }`}
      >
        {" "}
        <img
          src={Images[0].Images[0]}
          className="w-full h-[50%]  object-cover mb-[20px] rounded-t-lg "
          alt=""
        />
        <div className="w-full">
          <h1 className="font-bold text-xl w-full  pl-[10px] capitalize">
            {Modele}
          </h1>
          <div className="w-full flex gap-[71px] items-center justify-center text-[#858282] mb-[20px] font-medium p-[23px]">
            <div className="flex gap-[4px]">
              <GiGasPump className=" text-xl  " />
              {VehiculeObj.Reservoir}L
            </div>
            <div className="flex  items-center gap-[7px]">
              {MoteurObj.Boite === "manuelle" ? (
                <TbManualGearbox />
              ) : (
                <TbAutomaticGearbox />
              )}
              <div className="capitalize ">{MoteurObj.Boite}</div>
            </div>
          </div>
          <div className="flex gap-[50px] max-md:gap-[20px] items-center justify-center max-lg:gap-[50px] ">
            <div className="flex font-bold text-xl">
              {Prix_TTC.toLocaleString()}DZ
            </div>
            <Link
              href={""}
              className="text-white bg-[#DB2719] flex justify-center items-center w-[127px] max-lg:w-[100px] max-md:w-[127px] h-[50px] rounded-lg"
            >
              Voir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

{
  /* <div
className={` max-sm:hidden w-full h-[420px] bg-white flex flex-col rounded-xl  items-center ${
  hide ? "hidden" : ""
}`}
>
{" "}
<h1 className="font-bold text-xl w-full  pl-[10px] capitalize">
  {Modele}
</h1>
<div className="w-full">
  <img
    src={Images[0].Images[0]}
    className="w-full h-[50%]  object-cover mb-[20px] rounded-t-lg "
    alt=""
  />
  <div className="w-full flex gap-[71px] items-center justify-center text-[#858282] mb-[20px] font-medium p-[23px]">
    <div className="flex gap-[4px]">
      <GiGasPump className=" text-xl  " />
      {VehiculeObj.Reservoir}L
    </div>
    <div className="flex  items-center gap-[7px]">
      {MoteurObj.Boite === "manuelle" ? (
        <TbManualGearbox />
      ) : (
        <TbAutomaticGearbox />
      )}
      <div className="capitalize ">{MoteurObj.Boite}</div>
    </div>
  </div>
  <div className="flex gap-[50px] max-md:gap-[20px] items-center justify-center max-lg:gap-[50px] ">
    <div className="flex font-bold text-xl">
      {Prix_TTC.toLocaleString()}DZ
    </div>
    <Link
      href={""}
      className="text-white bg-[#DB2719] flex justify-center items-center w-[127px] max-lg:w-[100px] max-md:w-[127px] h-[50px] rounded-lg"
    >
      Voir plus
    </Link>
  </div>
</div>
</div> */
}
