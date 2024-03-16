"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const targets = [
  { target: "/#models", title: "Nos modèle" },
  { target: "/events", title: "Nos évènements" },
  { target: "/services", title: "Services" },
  { target: "/FAQ", title: "FAQ" },
  { target: "/about", title: "About Us" },
];

const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-[140px]  border-b-[3px]   border-white absolute top-0 z-[10] bg-transparent flex justify-between items-center pl-[3.8vw] pr-[2vw] ">
      <div
        className="flex items-center gap-[11px] cursor-pointer "
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <div className="flex flex-col cursor-pointer  gap-[10px] ">
          <div
            className={`bg-white h-0.5 w-[30px] rounded-sm transition-all ease-in-out duration-200 ${
              isOpen ? "rotate-45 translate-y-5" : ""
            }`}
          />
          <div
            className={`bg-white h-0.5 w-[30px] rounded-sm  my-1 transition-all ease-in-out duration-200 ${
              isOpen ? "opacity-0" : "opacity-100 "
            }`}
          />
          <div
            className={`bg-white h-0.5 w-[30px] rounded-sm transition-all ease-in-out duration-200 ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </div>
        <p className="text-5xl font-thin">Menu</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="../assets/logo.png" alt="logo" />
        <div className="good text-[30px] font-normal text-[#D12621]">
          speed motors
        </div>
      </div>
      <div className="flex gap-[4.3vw]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-user"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        </svg>
      </div>
      <div
        className={`absolute left-0  rounded-lg transition-all duration-700 top-0`}
      >
        <div className="relative">
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={`absolute left-0  py-[50px] h-screen bg-white text-black  flex flex-col rounded-lg transition-all duration-700 ${
              isOpen ? "w-[600px] top-0 max-lg:w-screen" : "w-0 top-0 "
            }`}
          >
            {targets.map((e) => {
              return (
                <Link
                  key={e.title}
                  href={e.target}
                  className={` flex items-center justify-between  px-[35px] text-[40px] hover:bg-[#D3D3D3] h-[80px]  transition-all duration-700 ${
                    isOpen ? "opacity-1 " : "opacity-0"
                  }`}
                >
                  <div className="w-[500px]">{e.title}</div>{" "}
                  <img src="../assets/arrow.png" alt="" />
                </Link>
              );
            })}
            <div
              className={`absolute top-[300px] right-[-300px] flex items-center justify-center h-20 w-20 cursor-pointer max-lg:top-[700px] max-lg:right-[50%] max-lg:border-black
                rounded-lg border-[3px] border-white text-white  text-6xl ${
                  isOpen ? "scale-1" : "scale-0"
                }`}
            >
              <img src="../assets/x.png" alt="" className="max-lg:hidden" />
              <div className="lg:hidden text-black"> x</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
