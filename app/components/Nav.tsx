"use client";
import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CiUser, CiMenuBurger, CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { CgCloseR } from "react-icons/cg";
import CustomLink from "./CustomLink";
const targets = [
  { target: "/marketplace", title: "Nos modèle" },
  { target: "/events", title: "Nos évènements" },
  { target: "/services", title: "Services" },
  { target: "/FAQ", title: "FAQ" },
  { target: "/about", title: "About Us" },
];

const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);
  let currentPath = usePathname();
  let [searchOpen, serSearchOpen] = useState(false);
  return (
    <div
      className={`w-screen box-border min-w-0 h-[90px]  border-b-[3px]  ${
        currentPath === "/"
          ? " border-white absolute top-0 z-[10] bg-transparent text-white"
          : " bg-white text-black border-[#BEBBBA]"
      }   flex justify-between items-center pl-[2vw] pr-[2vw] `}
    >
      <div
        className="flex items-center  cursor-pointer md:hidden "
        onClick={() => {
          setIsOpen((prev) => true);
        }}
      >
        <FiMenu
          className={`h-10 w-10 ${currentPath === "/" ? "text-white" : ""}`}
        />
      </div>
      <Link
        href={"/"}
        className="flex flex-col items-center max-md:absolute  max-md:top-2 max-md:left-1/2 max-md:-translate-x-1/2"
      >
        <img src="../assets/logo.png" alt="logo" className="w-24 h-14 " />
        <div className=" good text-[12px] font-normal text-[#D12621] ">
          speed motors
        </div>
      </Link>
      <ul className="w-[60%] flex items-center justify-between max-md:hidden">
        <CustomLink
          href={"/marketplace"}
          className=""
          title="Modèles"
          currentPath={currentPath}
        />
        <CustomLink
          href={"/event"}
          className=""
          title="Évènements"
          currentPath={currentPath}
        />
        <CustomLink
          href={"/#offers"}
          className=""
          title="Offres"
          currentPath={currentPath}
        />
        <CustomLink
          href={"/services"}
          className=""
          title="Services"
          currentPath={currentPath}
        />
        <CustomLink
          href={"/FAQ"}
          className=""
          title="FAQ"
          currentPath={currentPath}
        />
        <CustomLink
          href={"/about"}
          className=""
          title="About Us"
          currentPath={currentPath}
        />
      </ul>
      <div className="flex gap-[1.5vw]">
        {/* <CiSearch
          className={`w-8 h-8 ${
            currentPath === "/" ? "text-white cursor-pointer " : ""
          } `}
          onClick={() => {
            serSearchOpen((prev) => !prev);
          }}
        /> */}
        <CiUser
          className={`w-8 h-8 ${currentPath === "/" ? "text-white" : ""} `}
        />
      </div>
      <div
        className={`absolute left-0  rounded-lg transition-all duration-700 top-0`}
      >
        <div className="relative md:hidden">
          <div
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
            className={`absolute   py-[50px] h-screen bg-white text-black  flex flex-col rounded-lg transition-all duration-700  z-[100] ${
              isOpen
                ? "w-[600px] left-0 top-0 max-lg:w-screen"
                : "w-0 top-0 left-[-1000px] "
            }`}
          >
            {targets.map((e) => {
              return (
                <Link
                  key={e.title}
                  href={e.target}
                  className={` flex items-center justify-between  px-[35px] text-[40px] hover:bg-[#D3D3D3] h-[80px]  transition-all duration-700 opacity-1 max-md:text-2xl ${
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
              <CgCloseR />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute left-0 w-screen transition-all  duration-700${
          searchOpen ? " top-[100px]" : "  top-[80px]"
        }`}
      >
        <div
          className={`relative w-[90%] mx-auto z-[15]   transition-all  duration-700  `}
        >
          <input
            className={` w-full   pl-[3vw]  text-white text-2xl outline-none max-lg:text-xl max-md:text-[3vw] rounded-full bg-[#7b77768a]  border-white transition-all  duration-700 ${
              searchOpen ? "h-[70px]  border-[2px]" : "border-0 h-0 pl-0 "
            } `}
            placeholder="Entrez le modèle de voiture que vous recherchez

      "
          />{" "}
          <img
            src="../assets/search.png"
            className={`absolute top-1/2 -translate-y-1/2 right-[20px] transition-all  duration-500 cursor-pointer z-10  ${
              searchOpen ? "h-8 max-md:h-4" : "h-0"
            } `}
            onClick={() => console.log("jjj")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
