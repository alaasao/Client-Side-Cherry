import React, { FC, Dispatch, SetStateAction } from "react";
import { MdDone } from "react-icons/md";

interface FilterList {
  colors: string[];
  motors: string[];
  energie: string[];
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

  // console.log(filterList[catName], catProps);
  return (
    <div>
      <h2 className="mb-[10px] text-[#858282] font-semibold text-[10px] capitalize">
        {catName}
      </h2>
      <div className="flex flex-col gap-[10px] w-full ">
        {catProps.map((elem, i) => {
          return (
            <div className="flex flex-col gap-[10px] " key={i - 1000 + catName}>
              <div
                className="flex gap-[8px] cursor-pointer "
                onClick={() => {
                  setFilterList({
                    ...filterList,
                    [catName]: toggle(
                      filterList[
                        catName as keyof typeof filterList
                      ] as typeof filterList.colors,
                      elem
                    ),
                  });
                }}
              >
                {filterList[catName as keyof typeof filterList].some(
                  (e) => e === elem
                ) ? (
                  <div
                    className={`w-[20px] h-[20px] rounded-md border-[0.5px]  bg-[#FF4423] 
       
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

                <p className="text-[#5E5959] font-semibold">{elem}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterCar;
