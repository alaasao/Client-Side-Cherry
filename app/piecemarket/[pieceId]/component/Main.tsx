import React, { FC } from "react";
import { pieceProps } from "../../components/Market";
import Image from "next/image";
import { MdDone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Main: FC<pieceProps> = ({
  Name,
  img,

  searchKey,
  dispo,

  id,
  Price,
  
}: pieceProps) => {
  return (
    <div className="w-full  grid grid-cols-[38%_1fr] rounded-3xl md:border-[1px]  border-black ">
      <div className=" h-[400px] max-md:h-[250px]  ">
        <img src={img} alt="" className="w-full h-full rounded-3xl" />
      </div>
      <div className="w-full  pl-[10%] flex flex-col pt-[5%]">
        <div className="font-bold text-5xl max-md:text-xl">{Name}</div>
        <div className="flex text-[#A5A5A5] text-3xl max-md:text-[16px] mt-[20px] max-md:mt-[5px]  font-bold ">
         
        </div>
        <div className="text-[#A5A5A5] text-xl  font-bold my-[10px] max-md:text-[16px] max-md:mt-[5px]">
  
        </div>
        {dispo ? (
          <div className="text-[#39A63D] flex items-center  bg-[#E0F6E2] w-[180px] max-md:w-[150px] py-[5px]  max-md:gap-[5px]  justify-center gap-[15px] rounded-lg  max-md:text-[16px]">
            <div className="rounded-full flex w-[20px] h-[20px] justify-center items-center border-2 border-[#39A63D]">
              <MdDone className="text-[12px]" />
            </div>
            Disponible
          </div>
        ) : (
          <div className="text-[#DB2719] flex items-center w-[180px] py-[5px] justify-center gap-[15px] max-md:gap-[5px] max-md:w-[150px] rounded-lg bg-[#db26196a] max-md:text-[16px]">
            <div className="rounded-full flex w-[20px] h-[20px] justify-center items-center border-2 border-[#DB2719]">
              <IoClose className="text-[12px]" />
            </div>
            InDisponible
          </div>
        )}
        <div className="text-[#DB2719] text-5xl max-md:text-3xl mt-[60px] max-md:mt-[10px]">
          {Price}.00DZ
        </div>
      </div>
    </div>
  );
};

export default Main;
