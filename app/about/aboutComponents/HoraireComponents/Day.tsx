import React from "react";
type Demoprops = {
  time: string;
  day: string;
};

const Day = (props: Demoprops) => {
  return (
    <div className="w-[90%] sm:w-[80%] flex flex-row justify-between px-6  py-4 items-center border-b-2 border-opacity-[25%] border-[#0C0C0C] font-bold">
      <div>{props.day}</div>
      <div>{props.time}</div>
    </div>
  );
};

export default Day;
