import React, { Dispatch, SetStateAction, FC, useState, useEffect } from "react";
import data from "./data";
import CarCard from "./PieceCard";
import PieceCard from "./PieceCard";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
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
  const [realData, setData] = useState(data)
  useEffect(() => {
    axios.get("https://axeiny.tech:4004/pieces").then((res) => {

      setData(res.data)
    }
  )
  },[])
  return (
    <div className="bg-[#F1F1F0] relative flex  max-sm:flex-col max-sm:items-center  flex-wrap max-sm:justify-start sm:justify-center gap-[30px]  px-[20px]  max-md:gap-[10px] pb-[100px] ">
      {realData.map((e, i) => {
        return (
          <PieceCard
        
            dispo={e.Quantity > 0 ? true : false}
           
   
            Name={e.Name}
      
        
    
            img={e.Image[0].images[0]}
            searchKey={searchKey}
            Price={e.Price}
            key={e._id + i}
            id={e._id}
    
            filter={filterList}
          />
        );
      })}
    </div>
  );
};

export default Market;
export interface pieceProps {
  name: string;
  img: string;
  categorie: string;
  etat: string;
  modele: string[];
  Garentie: string;
  id: string;
  prix: number;
  dispo: boolean;
  reffer: string;
  mark: string;
}
