"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Change = () => {
  let path = usePathname();
  return (
    <div
      className="h-[95px] mx-[30px]   border-b-[1px] border-[#A0A0A0]  flex gap-[5px] max-md:justify-center text-3xl cursor-pointer
    font-medium capitalize max-sm:text-xl max-sm:h-[50px] max-md:w-full max-md:mx-0 "
    >
      <Link
        href={"/marketplace"}
        className={`h-full w-[190px] flex justify-center items-center relative group ${
          path === "/marketplace" ? "" : "text-[#9A9A9A]"
        } `}
      >
        Véhicules
        <span
          className={`absolute left-0 inline-block w-0 h-[3px] -bottom-0 max-lg:bg-light group-hover:w-full transition-all ease duration-300
    //   ${path === "/marketplace" ? "w-full" : "w-0"}   
      bg-[#D12621] `}
        ></span>
      </Link>
      <Link
        href={"/piecemarket"}
        className={`h-full w-[190px] flex justify-center items-center relative group   ${
          path === "/piecemarket" ? "" : "text-[#9A9A9A]"
        } `}
      >
        pieces
        <span
          className={`absolute left-0 inline-block w-0 h-[3px] -bottom-0 max-lg:bg-light group-hover:w-full transition-all ease duration-300 z-[1]
    //   ${path === "/piecemarket" ? "w-full" : "w-0"}   
      bg-[#D12621] `}
        ></span>
      </Link>
    </div>
  );
};

export default Change;
