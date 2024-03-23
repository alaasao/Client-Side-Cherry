"use client";
import { CgCloseR } from "react-icons/cg";
import React, { useState } from "react";
import { FaCheck, FaLeaf } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

interface FilterList {
  colors: string[];
  motors: string[];
  energie: string[];
  prix: number[]; // Allows string, number, or null for prix
}
function valuetext(value: number) {
  return `${value}°C`;
}

const FilterSideBar = () => {
  function toggle(array: Array<string>, word: string) {
    if (array.filter((e) => e === word)[0]) {
      return array.filter((e) => e !== word);
    } else {
      array.push(word);

      return array;
    }
  }

  let [filterList, setFilterList] = useState<FilterList>({
    colors: [],
    motors: [],
    energie: [],

    prix: [0, 10000000],
  });

  const handleChange = (event: Event, newValue: number | number[]) => {
    setFilterList({ ...filterList, prix: newValue as number[] });
  };
  return (
    <div className={`w-[300px] capitalize h-full`}>
      <h1 className="my-[30px] font-bold  pl-[40px] ">Filter By</h1>
      <div className="flex flex-col gap-[40px]  pl-[40px]">
        <div>
          <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
            couleur{" "}
          </h2>
          <div className="flex flex-col gap-[10px] w-[300px]">
            <div className="flex flex-col gap-[10px] ">
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    colors: toggle(filterList.colors, "Noir"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.colors.some((e) => e === "Noir")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.colors.some((e) => e === "Noir") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">Noir</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    colors: toggle(filterList.colors, "Gris"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.colors.some((e) => e === "Gris")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.colors.some((e) => e === "Gris") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">Gris</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    colors: toggle(filterList.colors, "rouge"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.colors.some((e) => e === "rouge")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.colors.some((e) => e === "rouge") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">Rouge</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
            Moteur{" "}
          </h2>
          <div className="flex flex-col gap-[10px] w-[300px]">
            <div className="flex flex-col gap-[10px] ">
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "1.2"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "1.2")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "1.2") && (
                    <MdDone className="text-white " />
                  )}
                </div>
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
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "1.4")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "1.4") && (
                    <MdDone className="text-white " />
                  )}
                </div>
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
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "1.6")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "1.6") && (
                    <MdDone className="text-white " />
                  )}
                </div>
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
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "1.8")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "1.8") && (
                    <MdDone className="text-white " />
                  )}
                </div>
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
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "2.0")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "2.0") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">2.0</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
            couleur{" "}
          </h2>
          <div className="flex flex-col gap-[10px] w-[300px]">
            <div className="flex flex-col gap-[10px] ">
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "Noir"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "Noir")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "Noir") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">Noir</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "Gris"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "Gris")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "Gris") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">Gris</p>
              </div>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    motors: toggle(filterList.motors, "rouge"),
                  });
                }}
              >
                <div
                  className={`w-[20px] h-[20px] rounded-md border-[0.5px] ${
                    filterList.motors.some((e) => e === "rouge")
                      ? "bg-[#FF4423] border-0"
                      : "border-[#858282]"
                  } `}
                >
                  {filterList.motors.some((e) => e === "rouge") && (
                    <MdDone className="text-white " />
                  )}
                </div>
                <p className="text-[#5E5959] font-semibold">Rouge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] pl-[20px]">
        <h2 className="mb-[10px] text-[#858282] font-semibold text-[15px] capitalize">
          Prix{" "}
        </h2>
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
        <div className="w-full flex justify-center">
          <CgCloseR className="text-3xl text-[#FF4423] my-[10px] md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
