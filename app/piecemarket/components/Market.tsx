import React, { Dispatch, SetStateAction, FC, useState } from "react";
import data from "./data";
import CarCard from "./PieceCard";
import PieceCard from "./PieceCard";
import { CiSearch } from "react-icons/ci";
interface MarketProps {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filterList: {
    categorie: string[];
    modele: string[];
    etat: string[];
    prix: number[];
  };
}
const Market: FC<MarketProps> = ({
  filterList,
  isOpen,
  setIsOpen,
  searchKey,
  setSearchKey,
}: MarketProps) => {
  return (
    <div className="bg-[#F1F1F0] relative flex  max-sm:flex-col max-sm:items-center  flex-wrap max-sm:justify-start sm:justify-center gap-[30px]  px-[20px]  max-md:gap-[10px] py-[100px] max-md:py-[80px] max-sm:py-[20px] min-h-screen ">
      {data.map((e, i) => {
        return (
          <PieceCard
            dispo={e.dispo}
            reffer={e.reffer}
            mark={e.mark}
            name={e.name}
            categorie={e.categorie}
            modele={e.modele}
            etat={e.etat}
            img={e.img}
            searchKey={searchKey}
            prix={e.prix}
            key={e.id + i}
            id={e.id}
            filter={filterList}
          />
        );
      })}
    </div>
  );
};

export default Market;
