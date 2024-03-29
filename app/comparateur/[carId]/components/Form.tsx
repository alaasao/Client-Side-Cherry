"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Form = () => {
  let [firstOpen, setFirstOpen] = useState(false);
  let [secondOpen, setSecondOpen] = useState(false);
  return (
    <div className="w-full flex flex-col px-[5vw] items-center mt-[27px]">
      <div className="text-4xl mb-[60px]">Comparateur de voitures</div>
      <div className="w-full flex justify-between items-center ">
        <div className="relative w-1/3 h-auto">
          <input
            type="text"
            placeholder="Choisé le model"
            className="w-full h-[50px] border border-[#9C9C9C] rounded-lg pl-[2vw] outline-none"
          />
          <div
            className="text-[#B7B7B7] text-3xl cursor-pointer absolute top-[50%] -translate-y-1/2 right-[10px] z-10 "
            onClick={() => setFirstOpen((prev) => !prev)}
          >
            {firstOpen ? (
              <MdKeyboardArrowUp className="" />
            ) : (
              <MdKeyboardArrowDown className="" />
            )}
          </div>
          <div
            className={` absolute top-[50px] h-[100px] bg-red-500 z-[999]  w-full ${
              true ? "h-[100px]" : "h-0"
            } `}
          ></div>
        </div>
        {/* <div className="relative w-1/3 ">
          <input
            type="text"
            placeholder="Choisé le model"
            className="w-full h-[50px] border border-[#9C9C9C] rounded-lg pl-[2vw] outline-none"
          />{" "}
          <div
            className="text-[#B7B7B7] text-3xl cursor-pointer absolute top-[50%] -translate-y-1/2 right-[10px]  z-10"
            onClick={() => setSecondOpen((prev) => !prev)}
          >
            {" "}
            {secondOpen ? (
              <MdKeyboardArrowUp className="" />
            ) : (
              <MdKeyboardArrowDown className="" />
            )}
          </div>
          <div
            className={` top-[50px] bg-red-500 w-full  z-10 ${
              secondOpen ? "h-[100px]" : "h-0"
            } `}
          ></div>
        </div> */}
      </div>
    </div>
  );
};

export default Form;
