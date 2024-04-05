import { CaracteristiquesProps } from "@/app/marketplace/[productId]/components/Caracteristiques";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import ComSec from "./ComSec";
interface CompareProps {
  firstCar: CaracteristiquesProps;
  secondCar: CaracteristiquesProps | null;
}
const Compare: FC<CompareProps> = ({ firstCar, secondCar }: CompareProps) => {
  let path = usePathname();
  return (
    <div className="w-full   px-[4vw] ">
      <div className="w-full border-t-[1px] border-black px-[2vw] py-[70px] flex flex-col gap-[30px]  ">
        <div className="w-full grid grid-cols-[1fr_1fr] gap-[4vw] h-[400px] max-md:h-[40vw] md:mb-[40px]">
          <div className="w-full h-full rounded-3xl shadow-xl ">
            <img
              src={firstCar.Images[0].Images[0]}
              alt=""
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className="w-full h-full rounded-3xl shadow-xl relative">
            <img
              src={secondCar?.Images[0].Images[0]}
              alt=" "
              className="w-full h-full rounded-3xl"
            />
            {!secondCar && (
              <a
                href={`${path}/#compare`}
                className="absolute border-dashed border-[0.5px] border-[#939393]  sm:text-3xl text-[#939393]  w-full flex justify-center items-center text-center py-[20px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
              >
                + Ajouter une véhicule{" "}
              </a>
            )}
          </div>
        </div>
        <ComSec
          FirstProps={firstCar.MoteurObj}
          SecondProps={secondCar?.MoteurObj}
          Title="Moteur"
        />
        <ComSec
          FirstProps={firstCar.ConfortObj}
          SecondProps={secondCar?.ConfortObj}
          Title="Confort"
        />
        <ComSec
          FirstProps={firstCar.LookObj}
          SecondProps={secondCar?.LookObj}
          Title="Look"
        />
        <ComSec
          FirstProps={firstCar.SecurityObj}
          SecondProps={secondCar?.SecurityObj}
          Title="Security"
        />
        <ComSec
          FirstProps={firstCar.VehiculeObj}
          SecondProps={secondCar?.VehiculeObj}
          Title="Vehicle"
        />
      </div>
    </div>
  );
};

export default Compare;
