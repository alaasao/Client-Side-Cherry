"use client"
import React from "react";
import Data from "../eventComponents/data";
import { useEffect,useState } from "react";
import axios from "axios";
type DemoProp = {
  params: any;
};

const Page = (props: DemoProp) => {
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
  const foundObject = data.find((obj) => obj._id == props.params.eventid);
  return (
    <div className="h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black">
      <p className="text-sm sm:text-lg  my-4 md:text-2xl lg:text-4xl mt-8 w-[80%] text-center good ">
        {foundObject?.Title}
      </p>

      <div className="w-[90%] flex flex-col items-center justify-center">
        <img
          alt="car"
          className=" w-[95%] rounded-md md:w-[90%]  max-h-[600px] object-cover"
          src={`${foundObject?.Images}`}
          width={200}
          height={200}
        />
      </div>
      <div className="w-[85%] text-xs sm:text-sm md:text-xl  mt-4">
        {/*     {foundObject?.Description.split('.').map((line, index) => (
                    <React.Fragment key={index}>
                      <div className='mb-3'>
                        {line}
                      </div>
                    </React.Fragment>
                ))} */}
        <p>{foundObject?.Description}</p>
      </div>
    </div>
  );
};

export default Page;
