import React, { FC } from "react";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";

const Main: FC<MainProps> = ({
  _id,

  Modele,
  Garentie,
  Disponabilite,
  Prix_TTC,
  Moteur,
  updatedAt,
}: MainProps) => {
  return (
    <div className="w-full flex flex-col gap-[70px] max-md:gap-[30px] capitalize">
      <div className="grid grid-cols-3 gap-[50px] max-md:gap-[15px] w-full">
        <div className="flex flex-col gap-[30px] max-md:gap-[10px]  font-medium">
          <h1 className="text-2xl max-md:text-[16px] text-[#959494]">Modéle</h1>
          <p className="capitalize  text-2xl max-md:text-[16px]">
            {} {Modele}{" "}
          </p>
        </div>
        <div className="flex flex-col gap-[30px] max-md:gap-[10px]  font-medium">
          <h1 className="text-2xl max-md:text-[16px] text-[#959494]">
            Garentie{" "}
          </h1>
          <p className="capitalize  text-2xl max-md:text-[16px]">{Garentie}</p>
        </div>
        <div className="flex flex-col gap-[30px] max-md:gap-[10px]  font-medium">
          <h1 className="text-2xl max-md:text-[16px] text-[#959494]">
            Disponabilité
          </h1>
          <div className="capitalize  text-2xl max-md:text-[16px]">
            {Disponabilite ? (
              <div className="text-[#39A63D] flex items-center gap-[20px] max-md:gap-[5px] ">
                <div className="rounded-full flex w-[30px] h-[30px] max-md:w-[15px] max-md:h-[15px] justify-center items-center border-2 border-[#39A63D] ">
                  <MdDone className="text-[20px] max-md:text-[10px]" />
                </div>
                <span className=" max-md:text-[14px] ">Disponible</span>
              </div>
            ) : (
              <div className="text-[#DB2719] flex items-center gap-[20px] max-md:gap-[5px]">
                <div className="rounded-full flex w-[30px] h-[30px]  max-md:w-[15px] max-md:h-[15px] justify-center items-center border-2 border-[#DB2719] ">
                  <IoClose className="text-[20px] max-md:text-[10px]" />
                </div>
                <span className=" max-md:text-[14px]">InDisponible</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[50px] max-md:gap-[15px]  w-full">
        <div className="flex flex-col gap-[30px] max-md:gap-[10px]  font-medium">
          <h1 className="text-2xl max-md:text-[16px] capitalize  text-[#959494]">Prix_TTC</h1>
          <p className="capitalize  text-2xl max-md:text-[16px]">
            {Prix_TTC.toLocaleString()}DZ
          </p>
        </div>
        <div className="flex flex-col gap-[30px] max-md:gap-[10px]  font-medium">
          <h1 className="text-2xl max-md:text-[16px] text-[#959494]">
            Moteur{" "}
          </h1>
          <p className="capitalize  text-2xl max-md:text-[16px]">{Moteur}</p>
        </div>
        <div className="flex flex-col gap-[30px] max-md:gap-[10px]  font-medium">
          <h1 className="text-2xl max-md:text-[16px] text-[#959494] ">
            Mise à jour{" "}
          </h1>
          <p className="capitalize  text-2xl max-md:text-[16px]">
            {updatedAt.slice(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
interface MainProps {
  _id: string;

  Modele: string;
  Garentie: string;
  Disponabilite: string;
  Prix_TTC: number;
  Moteur: string;
  updatedAt: string;
}
