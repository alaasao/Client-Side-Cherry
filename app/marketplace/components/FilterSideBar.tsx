"use client";
import { CgCloseR } from "react-icons/cg";
import React, { useState, Dispatch, SetStateAction, FC } from "react";
import { FaCheck, FaLeaf } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
interface FilterList {
  colors: string[];
  motors: string[];
  energie: string[];
  prix: number[];
}
interface FilterSideBarProps {
  filterList: FilterList;
  setFilterList: Dispatch<SetStateAction<FilterList>>;
}
const FilterSideBar: FC<FilterSideBarProps> = ({
  filterList,
  setFilterList,
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
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h1
        className="md:hidden cursor-pointer font-bold m-[5px] w-full bg-white"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        Filter
      </h1>
      <div
        className={`md:w-[300px] capitalize transition-all duration-700  max-md:absolute max-md:top-0 max-md:h-full bg-white ${
          isOpen ? "w-full   left-0 " : " left-[-1000px]"
        } `}
      >
        <h1 className="my-[30px] font-bold  pl-[40px] ">Filter By</h1>
        <div className="flex flex-col gap-[40px]  pl-[40px] w-full">
          <div>
            <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
              couleur{" "}
            </h2>
            <div className="flex flex-col gap-[10px] w-full">
              <div className="flex flex-col gap-[10px] ">
                <div
                  className="flex gap-[8px] cursor-pointer "
                  onClick={() => {
                    setFilterList({
                      ...filterList,
                      colors: toggle(filterList.colors, "rouge"),
                    });
                  }}
                >
                  {filterList.colors.some((e) => e === "rouge") ? (
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

                  <p className="text-[#5E5959] font-semibold">rouge</p>
                </div>
                <div
                  className="flex gap-[8px] cursor-pointer "
                  onClick={() => {
                    setFilterList({
                      ...filterList,
                      colors: toggle(filterList.colors, "noir"),
                    });
                  }}
                >
                  {filterList.colors.some((e) => e === "noir") ? (
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

                  <p className="text-[#5E5959] font-semibold">noir</p>
                </div>
                <div
                  className="flex gap-[8px] cursor-pointer "
                  onClick={() => {
                    setFilterList({
                      ...filterList,
                      colors: toggle(filterList.colors, "gris"),
                    });
                  }}
                >
                  {filterList.colors.some((e) => e === "gris") ? (
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

                  <p className="text-[#5E5959] font-semibold">gris</p>
                </div>
              </div>
            </div>
          </div>
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
          </div>
        </div>
        <div className="mt-[40px] pl-[20px]">
          <h2 className="mb-[10px] text-[#858282] font-semibold text-[15px] capitalize">
            Prix{" "}
          </h2>
          <div className="w-full flex justify-center">
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
            <div className=" bg-[#FF4423] text-white cursor-pointer w-[100px] mt-[10px] py-[10px] rounded-lg flex justify-center items-center md:hidden">
              Filter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSideBar;
