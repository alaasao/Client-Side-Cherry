import React, { FC } from "react";
interface sliderCardProps {
  title: string,
  image:string
}
const SliderCard:FC<sliderCardProps>= ({ title, image }:sliderCardProps) => {

  return (
    <div className="flex flex-col items-center ">
      <img src={image} alt="" />
      <div className=" flex items-center gap-[15px]">
        <div className=" good  sliderText text-4xl max-lg:text-xl ">
          {" "}
          {title}{" "}
        </div>
        <img src="../assets/fullarrow.png" alt="" />
      </div>
    </div>
  );
};

export default SliderCard;
