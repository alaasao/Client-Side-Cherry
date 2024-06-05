"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
type DemoProp = {
  Images: String[];
  littleDescription: String;
  date:string;
  id: string;
  Title:string;
};

const Card = (props: DemoProp) => {
  const newDate=props.date.split("T")
  
  return (
    <div className={`md:grid md:max-h-[400px] md:grid-cols-[1fr_1fr] lg:gap-[50px] flex flex-col md:flex-row  max-md:items-center max-md:justify-center gap-4 w-[80%] h-full border-b-2 border-black border-opacity-[25%] py-4  ${props.id===""?"hidden":""}  ` }  > 
    <div className="flex items-center justify-center w-full">
        <img
          src={`${props.Images}`}
          className="w-full h-full rounded-[10px] max-h-[300px] items-center sm:w-[70%] md:w-[80%] lg:w-full"
          alt="haha"
          width={500}
          height={500}
        />
      </div>

      <div className="flex flex-col max-w-[1500px]  justify-around lg:justify-evenly">
        <p className="w-full md:max-w-[80%] lg:w-full  overflow-hidden text-sm sm:text-xl md:text-2xl md:text-left text-center text-red-500  line-clamp-4 2xl:line-clamp-6 lg:text-3xl 2xl:text-2xl">
          {props.Title}
        </p>
        <p className="w-full md:max-w-[80%] lg:w-full  overflow-hidden text-xs sm:text-lg md:text-sm md:text-left text-center  line-clamp-4 2xl:line-clamp-6 lg:text-lg 2xl:text-2xl">
          {props.littleDescription}
        </p>

        <div className="flex flex-col-reverse w-full  gap-2 mt-4 sm:flex-row items-center  2xl:items-center  md:items-end md:w-[80%]  2xl:justify-around sm:justify-between">
          <Link href={`/event/${props.id}`}>
            <button className="text-[#D12621] border 2xl:w-[300px] 2xl:h-[75px] rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  h-4  animation ">
              <span className="relative z-10 2xl:text-xl"> En Savoir Plus</span>
            </button>
          </Link>
          <p className="text-[#00000080] w-full pb-2 sm:w-[10%] lg:font-bold   text-nowrap lg:text-xl 2xl:text-3xl text-center text-lg md:text-opacity-[50%]">
            {newDate[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
