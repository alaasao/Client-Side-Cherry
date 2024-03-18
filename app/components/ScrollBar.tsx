"use client";
import React, { FC, RefObject, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

interface ScrollBarProps {
  children: React.ReactNode; // Children of the scrollable area
  className?: string; // Optional className for the main element
}
const ScrollBar:FC<ScrollBarProps> = ({ children, className }:ScrollBarProps) => {
  const containerRef= useRef<HTMLElement>(null);

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
