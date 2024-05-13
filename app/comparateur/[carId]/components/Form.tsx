"use client";
import { CaracteristiquesProps } from "@/app/marketplace/[productId]/components/Caracteristiques";
import React, { useState, Dispatch, SetStateAction, FC } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { modelTitle } from "../page";
interface FormProps {
  firstCarId: string;
  setFirstCarId: Dispatch<React.SetStateAction<string>>;
  secondCarId: string | null;
  setSecondCarId: Dispatch<SetStateAction<string | null>>;
  modelTiles: Array<modelTitle>;
}
const Form: FC<FormProps> = ({
  firstCarId,
  setFirstCarId,
  secondCarId,
  setSecondCarId,
  modelTiles,
}: FormProps) => {
  let [firstOpen, setFirstOpen] = useState(false);
  let [secondOpen, setSecondOpen] = useState(false);

  let [firstField, setFirstField] = useState(
    modelTiles.filter((e) => e.modelId === firstCarId)[0].modelName,
  );
  let [secondField, setSecondField] = useState("");
  let [FirstId, setFirstId] = useState<string>(firstCarId);
  let [SecondId, setSecondId] = useState<string>("");
  return (
    <div className="w-full flex flex-col px-[5vw] items-center mt-[27px] pb-[80px]">
      <div className="text-4xl mb-[60px] text-center" id="compare">
        Comparateur de voitures
      </div>
      <div className="w-full flex justify-between items-center  mb-[30px] max-md:flex-col max-md:gap-[40px] ">
        <div className="relative w-1/3 max-md:w-[90%]">
          <input
            type="text"
            placeholder="Choisé le model"
            className="w-full h-[50px] border border-[#9C9C9C] rounded-lg pl-[2vw] outline-none"
            onChange={(e) => {
              setFirstField(e.target.value);
              setFirstOpen(true);
            }}
            onClick={() => setFirstOpen((prev) => !prev)}
            value={firstField}
          />
          <div
            className="text-[#B7B7B7] text-3xl cursor-pointer absolute top-[50%] -translate-y-1/2 right-[10px] z-10 "
            onClick={() => setFirstOpen((prev) => !prev)}
          >
            {firstOpen ? (
              <MdKeyboardArrowUp className="" />
            ) : (
              <MdKeyboardArrowDown className="" />
            )}
          </div>
          <div
            className={` absolute top-[50px]  w-full bg-white transition-all duration-700 cursor-pointer z-[11] ${
              firstOpen ? "h-auto opacity-1" : "h-0 opacity-0"
            } `}
          >
            {modelTiles.map((e) => {
              return (
                <div
                  key={e.modelId}
                  className={`w-full first:rounded-t-lg hover:bg-[#d5d1d140]  bg-white transition-all duration-700 flex items-center pl-[10px]  ${
                    firstOpen ? " h-[50px] opacity-1" : "h-0 opacity-0 "
                  } ${
                    e.modelName.toLowerCase().includes(firstField)
                      ? ""
                      : "hidden"
                  } `}
                  onClick={() => {
                    setFirstField(e.modelName);
                    setFirstId(e.modelId);
                    setFirstOpen(false);
                  }}
                >
                  {e.modelName}
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative w-1/3 max-md:w-[90%]">
          <input
            type="text"
            placeholder="Choisé le model"
            className="w-full h-[50px] border border-[#9C9C9C] rounded-lg pl-[2vw] outline-none"
            onChange={(e) => {
              setSecondField(e.target.value);

              setSecondOpen(true);
            }}
            value={secondField}
            onClick={() => setSecondOpen((prev) => !prev)}
          />{" "}
          <div
            className="text-[#B7B7B7] text-3xl cursor-pointer absolute top-[50%] -translate-y-1/2 right-[10px]  z-10"
            onClick={() => setSecondOpen((prev) => !prev)}
          >
            {" "}
            {secondOpen ? (
              <MdKeyboardArrowUp className="" />
            ) : (
              <MdKeyboardArrowDown className="" />
            )}
          </div>
          <div
            className={` absolute top-[50px]  w-full bg-white transition-all duration-700 cursor-pointer  z-[999] ${
              secondOpen ? "h-auto opacity-1" : "h-0 opacity-0"
            } `}
          >
            {modelTiles.map((e) => {
              return (
                <div
                  key={e.modelId}
                  className={`w-full first:rounded-t-lg hover:bg-[#d5d1d140]  bg-white transition-all duration-700 flex items-center pl-[10px]  ${
                    secondOpen ? " h-[50px] opacity-1" : "h-0 opacity-0 "
                  } ${
                    e.modelName.toLowerCase().includes(secondField)
                      ? ""
                      : "hidden"
                  }  `}
                  onClick={() => {
                    setSecondField(e.modelName);

                    setSecondOpen(false);

                    setSecondId(e.modelId);
                  }}
                >
                  {e.modelName}
                </div>
              );
            })}
          </div>
        </div>
      </div>{" "}
      <div
        className="bg-[#DB2719] w-[190px] h-[50px] flex justify-center items-center text-white md:self-end rounded-lg cursor-pointer hover:scale-[1.02] "
        onClick={() => {
          if (firstField === "" || secondField === "") {
            return;
          }

          setFirstCarId(FirstId);

          setSecondCarId(SecondId);
        }}
      >
        comparer{" "}
      </div>
    </div>
  );
};

export default Form;
