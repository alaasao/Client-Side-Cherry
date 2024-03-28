"use client";
import React, { FC, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
interface ConfortProps {
  climatization: string;
  dirction: string;
  ecran: string;
  accoudoir: string;
  seiges_Chauffants: boolean;
  boire_A_Gants_Refrigerante: boolean;
  ordinateur_De__Bord: boolean;
  radar_De_Recul: boolean;
  autoradio: string;
  bluetooth: boolean;
}
const Confort: FC<ConfortProps> = ({
  climatization,
  dirction,
  ecran,

  accoudoir,
  seiges_Chauffants,
  boire_A_Gants_Refrigerante,
  ordinateur_De__Bord,
  radar_De_Recul,
  autoradio,
  bluetooth,
}: ConfortProps) => {
  let [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center  w-full justify-between border-b-[1px] pb-[23px] border-[#A0A0A0]">
        <div className="flex gap-[10px] items-center text-3xl ">
          <img src="../assets/details/confort.png" alt="" />
          <div className="font-bold "> Motor</div>
        </div>
        <div
          className="text-[#F70202] text-3xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
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
            initial={{ opacity: 0.5, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 2 },
            }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 ml-4 "
          >
            <div className="w-full flex justify-between flex-wrap">
              <div className="  grid grid-cols-2 text-2xl capitalize max-xl:text-[16px] w-[48%] max-md:w-full">
                <div className="text-[#848484]   ">Energie</div>
                <div className=" ">{}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Confort;
