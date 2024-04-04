"use client";

import "@splidejs/react-splide/css";
import React, { useState, useEffect, useRef } from "react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
const ImagesDisplay = ({ data }) => {
  const [main, setMain] = useState(data.Images[0]);

  return (
    <div className="w-full h-[600px]  flex flex-col gap-[12px]">
      <div className="w-full h-[550px] overflow-hidden flex justify-center items-center">
        <img src={main} alt="" className="h-full rounded-lg object-cover" />
      </div>

      <div className="w-full h-[100px]">
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            arrows: false,
            gap: 10,
            pagination: false,
            drag: "free",
            autoScroll: { speed: 0.5 },
          }}
          className="splide-containe w-full h-[100px]"
        >
          {data.Images.map((e, i) => (
            <SplideSlide
              key={i}
              className=""
              onClick={() => {
                setMain(e);
              }}
            >
              <div className="">
                <img src={e} alt="" className="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ImagesDisplay;
