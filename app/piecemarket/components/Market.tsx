import React, { Dispatch, SetStateAction, FC, useState } from "react";
import data from "./data";
import CarCard from "./PieceCard";
import PieceCard from "./PieceCard";
import { CiSearch } from "react-icons/ci";
interface MarketProps {
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
}: MarketProps) => {
  let [searchKey, setSearchKey] = useState("");
  return (
    <div className="bg-[#F1F1F0] relative flex flex-wrap justify-center gap-[30px]  px-[20px] max-md:gap-[10px] py-[100px] max-md:py-[80px] min-h-screen ">
      <div className="absolute flex w-[370px]  h-[38px] top-[30px] right-[46px]  md:shadow-lg rounded-lg max-md:h-[48px] max-md:w-[90%] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[15px] max-md:right-0 max-md:top- justify-center  ">
        <div className="">
          {" "}
          <div
            className="md:hidden  font-bold m-[5px]  cursor-pointer bg-white w-[48px] h-[48px] mt-[10px]  max-md:mt-[0px] max-md:py-[5px]   rounded-lg flex justify-center items-center "
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <img src="../assets/piece/filter.jpg" alt="" />
          </div>
        </div>
        <div className="relative w-full h-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search something here"
            className="h-full w-full pl-[8px] placeholder:text-[#827D7D] rounded-xl  focus:outline-none"
            onChange={(e) => {
              setSearchKey(e.target.value.toLowerCase());
            }}
          />
          <div className=" absolute right-[10px] top-1/2 -translate-y-1/2 ">
            <CiSearch className="  text-[#827D7D] text-2xl " />
          </div>
        </div>
      </div>
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
