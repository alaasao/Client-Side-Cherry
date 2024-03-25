"use client";
import Link from "next/link";
import { resolve } from "path";
import React, { FC, useState, useEffect } from "react";
import { GiGasPump } from "react-icons/gi";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
interface PieceCardProps {
  name: string;
  img: string;
  categorie: string;
  etat: string;
  modele: string[];

  id: number;
  prix: number;
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
        filter.prix[1] < prix
    );
  }, [filter]);
  return (
    <div
      className={`w-[23%] min-w-[330px] max-md:min-w-[300px] max-sm:w-[300px] h-[420px] bg-white flex flex-col rounded-xl  items-center ${
        hide ? "hidden" : ""
      }`}
    >
      <img src={img} alt=" " className="w-full h-[280px] rounded-t-xl" />
      <div className="w-full flex justify-between px-[15px] items-center py-[20px]">
        <h1 className="font-bold text-xl ">{name}</h1>
      </div>
      <div className="flex justify-between items-center w-full px-[15px]  ">
        <div className="font-bold"> {prix.toLocaleString()}.00DZ</div>
        <Link
          href={""}
          className="text-white bg-[#DB2719] flex justify-center items-center w-[180px] h-[40px] rounded-full"
        >
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default PieceCard;
