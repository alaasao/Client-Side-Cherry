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
import { SwiperSlide } from "swiper/react";
import "@splidejs/react-splide/css";
const Page = () => {
  const [userBonData,setUserBonData] = useState([]);
  const [Data,setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("sttaus 2");
      {axios.get(`https://axeiny.tech:4004/bon`, {
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
  console.log(Data)
  return (
    <div className="h-[95%] w-screen flex flex-col items-center justify-start">
      <FirstSection />
      <CarInformation data={Data} />     
      <LittleVidange />
      <BigVidange />
    </div>
  );
};

export default Page;
