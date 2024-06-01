import React from "react";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
type props = {
  data: any;
};
const CarInformation = ({ data }: props) => {
  return (
    <div className="w-[85%] sm:w-[90%] justify-center items-center   ">
       {data.Car && (
                <>
      <h1 className="good text-2xl sm:text-3xl my-14">Mon vehicule</h1>

      <div className=" bg-gradient-to-r 2xl:h-[800px] max-sm:h-[700px] h-[500px] mb-10 max-sm:rounded-[50px] rounded-md relative from-[#3E3D45] to-[#202020] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] ">
        <img
          src="/assets/serv/back.png"
          className="object-cover max-sm:h-[700px] h-[500px] 2xl:h-[800px] "
        />
        <div className="w-full h-full absolute top-0 left-0 grid  max-sm:grid-rows-[1fr_2fr]  sm:grid-cols-[1fr_1fr]  gap-[50px]  items-start sm:justify-center sm:items-center text-black ">
          <div className="flex flex-row order-2 sm:order-1 items-start sm:items-center rounded-[50px] justify-around w-full h-full text-white ">
            <div className="flex flex-col justify-start gap-6 sm:gap-10 text-xs font-semibold md:text-sm  2xl:text-3xl pl-2 text-nowrap lg:text-lg underline">
              <p>Votre Modele</p>
              <p>Numéro de série VIN </p>
              <p>Année de fabrication :</p>
              <p>Date d achat :</p>
              <p>Kilometrage : </p>
              <p>Le prix :</p>
              <p>Garentie Restente : </p>
            </div>
            <div className="flex flex-col justify-end gap-6 sm:gap-10 text-xs font-semibold md:text-sm 2xl:text-3xl text-nowrap lg:text-lg">
             
                  <p>{data.Car.Modele}</p>
                  <p>{data.Car.Modele}</p>
                  <p>{data.Car.Modele}</p>
                  <p>{data.Car.Date_Achat}</p>
                  <p>{data.Car.Date_Achat}</p>
                  <p>{data.Car.Prix_Vente}</p>
                  <p>{data.Car.Garantie}</p>
               
            </div>
          </div>
          <img
            src="/assets/serv/carr.png"
            className="flex 2xl:h-[800px] w-full h-full justify-center order-1 sm:order-2 items-center sm:rounded-r-md max-sm:rounded-t-[50px] sm:rounded-l-[60px] bg-[#ECECEC]"
          />
        </div>
      </div>
      </>
              )}
    </div>
  );
};

export default CarInformation;
/*  <div className="flex max-sm:flex-col w-full items-center justify-around md:flex-row gap-10 2xl:gap-10">
        <Link
          href={`haha`}
          download={`haha`}
          className="w-[267px] sm:w-[35%] sm:text-sm md:text-lg lg-text-xl 2xl:text-3xl text-lg h-[60px] text-nowrap flex flex-row items-center 2xl:py-10 p-[0px_9.81px_0px_9.81px] rounded-[3.27px] justify-around font-semibold py-2 text-center bg-[#ECECEC] shadow-xl"
        >
          <p className="w-[80%]">Contrat de vente</p>
          <MdOutlineFileDownload className="text-3xl md:text-2xl lg:text-3xl sm:text-xl" />
        </Link>
        <Link
          href={`haha`}
          download={`haha`}
          className="w-[267px] sm:w-[35%] sm:text-sm md:text-lg lg-text-xl 2xl:text-3xl  text-lg h-[60px] text-nowrap flex flex-row items-center 2xl:py-10  p-[0px_9.81px_0px_9.81px] rounded-[3.27px] justify-around font-semibold py-2 text-center bg-[#ECECEC] shadow-xl"
        >
          <p className="w-[80%] sm:text-wra md:text-nowrap">
            Garentie et entretien
          </p>
          <MdOutlineFileDownload className="text-3xl md:text-2xl lg:text-3xl sm:text-xl" />
        </Link>
        <Link
          href={`haha`}
          download={`haha`}
          className="w-[267px]   sm:w-[35%] sm:text-sm md:text-lg lg-text-xl 2xl:text-3xl text-lg h-[60px] text-nowrap flex flex-row items-center 2xl:py-10 p-[0px_9.81px_0px_9.81px] rounded-[3.27px] justify-around font-semibold py-2 text-center bg-[#ECECEC] shadow-xl"
        >
          <p className="sm:font-bold w-[80%]">Facture d&apos;achat</p>
          <MdOutlineFileDownload className="sm:text-xl md:text-2xl 2xl:text-5xl lg:text-3xl text-3xl" />
        </Link>
      </div> */
