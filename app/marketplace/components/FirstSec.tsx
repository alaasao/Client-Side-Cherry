import React from "react";

const FirstSec = () => {
  return (
    <div className="w-screen  max-md:h-[120px] relative">
      <img
        src="../assets/marketplace/whitebg.png"
        alt=""
        className="w-full  h-[486px] max-md:h-[120px] "
      />
      <div className="w-full h-full absolute max-md:h-[120px]  top-0 left-0 grid grid-cols-[1fr_1fr] gap-[50px] justify-center items-center text-black ">
        <div className="flex flex-col justify-center gap-[2.9vw] max-sm:gap-[0.5vw]  max-md:justify-start pl-[3.7vw] h-full ">
          <h1 className="text-6xl  font-semibold font-good mx-auto max-lg:text-4xl max-md:text-[12px] max-xl:text-4xl ">
            SPEED MOTORS
          </h1>
          <p className="w-full font-medium text-2xl  max-lg:text-xl max-md:text-[12px] max-sm:text-[8px] max-sm:h-[70px]  max-md:leading-3 max-md:text-center">
            Chery - Votre partenaire de confiance pour des voyages en
            toutesécurité et à petit prix. Explorez notre collection dès
            maintenant !
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="../assets/marketplace/firstSecCar.png"
            className="w-2/3 max-md:w-full  h-[75px] md:h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstSec;
