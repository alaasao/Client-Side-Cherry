import React, { Dispatch, SetStateAction, FC, useState } from "react";
import data from "./data";
import CarCard from "./CarCard";
import { CiSearch } from "react-icons/ci";
interface MarketProps {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filterList: {
    colors: string[];
    motors: string[];
    energie: string[];
    boite: string[];
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
    <div className="bg-[#F1F1F0] relative flex  max-sm:flex-col   flex-wrap sm:justify-center gap-[30px]  px-[20px]  max-md:gap-[10px] py-[100px] max-md:py-[80px] max-sm:py-[20px] min-h-screen ">
      {data.map((e, i) => {
        return (
          <CarCard
            Modele={e.Modele}
            Images={e.Images}
            Moteur={e.Moteur}
            Prix_TTC={e.Prix_TTC}
            key={e._id + i}
            _id={e._id}
            MoteurObj={e.MoteurObj}
            LookObj={e.LookObj}
            SecurityObj={e.SecurityObj}
            VehiculeObj={e.VehiculeObj}
            filter={filterList}
            searchKey={searchKey}
          />
        );
      })}
    </div>
  );
};

export default Market;
