"use client";
import React, { FC, useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
interface CardProps {
  Images: { Images: string[]; Color: string }[];
  _id: string;
  Prix_TTC: number;
  sticky: boolean;
}
const Card: FC<CardProps> = ({ Images, _id, Prix_TTC, sticky }: CardProps) => {
  return (
    <div
      className={`flex flex-col items-center h-[740px] shadow-2xl max-lg:hidden  ${
        sticky ? "stick " : ""
      }`}
    >
      <img
        src={Images[0].Images[0]}
        alt=""
        className=" h-[462px] w-full mb-[40px] h-[35%] "
      />
      <div className="font-bold text-xl   mb-[30px]">
        {" "}
        {Prix_TTC.toLocaleString()}DZ
      </div>
      <div className=" bg-[#D33030] text-white w-[76%] py-[10px] flex justify-center items-center text-3xl max-lg:text-[16px] max-2xl:text-xl rounded-lg mb-[28px]">
        Reserver en ligne
      </div>
      <div className="text-xl text-[#888888] py-[10px] mb-[28px] ">
        Contactez-nous
      </div>
      <div className="h-[2px] w-[76%] bg-[#888888] mb-[30px]  "></div>
      <div className="flex gap-[15px] text-3xl max-lg:text-xl text-[#686868] items-center mb-[30px]">
        <MdOutlinePhoneInTalk />
        <div> 0777 02 58 49</div>
      </div>
      <div className="flex gap-[15px] text-3xl max-lg:text-xl text-[#686868] items-center mb-[30px]">
        <CiLocationOn />
        <div>Algérie,Béjaia</div>
      </div>
    </div>
  );
};

export default Card;
