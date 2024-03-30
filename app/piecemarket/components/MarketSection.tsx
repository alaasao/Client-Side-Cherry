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
  let [isOpen, setIsOpen] = useState(false);
  let [filterList, setFilterList] = useState<FilterList>({
    categorie: [],
    modele: [],
    etat: [],

    prix: [0, 10000],
  });
  let [searchKey, setSearchKey] = useState("");
  return (
    <div className="w-screen flex flex-col  ">
      <FilterSideBar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        filterList={filterList}
        setFilterList={setFilterList}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div>
        <h1></h1>
        <Market
          filterList={filterList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
        />
      </div>
    </div>
  );
};

export default MarketSection;
