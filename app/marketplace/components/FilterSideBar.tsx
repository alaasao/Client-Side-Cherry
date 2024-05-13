"use client";
import { CgCloseR } from "react-icons/cg";
import React, { useState, Dispatch, SetStateAction, FC } from "react";
import { FaCheck, FaLeaf } from "react-icons/fa";
import { MdDone, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilterCar from "./FilterCar";
import { CiSearch } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
import Price from "./Price";
interface FilterList {
  colors: string[];
  motors: string[];
  energie: string[];
  boite: string[];
  prix: number[];
}
interface FilterSideBarProps {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  filterList: FilterList;
  setFilterList: Dispatch<SetStateAction<FilterList>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const filterCaracteristiques = [
  { colors: ["rouge", "bleu", "noir"] },
  {
    motors: ["1.2", "1.4", "1.6", "1.8", "2.0"],
  },
  { energie: ["DZL", "essence", "gas"] },
  { boite: ["manuelle", "automatique"] },
];
const FilterSideBar: FC<FilterSideBarProps> = ({
  filterList,
  setFilterList,
  isOpen,
  setIsOpen,
  searchKey,
  setSearchKey,
}: FilterSideBarProps) => {
  function toggle(array: Array<string>, word: string) {
    if (array.filter((e) => e === word)[0]) {
      return array.filter((e) => e !== word);
    } else {
      array.push(word);

      return array;
    }
  }

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setFilterList({ ...filterList, prix: newValue as number[] });
  };

  return (
    <div className="max-md:bg-[#F1F1F0] w-full relative ">
      <div
        className={` capitalize transition-all duration-700  max-md: max-md:z-[300]  max-md:overflow-hidden  w-full bg-[#F1F1F0] px-[5vw] pb-[20px] `}
      >
        <div className="w-full flex items-center justify-between ">
          <div
            className="my-[30px] font-bold  pl-[5px] cursor-pointer mr-[10px] w-[208px] max-md:text-[12px] max-md:w-[110px] bg-white h-[45px] rounded-xl flex items-center justify-between  text-[#827D7D]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex gap-[5px] items-center">
              <img
                src="../assets/marketplace/filter.png"
                alt=""
                className="max-md:w-[20px] max-sm:hidden"
              />{" "}
              Filter By
            </div>
            <div className=" text-xl cursor-pointer z-[10]">
              {" "}
              {isOpen ? (
                <MdKeyboardArrowUp className="" />
              ) : (
                <MdKeyboardArrowDown className="" />
              )}
            </div>
          </div>
          <div className="relative w-[430px] max-sm:w-[90%]  h-[45px]">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search something here"
              className="h-full w-full pl-[8px] text-[#827D7D] rounded-xl  outline-none bg-white"
              onChange={(e) => {
                setSearchKey(e.target.value.toLowerCase());
              }}
            />
            <div className=" absolute right-[10px] top-1/2 -translate-y-1/2 max-sm:right-0 ">
              <CiSearch className="  text-[#827D7D] text-2xl " />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                transition: { duration: 0.3 },
              }}
              exit={{ scale: 0 }}
              className={`grid grid-cols-[1fr_1fr_1fr_1fr] origin-top-left gap-x-[40px] max-sm:grid-cols-[1fr_1fr]  py-[20px] w-full max-md:gap-x-[20px] bg-white rounded-2xl md:shadow-sm px-[3vw]  `}
            >
              {filterCaracteristiques.map((element, index) => {
                let catName = Object.keys(element)[0];
                let carProps = element[catName as keyof typeof element];

                return (
                  <FilterCar
                    key={100 * index}
                    filterList={filterList}
                    setFilterList={setFilterList}
                    catName={catName}
                    catProps={carProps!}
                  />
                );
              })}
              <Price filterList={filterList} setFilterList={setFilterList} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FilterSideBar;
