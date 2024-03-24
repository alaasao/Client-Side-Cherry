import React, { FC } from "react";
import data from "./data";
import CarCard from "./CarCard";
interface MarketProps {
  filterList: {
    colors: string[];
    motors: string[];
    energie: string[];
    prix: number[];
  };
}
const Market: FC<MarketProps> = ({ filterList }: MarketProps) => {
  return (
    <div className="bg-[#F1F1F0] flex flex-wrap justify-center gap-[30px]  px-[20px] max-md:gap-[10px] py-[64px] min-h-screen ">
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
          />
        );
      })}
    </div>
  );
};

export default Market;
