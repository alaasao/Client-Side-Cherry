"use client";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import React, { useState, useEffect } from "react";
import SliderCard from "./SliderCard";
import OfferCard from "./OfferCard";
import { set } from "date-fns";

const data = [
  { id: 1, img: "../assets/offer.png" },
  { id: 1, img: "../assets/offer.png" },
  { id: 1, img: "../assets/offer.png" },
];
const OfferSlider = () => {
  const [perPage, setPerPage] = useState(1);
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setLoop(false);
        setPerPage(3);
      } else if (windowWidth >= 768) {
        setPerPage(2);
        setLoop(true);
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
    <div className="bg-white  ">
      {loop ? (
        <Splide
          aria-label="My Favorite Images"
          options={{
            type: "loop",
            perPage: perPage,
            arrows: false,
            pagination: false,
            gap: 46,

            drag: "free",
            autoScroll: {
              speed: 1,
            },
          }}
          // extensions={{ AutoScroll }}
        >
          {data.map((e, i) => {
            return (
              <SplideSlide key={e.title + i * 2}>
                <OfferCard img={e.img} id={e.id} />
              </SplideSlide>
            );
          })}
        </Splide>
      ) : (
        <div className="flex w-full justify-between gap-[70px]">
          {data.map((e, i) => {
            return (
              <div key={e.title + i * 2} className=" ">
                <OfferCard img={e.img} id={e.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OfferSlider;
