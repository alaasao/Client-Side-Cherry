import Image from "next/image";
import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { Button as But } from "@/components/ui/button";
import Nav from "./components/Nav";
import VideoCover from "./components/VideoCover";
import Recherche from "./components/Recherche";
import Summum from "./components/Summum";
import Explore from "./components/Explore";
import Slider from "./components/Slider";
import Offers from "./components/Offers";

export default function Home() {
  return (
    <div className=" w-screen overflow-hidden">
      <VideoCover />
      <Recherche />
      <Summum />
      <Explore />
      <Offers />
    </div>
  );
}
