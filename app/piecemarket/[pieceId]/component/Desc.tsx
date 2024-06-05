"use client";
import React, { FC, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";

interface DescProps {
  desc: string;
}
const Desc: FC<DescProps> = ({ desc }: DescProps) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col  mt-[66px]  mb-[50px]">
      <div
        className="flex items-center  w-full justify-between  h-[77px] mt-[23px] rounded-t-xl px-[20px] bg-[#D9D9D9] cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className=" text-3xl  max-sm:text-xl ">
          Tout savoir sur la pièce
        </div>
        <div className=" text-3xl cursor-pointer">
          {" "}
          {open ? (
            <MdKeyboardArrowUp className="" />
          ) : (
            <MdKeyboardArrowDown className="" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: { duration: 0.5 },
            }}
            exit={{ scaleY: 0 }}
            className="rounded-b-xl w-full flex justify-between max-sm:justify-center flex-wrap bg-[#F1F1F1] origin-top p-[40px]"
          >
            <div className="   text-2xl capitalize flex flex-col  max-sm:text-[16px] ">
              <div className="  font-bold mb-[20px]">Description :</div>
              <div className="font-medium">{desc}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Desc;
