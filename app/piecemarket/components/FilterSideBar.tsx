"use client";
import { CgCloseR } from "react-icons/cg";
import React, { useState, Dispatch, SetStateAction, FC } from "react";
import { FaCheck, FaLeaf } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FilterCar from "./FilterCar";

interface FilterList {
  categorie: string[];
  modele: string[];
  etat: string[];
  prix: number[];
}
interface FilterSideBarProps {
  filterList: FilterList;
  setFilterList: Dispatch<SetStateAction<FilterList>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const filterCaracteristiques = [
  {
    categorie: [
      "Pièces de Moteur",
      "Pieces de carosserie",
      "Pieces d’interieur",
    ],
  },
  {
    modele: ["Tiggo 8", "Arizo 5", "Tiggo 7", "Arrizo 6", "Tiggo 2 pro"],
  },
  { etat: ["neuve", "occasion", "reconditionnée"] },
];
const FilterSideBar: FC<FilterSideBarProps> = ({
  filterList,
  setFilterList,
  isOpen,
  setIsOpen,
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
    <div className="max-md:bg-[#F1F1F0]">
      <div
        className={`md:w-[300px] capitalize transition-all duration-700  max-md:absolute max-md:z-[10] max-md:top-0 max-md:h-auto max-md:min-h-screen  bg-white ${
          isOpen ? "w-full   left-0  " : " left-[-1000px]"
        } `}
      >
        <h1 className="my-[30px] font-bold  pl-[40px] ">Filter By</h1>
        <div className="flex flex-col gap-[40px]  pl-[40px] w-full max-md:gap-[20px] ">
          {filterCaracteristiques.map((element, index) => {
            let catName = Object.keys(element)[0];
            let carProps = element[catName as keyof typeof element];
            if (catName === "prix") {
              return null;
            }
            return (
              <FilterCar
                key={33 * index}
                filterList={filterList}
                setFilterList={setFilterList}
                catName={catName}
                catProps={carProps!}
              />
            );
          })}
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
        </div>
        <div className="mt-[40px] max-md:mt-[20px] ">
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
                max={1000}
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
            <div className=" mb-[100px] bg-[#FF4423] text-white cursor-pointer w-[100px] mt-[10px] max-md:mt-[5px] py-[10px] rounded-lg flex justify-center items-center md:hidden">
              Filter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
