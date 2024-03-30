"use client";
import React, { FC, useEffect, useState } from "react";
import Form from "./Form";
import { modelTitle } from "../page";
import { CaracteristiquesProps } from "@/app/[productId]/components/Caracteristiques";
import Compare from "./Compare";
interface ClientPageProps {
  modelTiles: Array<modelTitle>;
  Cars: Array<CaracteristiquesProps>;
  firstId: string;
}
const ClientPage: FC<ClientPageProps> = ({
  modelTiles,
  Cars,
  firstId,
}: ClientPageProps) => {
  let [firstCarId, setFirstCarId] = useState<string>(firstId);
  let [secondCarId, setSecondCarId] = useState<string | null>(null);
  let [firstCar, setFirstCar] = useState<CaracteristiquesProps>(
    Cars.filter((e) => e._id === firstId)[0]
  );
  let [secondCar, setSecondCar] = useState<CaracteristiquesProps | null>(null);
  useEffect(() => {
    setFirstCar(Cars.filter((e) => e._id === firstCarId)[0]);
    setSecondCar(Cars.filter((e) => e._id === secondCarId)[0]);
  }, [firstCarId, secondCarId, Cars]);
  return (
    <div className="w-full">
      <Form
        firstCarId={firstCarId}
        setFirstCarId={setFirstCarId}
        secondCarId={secondCarId}
        setSecondCarId={setSecondCarId}
        modelTiles={modelTiles}
      />
      <Compare firstCar={firstCar} secondCar={secondCar} />
    </div>
  );
};

export default ClientPage;
