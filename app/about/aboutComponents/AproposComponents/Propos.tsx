"use client";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
type Demoprops = {
  title: string;
  shortText: string;
  longText: string;
};

const Propos = (props: Demoprops) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", " 0.5 start"],
  });
  const [collapse, setcollapse] = useState(false);
  return (
    <div className="flex sm:ml-6 mt-6  flex-col justify-center ">
      <div className="good text-sm font-[400]  sm:text-2xl lg:text-4xl  ">
        a propos de <span className="text-[#D12621]">{props.title} :</span>
      </div>
      <div className="flex sm:flex-row gap-4 mt-6 ml-6 relative  " ref={ref}>
        <motion.div
          className=" absolute  h-[90%] max-md:h-[80%]  origin-top w-[10px] bg-gradient-to-t from-[#D12621] to-[#6B1311] "
          style={{ scaleY: scrollYProgress }}
        />

        <div className=" sm:italic  pl-[40px] sm:max-w-[90%] w-full h-auto  text-sm  font-[400] sm:font-[500] sm:text-sm md:text-xl sm:text-start sm:pr-2 sm:leading-[37px]">
          {props.shortText.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          <span
            className={`max-h-0 transition-all ease-in-out duration-1000 overflow-hidden inline-block md:max-h-[50rem] ${
              collapse
                ? "max-h-[50rem] transition-all   ease-in-out duration-1000"
                : ""
            }`}
          >
            {props.longText.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </span>
          <button
            className="md:hidden text-red-500"
            onClick={() => {
              setcollapse((prev) => !prev);
            }}
          >{`read ${collapse ? "less" : "more"}`}</button>
        </div>
      </div>
    </div>
  );
};

export default Propos;
