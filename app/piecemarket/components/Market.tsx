import React, { FC } from "react";
import data from "./data";
import CarCard from "./PieceCard";
import PieceCard from "./PieceCard";
interface MarketProps {
  filterList: {
    categorie: string[];
    modele: string[];
    etat: string[];
    prix: number[];
  }
}
const Market: FC<MarketProps> = ({ filterList }: MarketProps) => {
  return (
    <div className="bg-[#F1F1F0] flex flex-wrap justify-center gap-[30px]  px-[20px] max-md:gap-[10px] py-[64px] max-md:py-[10px] min-h-screen ">
      {data.map((e, i) => {
        return (
          <PieceCard
            name={e.name}
            categorie={e.categorie}
            modele={e.modele}
            etat={e.etat}
            img={e.img}
 
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
