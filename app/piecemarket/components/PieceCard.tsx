"use client";
import Link from "next/link";
import { resolve } from "path";
import React, { FC, useState, useEffect } from "react";
import { GiGasPump } from "react-icons/gi";
import { MdDone } from "react-icons/md";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import { IoClose } from "react-icons/io5";


interface PieceCardProps {
    name: string;
    img: string;
    categorie: string;
    etat: string;
    modele: string[];
    searchKey: string;
    id: string;
    prix: number;
  dispo: boolean;
  Garentie: string;
    reffer: string;
  mark: string;
  doc: string;
  filter: {
    categorie: string[];
    modele: string[];

    etat: string[];
    prix: number[];
  };
}
const PieceCard: FC<PieceCardProps> = ({
  name,
  img,
  categorie,
  etat,
  modele,
  searchKey,
  dispo,
  reffer,
  mark,
  id,
  prix,
  filter,
}: PieceCardProps) => {
  let [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(
      (!filter.categorie.some((e) => e === categorie) &&
        filter.categorie.length !== 0) ||
        (!filter.etat.some((e) => e === etat) && filter.etat.length !== 0) ||
        (!filter.modele.some((e) => modele.some((ele) => ele === e)) &&
          filter.modele.length !== 0) ||
        filter.prix[0] > prix ||
        filter.prix[1] < prix ||
        !name.toLowerCase().includes(searchKey)
    );
  }, [filter, searchKey]);
  return (
    <div
      className={`sm:w-[23%]  sm:max-lg:min-w-[250px] sm:lg:min-w-[330px] sm:max-md:min-w-[300px] sm:max-sm:w-[300px] ${
        hide ? "hidden" : ""
      } `}
    >
      {" "}
      <div
        className={` sm:hidden bg-white w-full flex flex-col rounded-xl    ${
          hide ? "hidden" : ""
        }`}
      >
        <div className="w-full flex justify-between px-[15px] items-center py-[20px] capitalize">
          <h1 className="font-bold text-xl ">{name}</h1>
        </div>

        <div className="flex justify-between max-h-[122px]  w-full mb-[24px]">
          <div className="w-[50%]">
            <img src={img} alt=" " className="  h-full  max-sm:w-full" />
          </div>
          <div className="flex flex-col w-1/2 font-bold text-[#A5A5A5] items-center justify-center ">
            <div className="flex flex-col gap-[4px]">
              <div>{mark}</div>
              <div> Réf :{reffer}</div>
              {dispo ? (
                <div className="text-[#39A63D] flex items-center gap-[4px]">
                  <div className="rounded-full flex w-[20px] h-[20px] justify-center items-center border-2 border-[#39A63D]">
                    <MdDone className="text-[12px]" />
                  </div>
                  Disponible
                </div>
              ) : (
                <div className="text-[#DB2719] flex items-center gap-[4px]">
                  <div className="rounded-full flex w-[20px] h-[20px] justify-center items-center border-2 border-[#DB2719]">
                    <IoClose className="text-[12px]" />
                  </div>
                  InDisponible
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          {" "}
          <div className="flex justify-between items-center w-full px-[15px]  mb-[10px] ">
            <div className="font-bold"> {prix.toLocaleString()}.00DZ</div>
            <Link
              href={""}
              className="text-white bg-[#DB2719] flex justify-center items-center w-[180px]  h-[40px] rounded-full"
            >
              Voir plus
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`max-sm:hidden w-full bg-white flex flex-col rounded-xl  items-center ${
          hide ? " hidden" : ""
        }`}
      >
        <img
          src={img}
          className="w-full h-[217px] mb-[10px] rounded-t-xl  "
          alt=""
        />
        <div className="flex flex-col w-full px-[15px] gap-[6px]">
          <h1 className="font-bold text-xl w-full capitalize">{name}</h1>
          <div className="text-[#A5A5A5]">
            {" "}
            {mark} -Réf:{reffer}
          </div>
          <div>
            {" "}
            {dispo ? (
              <div className="text-[#39A63D] flex items-center gap-[4px]">
                <div className="rounded-full flex w-[20px] h-[20px] justify-center items-center border-2 border-[#39A63D]">
                  <MdDone className="text-[12px]" />
                </div>
                Disponible
              </div>
            ) : (
              <div className="text-[#DB2719] flex items-center gap-[4px]">
                <div className="rounded-full flex w-[20px] h-[20px] justify-center items-center border-2 border-[#DB2719]">
                  <IoClose className="text-[12px]" />
                </div>
                InDisponible
              </div>
            )}
          </div>
          <div className="flex gap-[50px] max-md:gap-[20px] items-center max-lg:gap-[5px] px-[6px] mb-[16px] ">
            <div className="flex font-bold text-xl w-full justify-between">
              {prix.toLocaleString()}DZ
            </div>
            <Link
              href={"/piecemarket/" + id}
              className="text-white bg-[#DB2719] flex justify-center items-center w-[250px]   h-[50px] rounded-lg"
            >
              Voir plus
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieceCard;
