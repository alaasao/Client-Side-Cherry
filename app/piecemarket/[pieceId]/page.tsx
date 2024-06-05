'use client'
import React, { useEffect, useState } from "react";
import data from "../components/data";
import Main from "./component/Main";
import Desc from "./component/Desc";
import Doc from "./component/Doc";
import Form from "@/app/components/Form";
import axios from "axios";
const Page = ({ params }: { params: { pieceId: string } }) => {
  let [piece, setPiece] = useState(   {
    "_id": "",
    "Name": "Roda",
    "Description": "Chaba",
    "Price": 500,
    "Quantity": 20,
    "Image": [
        {
            "color": "black",
            "images": [
                "https://firebasestorage.googleapis.com/v0/b/cherry-36cfa.appspot.com/o/images%2FIMG_20240530_175100.jpg?alt=media&token=e251d8de-47aa-494c-b92c-6728c94b9f21"
            ]
        }
    ],
    "IsPromo": false,
    "createdAt": "2024-06-02T15:50:55.689Z",
    "updatedAt": "2024-06-02T15:50:55.689Z",
    "__v": 0
});
  useEffect(() => {
    axios.get("https://axeiny.tech:4004/piece/" + params.pieceId).then((res) => {
      setPiece(res.data);
    })
  }, [])

  return (
    <div className="p-[4.5vw]">
      <Main {...piece}  img={piece.Image[0].images[0]} dispo={piece.Quantity>0} />
      <Desc desc={"it is a vital component of a vehicle that provides illumination for the driver in dark environments or during poor visibility conditions. They come in various types including headlights, tail lights, brake lights, and turn signals. Headlights allow drivers to see the road ahead in the dark, while tail lights and brake lights signal to other drivers the car's presence and intentions. Turn signals, also known as blinkers, indicate the direction in which the vehicle intends to turn or change lanes."} />

      <Form name={piece.Name} id={piece._id} type="piece" />
    </div>
  );
};

export default Page;
