import React from "react";
import Link, { LinkProps } from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";

interface CardProps {
  Images: { Images: string[]; Color: string }[];
  Modele: string;
  price: number;
  id: String;
}
const Nouveau = (props: CardProps) => {
  return (
    <div className="w-[90%] rounded-lg">
      <div className="flex flex-col mt-10 rounded-lg justify-center items-start h-full w-full overflow-hidden shadow-[5px_3.49px_10px_0px_rgba(0,0,0,0.25)] ">
        <div className="relative h-full  top-0 left-0  ">
          <p className="absolute  flex w-[60px] sm:w-[100px] lg:w-[120px] 2xl:w-[250px] border-y border-black sm:h-[30px] lg:h-[50px] 2xl:h-[50px] sm:text-center text-start  items-center text-white text-[0.7rem] skew-y-[-40deg] h-[20px] bg-[#D12621] ">
            <span className=" text-xs xl:text-md  p-2 skew-y-[1deg] font-bold ">
              Nouveau
            </span>
          </p>
        </div>
        <img
          src={props.Images[0].Images[0]}
          className="w-full h-full  object-cover lg:h-[320px] rounded-r-none  items-center"
          alt="haha"
          width={500}
          height={500}
        />
        <div className="bg-[#F4F4F4] pt-8 w-full flex flex-col items-start pl-6 gap-6">
          <div className="flex flex-col w-[90%] items-baseline gap-6 border-b p-3 border-b-[#929292]">
            <h1 className="text-5xl">{props.Modele}</h1>
            <h1 className="text-3xl text-[#D12621] font-[500]">
              {props.price}.00 DZD
            </h1>
          </div>
          <div className="flex flex-col ">
            <p className="text-[#888888]">
              Découvrez le Tiggo 8 Pro Max : lélégance et la puissance combinées
              dans un design sophistiqué. Avec un intérieur spacieux et moderne,
              ce véhicule offre confort et praticité à chaque trajet.
            </p>
            <div className="flex items-center justify-end w-[90%] h-full">
              <Link
                href={"/marketplace/" + props.id}
                className="bg-[#D12621] rounded-[10.68px] p-2 text-white border-[0.89px]  no-underline"
              >
                <span className=" p-2 text-[0.5rem] sm:text-xs lg:text-2xl  2xl:text-3xl  ">
                  Voir Plus
                </span>
              </Link>
            </div>
            <div className="flex items-center w-full text- justify-center border-b p-3 border-b-[#929292] ">
              <Link href={`/about`} className="text-[#888888] text-xl ">
                contacter nous
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center py-6 gap-6">
              <div className="flex flex-row text-2xl gap-6 text-[#888888]">
                <FaPhoneVolume />
                <p>0542089255</p>
              </div>
              <div className="flex flex-row text-2xl gap-6 text-[#888888]">
                <FaLocationPin />
                <p>Bejaia,Algerie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nouveau;
