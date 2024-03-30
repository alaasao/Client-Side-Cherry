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
  { colors: ["rouge", "gris", "noir"] },
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
              initial={{ height: 0, opacity: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.5 },
              }}
              exit={{ height: 0, opacity: 0 }}
              className={`grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-[40px] max-sm:grid-cols-[1fr_1fr]  py-[20px] w-full max-md:gap-[20px] bg-white rounded-2xl md:shadow-sm px-[3vw]  `}
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

              {/* <FilterCar
            filterList={filterList}
            setFilterList={setFilterList}
            catName={"colors"}
            catProps={filterCaracteristiques[0].colors!}
          />
          <div>
            <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
              Moteur{" "}
            </h2>
            <div className="flex flex-col gap-[10px] w-[300px]">
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "1.2"),
                  });
                }}
              >
                {filterList.motors.some((e) => e === "1.2") ? (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                  >
                    <MdDone className="text-white " />{" "}
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                  ></div>
                )}

                <p className="text-[#5E5959] font-semibold">1.2</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "1.4"),
                  });
                }}
              >
                {filterList.motors.some((e) => e === "1.4") ? (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                  >
                    <MdDone className="text-white " />{" "}
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                  ></div>
                )}

                <p className="text-[#5E5959] font-semibold">1.4</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "1.6"),
                  });
                }}
              >
                {filterList.motors.some((e) => e === "1.6") ? (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                  >
                    <MdDone className="text-white " />{" "}
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                  ></div>
                )}

                <p className="text-[#5E5959] font-semibold">1.6</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "1.8"),
                  });
                }}
              >
                {filterList.motors.some((e) => e === "1.8") ? (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                  >
                    <MdDone className="text-white " />{" "}
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                  ></div>
                )}

                <p className="text-[#5E5959] font-semibold">1.8</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "2.0"),
                  });
                }}
              >
                {filterList.motors.some((e) => e === "2.0") ? (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                  >
                    <MdDone className="text-white " />{" "}
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                  ></div>
                )}

                <p className="text-[#5E5959] font-semibold">2.0</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
              energie{" "}
            </h2>
            <div className="flex flex-col gap-[10px] w-[300px]">
              <div className="flex flex-col gap-[10px] ">
                <div
                  className="flex gap-[8px] cursor-pointer "
                  onClick={() => {
                    setFilterList({
                      ...filterList,
                      energie: toggle(filterList.energie, "DZL"),
                    });
                  }}
                >
                  {filterList.energie.some((e) => e === "DZL") ? (
                    <div
                      className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                    >
                      <MdDone className="text-white " />{" "}
                    </div>
                  ) : (
                    <div
                      className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                    ></div>
                  )}{" "}
                  <p className="text-[#5E5959] font-semibold">DZL</p>
                </div>
                <div
                  className="flex gap-[8px] cursor-pointer "
                  onClick={() => {
                    setFilterList({
                      ...filterList,
                      energie: toggle(filterList.energie, "gas"),
                    });
                  }}
                >
                  {filterList.energie.some((e) => e === "gas") ? (
                    <div
                      className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                    >
                      <MdDone className="text-white " />{" "}
                    </div>
                  ) : (
                    <div
                      className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                    ></div>
                  )}

                  <p className="text-[#5E5959] font-semibold">gas</p>
                </div>
                <div
                  className="flex gap-[8px] cursor-pointer "
                  onClick={() => {
                    setFilterList({
                      ...filterList,
                      energie: toggle(filterList.energie, "essence"),
                    });
                  }}
                >
                  {filterList.energie.some((e) => e === "essence") ? (
                    <div
                      className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
             
                 `}
                    >
                      <MdDone className="text-white " />{" "}
                    </div>
                  ) : (
                    <div
                      className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
          
              `}
                    ></div>
                  )}

                  <p className="text-[#5E5959] font-semibold">essence</p>
                </div>
              </div>
            </div>
          </div> */}
            </motion.div>
          )}
        </AnimatePresence>
        {/* <div className="mt-[40px] max-md:mt-[20px] ">
          <h2 className="mb-[10px] text-[#858282] font-semibold text-[15px] capitalize pl-[20px] max-md:mx-auto max-md:text-center">
            Prix{" "}
          </h2>
          <div className="w-full flex justify-center ">
            <Box sx={{ width: 250 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={filterList.prix}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0} // Adjust these values as needed
                max={10000000}
                sx={{
                  color: "primary.light",
                }}
              />
            </Box>
          </div>
          <div className="text-center font-bold">
            Le prix est entre <br />{" "}
            <span className="text-[#FF4423]">
              {" "}
              {filterList.prix[0].toLocaleString()} DZ
            </span>{" "}
            est{" "}
            <span className="text-[#FF4423]">
              {" "}
              {filterList.prix[1]
                .toLocaleString // Limit to two decimal places
                ()}{" "}
              DZ
            </span>
          </div>
          <div
            className="w-full flex justify-center"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <div className=" bg-[#FF4423] text-white cursor-pointer w-[100px] mt-[10px] max-md:mt-[5px] py-[10px] rounded-lg flex justify-center items-center md:hidden">
              Filter
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FilterSideBar;
