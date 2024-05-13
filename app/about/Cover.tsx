import React from "react";

type Demoprop = {
  src: string;
};
const Cover = (props: Demoprop) => {
  return (
    <div className="w-full">
      <img
        src={`${props.src}`}
        alt="presentation"
        className="w-full  md:w-full flex items-center justify-center px-4 mt-6 object-cover "
      ></img>
    </div>
  );
};

export default Cover;
