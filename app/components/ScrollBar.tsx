"use client";
import React, { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
const ScrollBar = ({ children, className }) => {
  let containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef} className={className}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default ScrollBar;
