"use client";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState, useEffect } from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import SliderCard from "./SliderCard";

const data = [
  { title: "tiggo 2 Pro", image: "../assets/details/tiggo_4_de_profil-removebg-preview 2.png" }, //the data will be fetched
  { title: "tiggo 2 Pro", image: "../assets/details/tiggo_8_pro_de_profil-removebg-preview 1.png" },
  { title: "tiggo 2 Pro", image: "../assets/details/tiggo2_de_profil-removebg 3.png" },
  { title: "tiggo 2 Pro", image: "../assets/details/Tiggo8_de_profil-removebg-preview 2.png" },
  { title: "tiggo 2 Pro", image: "../assets/details/tiggo_4_de_profil-removebg-preview 2.png" },
  { title: "tiggo 2 Pro", image: "../assets/tiggo_4.png" },
  { title: "tiggo 2 Pro", image: "../assets/details/Tiggo8_de_profil-removebg-preview 2.png" },
  { title: "tiggo 2 Pro", image: "../assets/details/tiggo_8_pro_de_profil-removebg-preview 1.png" },
  { title: "tiggo 2 Pro", image: "../assets/details/tiggo_4_de_profil-removebg-preview 2.png" },
];
const Slider = () => {
  const [perPage, setPerPage] = useState(1);
  const [gap, setGap] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setPerPage(3);
      } else if (windowWidth >= 768) {
        setPerPage(2);
      } else {
        setPerPage(1);
        setGap(46);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Cleanup function to remove listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-white">
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: perPage,
          arrows: false,
          gap: gap,
          pagination: false,
          drag: "free",

          // autoScroll: { speed: 1 },
        }}
      >
        {data.map((e, i) => {
          return (
            <SplideSlide key={e.title + i}>
              <SliderCard title={e.title} image={e.image} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;
