"use client";
import React, { useState } from "react";
import FilterSideBar from "./FilterSideBar";
import Market from "./Market";
interface FilterList {
  colors: string[];
  motors: string[];
  energie: string[];
  prix: number[];
}
const MarketSection = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [filterList, setFilterList] = useState<FilterList>({
    colors: [],
    motors: [],
    energie: [],

    prix: [0, 10000000],
  });

  return (
    <div className="w-screen grid md:grid-cols-[300px_1fr] ">
    <FilterSideBar filterList={filterList} setFilterList={setFilterList} isOpen={isOpen} setIsOpen={setIsOpen} />
    <div>
      <h1></h1>
      <Market filterList={filterList}  isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  </div>
  );
};

export default MarketSection;
