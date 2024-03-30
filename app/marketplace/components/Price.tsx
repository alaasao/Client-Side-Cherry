import React, {
  Dispatch,
  FC,
  useEffect,
  SetStateAction,
  useState,
} from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
interface FilterList {
  colors: string[];
  motors: string[];
  energie: string[];
  boite: string[];
  prix: number[];
}
interface PriceProps {
  filterList: FilterList;
  setFilterList: React.Dispatch<React.SetStateAction<FilterList>>;
}
const Price: FC<PriceProps> = ({ filterList, setFilterList }: PriceProps) => {
  let [minOpen, setMinOpen] = useState(false);
  let [maxOpen, setMaxOpen] = useState(false);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(10000000);
  useEffect(() => {
    setFilterList({
      ...filterList,
      prix: [minValue, maxValue],
    });
  }, [minValue, maxValue]);
  return (
    <div
      className={`col-span-2 grid grid-cols-[1fr_1fr] gap-[40px] transition-all duration-500 ${
        maxOpen || minOpen ? "mb-[40px]" : ""
      }`}
    >
      <div className="w-full relative">
        <div
          className={`flex items-center   justify-between text-[#858282] mx-auto w-full  h-[40px] mb-[10px]  transition-all duration-500  ${
            minOpen ? "" : "border-[#858282] border-b-[0.5px]"
          } `}
        >
          <div className="font-bold   "> Min Prix</div>

          <div
            className="  cursor-pointer"
            onClick={() => setMinOpen((prev) => !prev)}
          >
            {" "}
            {minOpen ? (
              <MdKeyboardArrowUp className="" />
            ) : (
              <MdKeyboardArrowDown className="" />
            )}
          </div>
        </div>

        <div
          className={` absolute  bg-white mb-[10px] rounded-b-lg  w-full pl-[5px] text-[#858282] transition-all duration-500  top-[50px] left-0  z-[300] ${
            minOpen ? "h-[40px]" : "opacity-0 h-0"
          }`}
        >
          {" "}
          <div
            className={`relative w-full duration-500 ${
              minOpen ? "h-full" : "opacity-0 h-0"
            }`}
          >
            <input
              type="number"
              className="w-full h-full placeholder:text-[#858282] text-[#858282] outline-none  bg-white"
              value={minValue}
              onChange={(e) => {
                setMinValue(parseInt(e.target.value));
              }}
            />
            <div
              className={`absolute right-[5px] top-1/2 -translate-y-1/2 ${
                minOpen ? "" : "hidden"
              }`}
            >
              <MdKeyboardArrowUp
                className=" text-[#F70202]   cursor-pointer"
                onClick={() => {
                  if (maxValue === minValue || minValue === 10000000) {
                    return;
                  }

                  setMinValue((prev) => prev + 1);
                }}
              />
              <MdKeyboardArrowDown
                className=" text-[#F70202] cursor-pointer"
                onClick={() => {
                  if (maxValue === minValue || minValue === 0) {
                    return;
                  }

                  setMinValue((prev) => prev - 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative">
        <div
          className={`flex items-center   justify-between text-[#858282] mx-auto w-full  h-[40px] mb-[10px]  transition-all duration-500  ${
            maxOpen ? "" : "border-[#858282] border-b-[0.5px]"
          } `}
        >
          <div className="font-bold   "> Max Prix</div>

          <div
            className="  cursor-pointer"
            onClick={() => setMaxOpen((prev) => !prev)}
          >
            {" "}
            {maxOpen ? (
              <MdKeyboardArrowUp className="" />
            ) : (
              <MdKeyboardArrowDown className="" />
            )}
          </div>
        </div>

        <div
          className={` absolute  bg-white mb-[10px] rounded-b-lg  w-full pl-[5px] text-[#858282] transition-all duration-500  top-[50px] left-0  z-[300] ${
            maxOpen ? "h-[40px]" : "opacity-0 h-0"
          }`}
        >
          {" "}
          <div
            className={`relative w-full duration-500 ${
              maxOpen ? "h-full" : "opacity-0 h-0"
            }`}
          >
            <input
              type="number"
              className="w-full h-full text-[#858282]  outline-none bg-white "
              value={maxValue}
              onChange={(e) => {
                setMaxValue(parseInt(e.target.value));
              }}
            />
            <div
              className={`absolute right-[5px] top-1/2 -translate-y-1/2 ${
                maxOpen ? "" : "hidden"
              }`}
            >
              <MdKeyboardArrowUp
                className=" text-[#F70202]   cursor-pointer"
                onClick={() => {
                  if (maxValue === minValue || maxValue === 10000000) {
                    return;
                  }
                  setMaxValue((prev) => prev + 1);
                }}
              />
              <MdKeyboardArrowDown
                className=" text-[#F70202]   cursor-pointer"
                onClick={() => {
                  if (maxValue === minValue || maxValue === 0) {
                    return;
                  }

                  setMaxValue((prev) => prev - 1);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
