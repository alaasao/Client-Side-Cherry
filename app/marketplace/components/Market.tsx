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
    <div className="bg-[#F1F1F0] relative flex  max-sm:flex-col max-sm:items-center  flex-wrap sm:justify-center gap-[30px]  px-[20px]  max-md:gap-[10px] py-[100px] max-md:py-[80px] max-sm:py-[20px] min-h-screen ">
      {data.map((e, i) => {
        return (
          <CarCard
            name={e.name}
            color={e.color}
            img={e.img}
            motor={e.motor}
            energie={e.energie}
            reservoir={e.reservoir}
            boite={e.boite}
            prix={e.prix}
            key={e.id + i}
            id={e.id}
            filter={filterList}
            searchKey={searchKey}
          />
        );
      })}
    </div>
  );
};

export default Market;
