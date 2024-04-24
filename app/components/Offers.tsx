import React, { FC } from "react";
import OfferSlider from "./OfferSlider.jsx";
import OfferCard from "./OfferCard";
import Link from "next/link.js";
import OffersAnimated from "./OffersAnimated.jsx";
interface offer {
  id: number;
  img: string;
}
const data: Array<offer> = [
  { id: 1, img: "../assets/offer.png" },
  { id: 1, img: "../assets/offer.png" },
  { id: 1, img: "../assets/offer.png" },
];
const Offers: FC = () => {
  return (
    <div className="pt-[100px] bg-white pb-[150px] relative" id="offers">
      <h1 className="w-[700px] text-center  max-lg:w-[300px] max-lg:text-3xl text-5xl text-black mx-auto font-medium mb-[80px]">
        OFFRES DU MOMENT
      </h1>
      <div className="w-full flex  flex-wrap  max-md:[5px] justify-center gap-[20px] pb-[140px] ">
        <OfferSlider />
      </div>
      <Link
        href={"/offres"}
        className="link text-xl max-md:text-[12px] border-[1px] rounded-xl max-lg:text-xl md:min-w-[300px]  w-max border-black focus:border-white  hover:scale-[1.1] focus:bg-red-600 focus:!text-white group flex items-center gap-[10px] justify-center  max-md:w-[200px] mx-auto px-[23px] py-[16px] group "
        >
        <div> VOIR TOUTES LES OFFRES </div>{" "}
       
      </Link>
    </div>
  );
};

export default Offers;
