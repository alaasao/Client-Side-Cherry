import Image from "next/image";
import "@mantine/core/styles.css";
import { Button, MantineProvider } from "@mantine/core";
import { Button as But } from "@/components/ui/button";
import Nav from "./components/Nav";
import VideoCover from "./components/VideoCover";

export default function Home() {
  return (
    <div className="">
      <VideoCover />
      <div id="jj">fdsffd</div>
    </div>
  );
}
