import React from "react";
import Slider from "./Slider.jsx";

const Explore = () => {
  return (
    <div className="bg-white  pt-[200px] text-black">
      <div className="w-[50vw] mx-auto text-center min-w-[500px] mb-[80px]">
        <h1 className="w-[80%] text-6xl font-medium max-lg:text-4xl mx-auto mb-[40px]">
          EXPLOREZ VOTRE{" "}
          <span className="text-[#858282]  ">GAMME DE VEHICULES</span>
        </h1>
        <p className="text-2xl ">
          Familiale, SUV ou citadine, parcourez les modèles CHERY et trouvez
          celui qui vous correspond le mieux.
        </p>
      </div>
      <Slider />
    </div>
  );
};

export default Explore;
