import Image from "next/image";
import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { Button as But } from "@/components/ui/button";
import Nav from "./components/Nav";
import VideoCover from "./components/VideoCover";
import Recherche from "./components/Recherche";
import Summum from "./components/Summum";
import Explore from "./components/Explore";
import Slider from "./components/Slider.jsx";
import Offers from "./components/Offers";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Chery",
  description: "La meilleur ",
};
export default function Home() {``
  return (
    <div className="   ">
      <VideoCover />
      <div className="bg-white w-screen overflow-hidden">
        <Recherche />
        <Summum />
        <Explore />
       <Offers/>
      </div>
    </div>
  );
}
