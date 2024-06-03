import FilterSideBar from "./components/FilterSideBar";
import FirstSec from "./components/FirstSec";
import MarketSection from "./components/MarketSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Market Place",
  description: "La meilleur ",
};
const page = () => {
  return (
    <div>
      <FirstSec />
      <MarketSection />
    </div>
  );
};

export default page;
