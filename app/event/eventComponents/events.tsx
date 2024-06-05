"use client";
import React from "react";
import Card from "./Card";
import { useState,useEffect } from "react";
import Data from "./data";
import axios from "axios";
const Events = () => {
  const [visible, setvisible] = useState(4);
  function showMore() {
    setvisible((prev) => prev + 4);
  }
  const [data, setData] = useState([
    {
      "_id": "",
      "Masked": false,
      "Images": [
""      ],
      "Title": "",
      "Description": "",
      "Event_Date": "2024-05-29T00:00:00.000Z",
      "createdAt": "2024-05-31T14:08:04.863Z",
      "updatedAt": "2024-05-31T21:34:47.261Z",
      "__v": 0
  },]);
  useEffect(() => {
    axios.get("https://axeiny.tech:4004/event").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center mt-4 h-full">
        {data.slice(0, visible).map((q) => (
          <Card
            key={q._id}
            Images={q.Images}
            littleDescription={q.Description}
            id={q._id}
            date={q.Event_Date}
            Title={q.Title}
          />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center ">
      <button className="text-[#D12621] border 2xl:w-[300px] 2xl:h-[75px] rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  h-4  animation " 
      onClick={showMore}>
              <span className="relative z-10 2xl:text-xl"> 
              Charger Plus</span>
            </button>
      </div>
    </div>
  );
};

export default Events;
