import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-screen px-[5.7vw] h-auto lg:h-[480px]  bg-white flex   py-[90px] border-t-2  border-[#13131329]  flex-col items-end ">
      <div className="w-full border-b-[0.5px] border-[#13131329] pb-[36px] flex justify-between  max-lg:flex-col max-lg:gap-[36px] max-lg:items-center ">
        <div className="flex flex-col items-start">
          <Link href={"/"} className="flex flex-col items-center mb-[26px]">
            <img src="../assets/logo.png" alt="logo" className="w-32 " />
            <div className="good text-[16px] font-normal text-[#D12621] ">
              speed motors
            </div>
          </Link>{" "}
          <p className="text-[#13131399] w-[310px] max-lg:hidden">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] max-md:grid-cols-[1fr]  w-[40vw] max-lg:w-full max-md:gap-[36px] max-md:w-1/2">
          <div className="flex flex-col gap-[24px] text-[#13131399] max-lg:items-center ">
            <h1 className="text-black font-[600] text-xl">About Us</h1>
            <Link href={"/about/#location"} className="">
              Location
            </Link>
            <Link href="/FAQ">FAQ</Link>
            <Link href={"/about/#horaire"}>Horaires de travail</Link>
            <Link href={"/about/contact"}>Contact</Link>
          </div>
          <div className="flex flex-col gap-[24px] text-[#13131399] max-lg:items-center max-md:border-y-2 max-md:border-[#13131329] max-md:py-[36px] ">
            <h1 className="text-black font-[600] text-xl">Community</h1>
            <Link href={"/events"} className="">
              Events
            </Link>
            <Link href={"/events"}>Blog</Link>
          </div>
          <div className="flex flex-col gap-[24px] text-[#13131399] max-lg:items-center  ">
            <h1 className="text-black font-[600] text-xl">Socials</h1>
            <Link href={"insta"}>Instagram</Link>
            <Link href={"face"}>Facebook</Link>
          </div>
        </div>
      </div>
      <div className="w-[350px] text-black font-semibold flex  gap-[60px] pt-[36px] max-lg:w-full max-lg:justify-between">
        <p>Privacy & Policy</p>
        <p>Terms & Condition</p>
      </div>
    </div>
  );
};

export default Footer;
