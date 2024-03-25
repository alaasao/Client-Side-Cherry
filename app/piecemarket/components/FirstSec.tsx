import React from "react";
import Change from "./Change";

const FirstSec = () => {
  return (
    <div className="">
      {" "}
      <Change />{" "}
      <div className="w-screen  max-md:h-[120px] relative max-md:hidden">
        <img
          src="../assets/piece/firstimg.png"
          alt=""
          className="w-full  h-[486px] max-md:h-[120px] "
        />
        <div className="w-full h-full absolute   top-0 left-0   items-center"></div>
      </div>
    </div>
  );
};

export default FirstSec;
