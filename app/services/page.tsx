"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cover from "./servicesComponent/Cover";
import FirstSection from "./servicesComponent/FirstSection";
import CarInformation from "./servicesComponent/CarInformation";
import LittleVidange from "./servicesComponent/LittleVidange";
import BigVidange from "./servicesComponent/BigVidange";
import axios from "axios";
const fetchUserData = async () => {};
const page = () => {
  const [userBonData, setUserBonData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("sttaus 2");
      if (localStorage.getItem("UserId") !== null) {
        await axios
          .get(
            `https://axeiny.tech:4004/bon/client/${localStorage.getItem("UserId")}`,
          )
          .then((res) => {
            setUserBonData(res.data);
          })
          .catch((err) => {
            console.log(err.response.data.message);
            localStorage.removeItem("UserId");
          });
        console.log("sttaus 3 ");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="h-[95%] w-screen flex flex-col items-center justify-start">
      <FirstSection />
      <CarInformation data={userBonData} />
      <LittleVidange />
      <BigVidange />
    </div>
  );
};

export default page;
