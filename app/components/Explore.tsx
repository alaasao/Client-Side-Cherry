import React from "react";
import Slider from "./Slider.jsx";
import Link from "next/link.js";

const Explore = () => {
  return (
    <div className="bg-white  text-black pb-[20px] ">
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
        className="link text-xl max-md:text-[12px] border-[1px] rounded-xl max-lg:text-xl md:min-w-[300px]  w-max border-black focus:border-white  hover:scale-[1.1] focus:bg-red-600 focus:!text-white group flex items-center gap-[10px] justify-center  max-md:w-[200px] mx-auto px-[23px] py-[16px] group "
      >
        <div className=""> DECOUVREZ TOUTE LA GAMME</div>{" "}
        <span className="text-[#D12621] group-focus:text-white">CHERY</span>
      </Link>
    </div>
  );
};

export default Explore;
