import React from "react";
import Image from "next/image";
const Summum = () => {
  return (
    <div className="w-full bg-white pb-[200px] max-md:hidden ">
      <h1 className="font-medium text-6xl mb-[80px] w-[50vw]  min-w-[200px] max-md:text-2xl max-lg:text-4xl uppercase text-black mx-auto text-center">
        DÉCOUVREZ &nbsp;
        <span className="text-[#858282] ">LE SUMMUM DU LUXE</span>
      </h1>
      <img src="../assets/redtiggo.png" width="100%" height="[520]" />
    </div>
  );
};

export default Summum;
