import React from "react";
import ClientPage from "./components/ClientPage";

import Caracteristiques, {
  CaracteristiquesProps,
} from "@/app/marketplace/[productId]/components/Caracteristiques";
import axios from "axios";
async function getData() {
  const res = await fetch('https://axeiny.tech:4004/car/', { cache: 'no-store' })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export interface modelTitle {
  modelName: string;
  modelId: string;
}

const page = async ({ params }: { params: { carId: string } }) => {

  let Cars = await getData();


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
