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
      <h1 className="w-[700px] text-center  max-lg:w-[300px] max-lg:text-3xl text-6xl text-black mx-auto font-medium mb-[80px]">
        OFFRES DU MOMENT
      </h1>
      <div className="w-full flex  flex-wrap px-[23px] max-md:[5px] justify-center gap-[20px] pb-[140px] ">
        <OfferSlider />
      </div>
      <Link
        href={"/offres"}
        className="text-5xl justify-between border-[1px] hover:scale-[1.1] rounded-xl max-xl:text-xl min-w-[300px] border-black w-[35vw] text-black flex items-center gap-[10px] mx-auto px-[23px] py-[16px] "
      >
        <div> VOIR TOUTES LES OFFRES </div>{" "}
        <img src="../assets/fullarrow.png" alt="" />
      </Link>
    </div>
  );
};

export default Offers;
