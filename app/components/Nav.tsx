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
        <div className=" cursor-pointer ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        <p className="text-4xl font-thin max-lg:text-2xl max-sm:hidden">Menu</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src="../assets/logo.png"
          alt="logo"
          className="max-lg:w-28 max-lg:h-16"
        />
        <div className="good text-[30px] font-normal text-[#D12621] max-lg:text-[16px]">
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
          strokeWidth="1.5"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
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
                  className={` flex items-center justify-between  px-[35px] text-[40px] hover:bg-[#D3D3D3] h-[80px]  transition-all duration-700 opacity-1  ${
                    isOpen ? "" : "opacity-0"
                  }`}
                >
                  <div className="w-[500px]">{e.title}</div>{" "}
                  <img src="../assets/arrow.png" alt="" />
                </Link>
              );
            })}
            <div
              className={`absolute  flex items-center justify-center cursor-pointer top-[700px] transition-all duration-700  ${
                isOpen ? " left-1/2 -translate-x-1/2" : "left-[-100px]"
              }
                  text-6xl`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-x  "
                width="60"
                height="60"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
                <path d="M9 9l6 6m0 -6l-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
