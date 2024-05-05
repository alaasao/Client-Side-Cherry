import React, { useState } from "react";
import data from "./components/data";
import Caracteristiques from "./components/Caracteristiques";
import axios from "axios";
async function getData(id:string) {
  const res = await fetch('https://axeiny.tech:4004/car/'+id)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default   async function Page({ params }: { params: { productId: string } }) {
const car= await getData(params.productId)

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
