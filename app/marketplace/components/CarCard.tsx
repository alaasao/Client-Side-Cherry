"use client";
import Link from "next/link";
import { resolve } from "path";
import React, { FC, useState, useEffect } from "react";
import { GiGasPump } from "react-icons/gi";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
interface CarCardProps {
  name: string;
  img: string;
  color: string[];
  motor: string;
  energie: string;
  reservoir: number;
  boite: string;
  id: string;
  prix: number;
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
  name,
  img,
  motor,
  reservoir,
  boite,
  energie,
  color,
  searchKey,
  id,
  prix,
  filter,
}: CarCardProps) => {
  let [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(
      (!filter.motors.some((e) => e === motor) && filter.motors.length !== 0)  ||
        (!filter.energie.some((e) => e === energie) &&
          filter.energie.length !== 0) ||
        (!filter.colors.some((e) => color.some((ele) => ele === e)) &&
          filter.colors.length !== 0) ||
        filter.prix[0] > prix ||
        filter.prix[1] < prix ||
        !name.toLowerCase().includes(searchKey)|| !filter.boite.some((e) => e === boite) && filter.boite.length !== 0
    );
  }, [filter, searchKey]);
  return (
    <div className={`sm:w-[23%]  sm:max-lg:min-w-[250px] sm:lg:min-w-[330px] sm:max-md:min-w-[300px] sm:max-sm:w-[300px] ${
      hide ? "hidden" : ""
    } `}>
      <div
        className={`sm:hidden w-[90vw] mx-auto flex flex-col py-[20px] px-[26px] h-[260px] bg-white rounded-lg ${
          hide ? "hidden" : ""
        } `}
      >
        <h1 className="font-bold text-xl  capitalize  ">{name}</h1>
        <div className="flex  mt-[25px] mb-[10px] 0 items-center justify-between h-[120px]">
          <img src={img} alt="" className="w-1/2 h-full " />
          <div className="flex flex-col gap-[20px] justify-center text-[#9A9A9A] ">
            <div className="flex gap-[4px]">
              <GiGasPump className=" text-xl  " />
              {reservoir}L
            </div>
            <div className="flex  items-center gap-[7px]">
              {boite === "manual" ? (
                <TbManualGearbox />
              ) : (
                <TbAutomaticGearbox />
              )}
              <div className="capitalize ">{boite}</div>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-between w-full">
          <div className="flex font-bold text-xl">
            {prix.toLocaleString()}DZ
          </div>
          <Link
            href={""}
            className="text-white bg-[#DB2719] flex justify-center items-center w-[127px] max-lg:w-[100px] max-md:w-[127px] h-[50px] rounded-lg"
          >
            Voir plus
          </Link>
        </div>
      </div>
      <div
        className={`max-sm:hidden w-full h-[420px] bg-white flex flex-col rounded-xl p-[23px] items-center ${
          hide ? "hidden" : ""
        }`}
      >
        <h1 className="font-bold text-xl w-full mb-[66px] capitalize">{name}</h1>
        <img src={img} className="w-[300px] h-[118px] mb-[50px]  " alt="" />
        <div className="w-full flex gap-[71px] items-center justify-center text-[#858282] mb-[40px] font-medium ">
          <div className="flex gap-[4px]">
            <GiGasPump className=" text-xl  " />
            {reservoir}L
          </div>
          <div className="flex  items-center gap-[7px]">
            {boite === "manual" ? <TbManualGearbox /> : <TbAutomaticGearbox />}
            <div className="capitalize ">{boite}</div>
          </div>
        </div>
        <div className="flex gap-[50px] max-md:gap-[20px] items-center max-lg:gap-[5px] ">
          <div className="flex font-bold text-xl">
            {prix.toLocaleString()}DZ
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
  );
};

export default CarCard;
