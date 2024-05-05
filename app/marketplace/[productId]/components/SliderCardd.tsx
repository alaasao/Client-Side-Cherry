import React, { FC } from "react";
interface SliderCardProps {
  title: string;
  image: string;
}
const SliderCard: FC<SliderCardProps> = ({ title, image }: SliderCardProps) => {
  return (
    <div className="flex flex-col items-center ">
      <img src="public/assets/serv/carr.png" alt="gggg" className="w-full" />
    </div>
  );
};

export default SliderCard;
