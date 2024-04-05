import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
interface FromProps {
  name: string;
}
const Form: FC<FromProps> = ({ name }: FromProps) => {
  return (
    <div className="bg-[#e9e8e896] py-[50px] rounded-2xl flex flex-col">
      <div className="font-bold   text-4xl pl-[20px] mb-[20px]">
        {" "}
        Prenez rendez-vous
      </div>
      <form className="w-full flex gap-x-[12vw] gap-y-[4vw] flex-wrap">
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Nom</div>
          <input
            type="text"
            placeholder="Votre nom "
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Phone Number</div>
          <input
            type="text"
            placeholder="numéro telephone "
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Addresse</div>
          <input
            type="text"
            placeholder="Addresse"
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">E -mail</div>
          <input
            type="text"
            placeholder="E -mail"
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Date</div>
          <input
            type="Piece choisie"
            placeholder="12/05/2024"
            className=" outline-none bg-[#F6F7F9] h-[56px] px-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Nom</div>
          <input
            type="text"
            value={name}
            readOnly
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
      </form>
      <div className="w-[180px] bg-[#DB2719] flex justify-center items-center h-[50px] text-white mt-[60px] gap-[10px] self-end mr-[40px] rounded-xl">
        {" "}
        envoyer
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Form;
