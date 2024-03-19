"use client";
import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CiUser, CiMenuBurger, CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { CgCloseR } from "react-icons/cg";
const targets = [
  { target: "/#models", title: "Nos modèle" },
  { target: "/events", title: "Nos évènements" },
  { target: "/services", title: "Services" },
  { target: "/FAQ", title: "FAQ" },
  { target: "/about", title: "About Us" },
];
interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}
const CustomLink: FC<CustomLinkProps> = ({
  href,
  title,
  className,
}: CustomLinkProps) => {
  const currentPath = usePathname();

  return (
    <Link href={href} className={`${className} relative group  cursor-pointer`}>
      {title}
      <span
        className={`absolute left-0 inline-block w-0 h-[3px] -bottom-2 max-lg:bg-light group-hover:w-full transition-all ease duration-300
      ${currentPath === href ? "w-full" : "w-0"}   
      ${currentPath === "/" ? " bg-red-800" : "bg-black"} `}
      ></span>
    </Link>
  );
};
const Nav = () => {
  let [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  return (
    <div
      className={`w-screen h-[90px]  border-b-[3px] ${
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
      <Link href={"/"} className="flex flex-col items-center">
        <img src="../assets/logo.png" alt="logo" className="w-24 h-14 " />
        <div className="good text-[12px] font-normal text-[#D12621] ">
          speed motors
        </div>
      </Link>
      <ul className="w-[60%] flex items-center justify-between max-md:hidden">
        <CustomLink href={"/"} className="" title="Modèles" />
        <CustomLink href={"/event"} className="" title="Évènements" />
        <CustomLink href={"/#offers"} className="" title="Offres" />
        <CustomLink href={"/services"} className="" title="Services" />
        <CustomLink href={"/faq"} className="" title="FAQ" />
        <CustomLink href={"/about"} className="" title="About Us" />
      </ul>
      <div className="flex gap-[1.5vw]">
        <CiSearch
          className={`w-8 h-8 ${currentPath === "/" ? "text-white" : ""} `}
        />
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
            className={`absolute left-0  py-[50px] h-screen bg-white text-black  flex flex-col rounded-lg transition-all duration-700 ${
              isOpen ? "w-[600px] top-0 max-lg:w-screen" : "w-0 top-0 "
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
    </div>
  );
};

export default Nav;
