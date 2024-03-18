import Link from "next/link";
import React, { FC } from "react";

const Recherche:FC = () => {
  return (
    <div className="pt-[180px] px-[8.7vw] bg-white text-black w-full pb-[180px]">
      <h1 className="text-5xl font-medium mb-[90px]  mx-auto  text-center max-lg:text-4xl ">
        QUE RECHERCHEZ-VOUS ?
      </h1>
      <div className="flex justify-between w-full items-center max-lg:flex-col max-lg:gap-[20px]  ">
        <Link
          href={"/contact"}
          className="w-[270px] bg-[#D9D9D9] rounded-[8px] h-[75px] flex justify-center hover:scale-[1.1] items-center  gap-[12px]"
        >
          <img src="../assets/messagrie.png" alt="" />
          <p className="good capitalize text-xl">messagerie</p>
        </Link>
        <Link
          href={"/events"}
          className="w-[270px] bg-[#D9D9D9] rounded-[8px] h-[75px] flex justify-center items-center hover:scale-[1.1]  gap-[12px]"
        >
          <img src="../assets/actu.png" alt="" />
          <p className="good capitalize text-xl">actualitÉs</p>
        </Link>
        <Link
          href={"/aboute/#location"}
          className="w-[270px] bg-[#D9D9D9] rounded-[8px] h-[75px] flex justify-center items-center  gap-[12px] hover:scale-[1.1]"
        >
          <img src="../assets/location.png" alt="" />
          <p className="good capitalize text-xl">nous trouver</p>
        </Link>
      </div>
    </div>
  );
};

export default Recherche;
