'use client'
import React, { useEffect, useRef, useState } from "react";
import AnimatedText from "./AnimatedText.jsx";
import Link from "next/link";
import { CiPlay1 } from "react-icons/ci";
import { IoPauseOutline } from "react-icons/io5";

const VideoCover = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
const [paused,setPaused]=useState(false)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, []);
  return (
    <div>
      <div className=" sticky top-0 z-[1] w-screen   h-screen flex flex-col items-start justify-end px-[3.2vw] ">
        <video
          src="../assets/TIGGO_8_PRO.mp4"
          loop
          muted
          autoPlay
          ref={videoRef}
          className=" w-screen h-screen object-cover absolute top-0 left-0 z-[-10]"
        ></video>
        <AnimatedText
          text={"UNE GAMME POUR CHAQUE BESOIN"}
          sep={" "}
          className={
            "font-bold text-5xl capitalize mb-[30px] text-left w-[500px] max-lg:w-[400px]  items-center  max-lg:text-4xl text-white"
          }
        />
        <AnimatedText
          text={"Une CHERY à votre image"}
          sep={" "}
          className={
            "font-medium text-xl capitalize mb-[41px] text-left  w-[30vw] max-lg:!w-[400px]    items-center  max-lg:text-xl text-white"
          }
        />
        <div className="w-full  flex justify-between items-center       max-sm:pr-[20px]   mb-[70px]  "> 
        <Link
          href="/marketplace"
          className="  border-2 hover:scale-[1.1] text-white  cursor-pointer border-white flex justify-center items-center py-6 px-12 max-md:py-3 max-lg:px-6 text-3xl max-xl:text-[20px] rounded-[8px] "
        >
          Decouvrez plus...
          </Link>
          <button className="w-[4vw] rounded-lg h-[4vw] min-h-[65px] min-w-[65px]  border-2 border-white flex justify-center items-center"  onClick={() => {
                setPaused(!paused)
                if (!paused) { videoRef.current?.pause() }
                else{    videoRef.current?.play()}
            
              }} >
            {paused ?
              <CiPlay1 className="text-white text-4xl"
             />
            :
              <IoPauseOutline className="text-white text-4xl"/>}
          
        </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCover;
