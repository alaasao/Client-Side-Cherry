import React from "react";
import Slider from "./Slider.jsx";
import Link from "next/link.js";

const Explore = () => {
  return (
    <div className="bg-white  text-black ">
      <div className="w-[50vw] mx-auto text-center min-w-[300px] mb-[80px]">
        <h1 className="w-[80%] text-6xl font-medium max-lg:text-3xl mx-auto mb-[40px]">
          EXPLOREZ VOTRE{" "}
          <span className="text-[#858282]  ">GAMME DE VEHICULES</span>
        </h1>
        <p className="text-2xl ">
          Familiale, SUV ou citadine, parcourez les modèles CHERY et trouvez
          celui qui vous correspond le mieux.
        </p>
      </div>
      <div className="mb-[160px]">
        <Slider />
      </div>
      <Link
        href={"/marketplace"}
        className="text-5xl border-[1px] rounded-xl max-lg:text-xl min-w-[300px] border-black hover:bg-[#D12621] hover:text-white group flex items-center gap-[10px] w-[50vw] mx-auto px-[23px] py-[16px] "
      >
        <div>
          {" "}
          DECOUVREZ TOUTE LA GAMME{" "}
          <span className="text-[#D12621] group-hover:text-white">CHERY</span>
        </div>{" "}
        <img src="../assets/fullarrow.png" alt="" />
      </Link>
    </div>
  );
};

export default Explore;
