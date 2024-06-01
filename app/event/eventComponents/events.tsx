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
      "_id": "6659d9c4c85c109887da3e8e",
      "Masked": false,
      "Images": [
          "https://firebasestorage.googleapis.com/v0/b/cherry-36cfa.appspot.com/o/images%2FScreenshot%202023-03-30%20141636.png?alt=media&token=2a56d1df-7a94-421d-97da-e52a41731320"
      ],
      "Title": "Y",
      "Description": "jjcfddf",
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
