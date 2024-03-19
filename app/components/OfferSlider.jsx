"use client";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState, useEffect } from "react";
import SliderCard from "./SliderCard";
import OfferCard from "./OfferCard";

const data = [
  { id: 1, img: "../assets/offer.png" },
  { id: 1, img: "../assets/offer.png" },
  { id: 1, img: "../assets/offer.png" },
];
const OfferSlider = () => {
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setPerPage(3);
      } else if (windowWidth >= 768) {
        setPerPage(2);
      } else {
        setPerPage(1);
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
          autoplay: true,
          pagination: false,
          gap: 46,
        }}
      >
        {data.map((e, i) => {
          return (
            <SplideSlide key={e.title + i}>
              <OfferCard img={e.img} id={e.id} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default OfferSlider;
