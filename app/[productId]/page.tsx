import React from "react";
import data from "./components/data";
import Caracteristiques from "./components/Caracteristiques";
export default function Page({ params }: { params: { productId: string } }) {
  let car = data.filter((e) => e._id === params.productId)[0];

  return (
    <div>
      <Caracteristiques
        _id={car._id}
  
        Images={car.Images}
        Modele={car.Modele}
        Garentie={car.Garentie}
        Disponabilite={car.Disponabilite}
        Prix_TTC={car.Prix_TTC}
        Moteur={car.Moteur}
        updatedAt={car.updatedAt}
        MoteurObj={car.MoteurObj}
        ConfortObj={car.ConfortObj}
        LookObj={car.LookObj}
        SecurityObj={car.SecurityObj}
        VehiculeObj={car.VehiculeObj}
        createdAt={car.createdAt}
        PromoObj={car.PromoObj}
        
        __v={car.__v}
      />
    </div>
  );
}
