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
  filter: {
    colors: string[];
    motors: string[];
    energie: string[];
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

  id,
  prix,
  filter,
}: CarCardProps) => {
  let [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(
      (!filter.motors.some((e) => e === motor) && filter.motors.length !== 0) ||
        (!filter.energie.some((e) => e === energie) &&
          filter.energie.length !== 0) ||
        (!filter.colors.some((e) => color.some((ele) => ele === e)) &&
            filter.colors.length !== 0) || (
            filter.prix[0]>prix ||filter.prix[1]<prix
          )
    );
  }, [filter]);
  return (
    <div
      className={`w-[23%] min-w-[330px] max-md:min-w-[300px] max-sm:w-[300px] h-[420px] bg-white flex flex-col rounded-xl p-[23px] items-center ${
        hide ? "hidden" : ""
      }`}
    >
      <h1 className="font-bold text-xl w-full mb-[66px]">{name}</h1>
      <img src={img} className="w-full h-[118px] mb-[50px]  " alt="" />
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
      <div className="flex gap-[50px] max-md:gap-[20px] items-center ">
        <div className="flex font-bold text-xl">{prix.toLocaleString()}DZ</div>
        <Link
          href={""}
          className="text-white bg-[#DB2719] flex justify-center items-center w-[127px] h-[50px] rounded-lg"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
