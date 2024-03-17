import React from "react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";

const VideoCover = () => {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-start justify-end pl-[3.2vw]">
        <video
          src="../assets/TIGGO_8_PRO.mp4"
          loop
          muted
          autoPlay
          className=" w-screen h-screen object-cover absolute top-0 left-0 z-[-1]"
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
        <Link
          href="/marketplace"
          className="border-2 hover:scale-[1.1] hover:bg-red-500  cursor-pointer border-white flex justify-center items-center py-6 px-12 text-3xl max-xl:text-[20px] rounded-[8px] mb-[70px] "
        >
          Decouvrez plus...
        </Link>
      </div>
    </div>
  );
};

export default VideoCover;
