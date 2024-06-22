import Link from "next/link";
import React, { FC } from "react";

const OfferCard = ({ id, img }) => {
  return (
    <div className=" relative w-full h-full group cursor-pointer ">
      <img src={img} className="w-full h-full rounded-lg  top-0  " alt=""  />
      <Link href={"/marketplace/"+id} className="w-[50%]  h-[52px] bg-red rounded-full absolute hover:scale-[1.1] z-[10] bottom-[27px] left-1/2 -translate-x-1/2  good text-black flex items-center justify-center bg-white ">
        En Profiter
      </Link>
      <Link href={"/marketplace/"+id} className="absolute z-[-1] w-full h-full top-0 pb-[80px] bg-[#696564] text-white text-3xl rounded-xl opacity-[90%]  justify-normal items-center  text-center flex group-hover:z-[3]">
        {" "}
        PROFITEZ DE L’OFFRE AVANT QU’IL NE SOIT TROP TARD !!!!!!
      </Link>
    </div>
  );
};

export default OfferCard;