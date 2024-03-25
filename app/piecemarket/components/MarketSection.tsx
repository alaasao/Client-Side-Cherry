"use client";
import React, { useState } from "react";
import FilterSideBar from "./FilterSideBar";
import Market from "./Market";
interface FilterList {
  categorie: string[];
  modele: string[];
  etat: string[];
  prix: number[];
}
const MarketSection = () => {
  let [filterList, setFilterList] = useState<FilterList>({
    categorie: [],
    modele: [],
    etat: [],

    prix: [0, 10000],
  });

  return (
    <div className="w-screen grid md:grid-cols-[300px_1fr] ">
      <FilterSideBar filterList={filterList} setFilterList={setFilterList} />
      <div>
        <h1></h1>
        <Market filterList={filterList} />
      </div>
    </div>
  );
};

export default MarketSection;
