import React, { FC } from "react";
interface SliderCardProps {
  title: string;
  image: string;
}
const SliderCard: FC<SliderCardProps> = ({ title, image }: SliderCardProps) => {
  return (
    <div className="flex flex-col items-center ">
      <img src={image} alt="" className="w-[250px] h-[200px]" />
      <div className=" flex items-center gap-[15px]">
        <div className=" good  sliderText text-4xl max-lg:text-xl uppercase ">
          {" "}
          {title}{" "}
        </div>
        <img src="../assets/fullarrow.png" alt="" className="" />
      </div>
    </div>
  );
};

export default SliderCard;
