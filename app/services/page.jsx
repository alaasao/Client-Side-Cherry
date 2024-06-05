"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cover from "./servicesComponent/Cover";
import FirstSection from "./servicesComponent/FirstSection";
import CarInformation from "./servicesComponent/CarInformation";
import LittleVidange from "./servicesComponent/LittleVidange";
import BigVidange from "./servicesComponent/BigVidange";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import "@splidejs/react-splide/css";
const Page = () => {
  const [Data,setData] = useState(
    {
      "_id": "",
      "Date_Achat": 0,
      "Prix_Vente": 0,
      "Contrat_De_Vente": "https://firebasestorage.googleapis.com/v0/b/cherry-36cfa.appspot.com/o/images%2FNouveau%20document%20texte.txt?alt=media&token=1dc21a90-cd51-43ca-b538-0e9745e31957",
      "Facture": "https://firebasestorage.googleapis.com/v0/b/cherry-36cfa.appspot.com/o/images%2FNouveau%20document%20texte.txt?alt=media&token=169e3544-e519-4022-aa02-5335cf98a033",
      "Car": {
          "Name": "arrizo",
          "_id": "665ff014ef496b201171a44f",
          "Garentie": "2 ans"
      },
      "Piece": null,
      "Client": {
          "_id": "665b54170afe36a1e6bc28d8",
          "Name": "alaa ou",
          "Phone": "0696472849"
      },
      "createdAt": "2024-06-03T14:46:44.733Z",
      "updatedAt": "2024-06-03T14:46:44.733Z",
      "__v": 0
  },);
  useEffect(() => {
    const fetchData = async () => {
      console.log("sttaus 2");
      {axios.get(`https://axeiny.tech:4004/bon/client/${localStorage.getItem("UserId")}`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFsYWFAZ21haWwuY29tIiwiaWQiOiI2NjMyNzM5ZGMyOGEwODViMmUzZTE1NjgiLCJSb2xlIjoiQURNSU4iLCJpYXQiOjE3MTU0Mjc0NzIsImV4cCI6MTcxODAxOTQ3Mn0.JFRwofQjkscRSU-Im7_0dH6eUlI9Uq0gHTnDb8VMNis`,
         },
        })  
          .then((res) => {
            console.log(res.data)
            setData(res.data);
          })
          .catch((err) => {
            console.log(err.response.data.message);
            localStorage.removeItem("UserId");
          });
        console.log("sttaus 3");
      }
    };
    fetchData();
  }, []);  
  return (
    <div className="h-[95%] w-screen flex flex-col items-center justify-start">
      <FirstSection />
      <CarInformation data={Data}/> 
      <LittleVidange />
      <BigVidange />
    </div>
  );
};

export default Page;
