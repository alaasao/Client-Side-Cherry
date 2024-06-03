import React from "react";
import Events from "./eventComponents/events";
import Container from "../components/Container";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Events",
  description: "La meilleur ",
};
const page = () => {
  return (
    <div className="h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black">
      <Container
        title=" BIENVENUE DANS LE "
        subtitle=" Suivez  tous les évènements et les dernières actualités de l univers cherY"
        redtitle="Chery MAG"
      />
      <div className="w-full">
        <Events />
      </div>
    </div>
  );
};

export default page;
