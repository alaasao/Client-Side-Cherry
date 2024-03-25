import React, { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
interface CustomLinkProps {
    href: string;
    title: string;
    className: string;
    currentPath: string;
  }
const CustomLink: FC<CustomLinkProps> = ({
    href,
    title,
    className,
    currentPath,
  }: CustomLinkProps) => {
    return (
      <Link href={href} className={`${className} relative group  cursor-pointer`}>
        {title}
        <span
          className={`absolute left-0 inline-block w-0 h-[3px] -bottom-2 max-lg:bg-light group-hover:w-full transition-all ease duration-300
        ${currentPath === href ? "w-full" : "w-0"}   
        bg-[#D12621] `}
        ></span>
      </Link>
    );
};
export default CustomLink