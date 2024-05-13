import React from "react";
import Data from "../eventComponents/data";
type DemoProp = {
  params: any;
};
const page = (props: DemoProp) => {
  const foundObject = Data.find((obj) => obj._id == props.params.eventid);
  return (
    <div className="h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black">
      <p className="text-sm sm:text-lg  my-4 md:text-2xl lg:text-4xl mt-8 w-[80%] text-center good ">
        {foundObject?.Title}
      </p>

      <div className="w-[90%] flex flex-col items-center justify-center">
        <img
          alt="car"
          className=" w-[95%] rounded-md md:w-[80%]  object-cover"
          src={`${foundObject?.Images}`}
          width={200}
          height={200}
        />
      </div>
      <div className="w-[85%] text-xs sm:text-sm md:text-xl  mt-4">
        {/*     {foundObject?.Description.split('.').map((line, index) => (
                    <React.Fragment key={index}>
                      <div className='mb-3'>
                        {line}
                      </div>
                    </React.Fragment>
                ))} */}
        <p>{foundObject?.Description}</p>
      </div>
    </div>
  );
};

export default page;
