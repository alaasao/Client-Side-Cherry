"use client";
import React from "react";
import Card from "./Card";
import { useState } from "react";
import Data from "./data";
const Events = () => {
  const [visible, setvisible] = useState(4);
  function showMore() {
    setvisible((prev) => prev + 4);
  }
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center mt-4 h-full">
        {Data.slice(0, visible).map((q) => (
          <Card
            key={q._id}
            image={q.Images}
            littleDescription={q.Description}
            id={q._id}
            date={q.Date}
          />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center ">
        <button
          className="text-[#D12621] border-2 border-[#858282] w-[200px] rounded-[10px] font-good mt-12 h-4  animation"
          onClick={showMore}
        >
          <span className="relative  z-10 text-nowrap  good text-sm ">
            CHARGER PLUS
          </span>
        </button>
      </div>
    </div>
  );
};

export default Events;
