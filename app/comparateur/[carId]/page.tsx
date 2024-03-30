import React from "react";
import ClientPage from "./components/ClientPage";
import data from "@/app/[productId]/components/data";
import Caracteristiques, {
  CaracteristiquesProps,
} from "@/app/[productId]/components/Caracteristiques";
export interface modelTitle {
  modelName: string;
  modelId: string;
}

const page = async ({ params }: { params: { carId: string } }) => {
  // let data = await fetch("https://axeiny.tech:4004/car/");

  // let Cars: Array<CaracteristiquesProps> = await data.json();
  let Cars = data;

  // Cars = Cars.slice(1);
  // console.log(Cars,"###########");

  let modelTitles: Array<modelTitle> = Cars.map((el) => {
    return { modelName: el.Modele, modelId: el._id };
  });
  return (
    <div>
      <ClientPage modelTiles={modelTitles} Cars={Cars} firstId={params.carId} />
    </div>
  );
};

export default page;
