import React, { FC, Dispatch, SetStateAction } from "react";
import { MdDone, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface FilterList {
  categorie: string[];
  modele: string[];
  etat: string[];
  prix: number[];
}

interface FilterCarProps {
  filterList: FilterList;
  setFilterList: Dispatch<SetStateAction<FilterList>>;
  catName: string;
  catProps: string[];
}
const FilterCar: FC<FilterCarProps> = ({
  setFilterList,
  filterList,
  catName,
  catProps,
}: FilterCarProps) => {
  function toggle(array: Array<string>, word: string) {
    if (array.filter((e) => e === word)[0]) {
      return array.filter((e) => e !== word);
    } else {
      array.push(word);

      return array;
    }
  }
  let [open, setOpen] = React.useState(false);
  return (
    <div className="w-full relative">
      <div
        className={`flex items-center   justify-between text-[#858282] cursor-pointer mx-auto w-full  h-[40px]   transition-all duration-500  ${
          open ? "" : "border-[#858282] border-b-[0.5px]"
        } `}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="font-bold   "> {catName}</div>

        <div className="  cursor-pointer">
          {" "}
          {open ? (
            <MdKeyboardArrowUp className="" />
          ) : (
            <MdKeyboardArrowDown className="" />
          )}
        </div>
      </div>
      <div
        className={`flex flex-col gap-x-[10px]  rounded-b-lg  w-full pl-[5px] text-[#858282] transition-all duration-500  top-[50px] left-0 bg-white z-[300] ${
          open ? "" : "opacity-0"
        }`}
      >
        {catProps.map((elem, i) => {
          return (
            <div
              className={`flex flex-col  gap-x-[10px]  transition-all duration-500 ${
                open ? "h-[40px]" : "h-0 opacity-0"
              }`}
              key={i - 1000 + catName}
            >
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  if (!open) {
                    return;
                  }
                  setFilterList({
                    ...filterList,
                    [catName]: toggle(
                      filterList[
                        catName as keyof typeof filterList
                      ] as typeof filterList.categorie,
                      elem,
                    ),
                  });
                }}
              >
                {filterList[catName as keyof typeof filterList].some(
                  (e) => e === elem,
                ) ? (
                  <div
                    className={`w-[20px]  rounded-md border-[0.5px]  bg-[#FF4423] ${
                      open ? "h-[20px]" : "h-0 opacity-0"
                    }
     
         `}
                  >
                    <MdDone className="text-white " />{" "}
                  </div>
                ) : (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  border-[#858282] 
  
      `}
                  ></div>
                )}

                <p
                  className={` text-[#5E5959] font-semibold ${
                    open ? "h-[20px]" : "h-0 opacity-0"
                  }`}
                >
                  {elem}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCar;
