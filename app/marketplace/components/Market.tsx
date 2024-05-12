import React, { Dispatch, SetStateAction, FC, useState, useEffect } from "react";

import CarCard from "./CarCard";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { set } from "date-fns";
interface MarketProps {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  filterList: {
    colors: string[];
    motors: string[];
    energie: string[];
    boite: string[];
    prix: number[];
  };
}
const Market: FC<MarketProps> = ({
  filterList,
  isOpen,
  setIsOpen,
  searchKey,
  setSearchKey,

}: MarketProps) => {
  const [data, setData] = useState([
    {
      Masked: false,
      _id: "",
      Images: [
        {
          Color: "rouge",
          Images: ["../assets/marketplace/rename.png"],
        },
      ],
      Modele: "Tiggo  8 pro",
      Garentie: "2 years",
      Disponabilite: "Disponible",
      Prix_TTC: 155000,
      Moteur: "1.4",
      PromoObj: {
        IsPromo: true,
        Start: "2022-01-01T00:00:00.000Z",
        End: "2022-12-31T00:00:00.000Z",
        Value: 10,
      },
      MoteurObj: {
        Energie: "essence",
        Motricite: "4x4",
        Type_Moteur: "Type X",
        Cylidree: 0,
        Boite: "automatique",
        Consomation: "Low",
        Puissance: 100,
        Nombre_Cylindres: "0",
        Soupapes: 0,
        Accelaration: 2.9,
        Puissance_Tr: 100,
        Turbo: false,
        Nombre_Rapport_Boite: 1,
        Vitesse_Max: 250,
        Couple: 100,
      },
      ConfortObj: {
        Climatisation: "Auto",
        Direction: "Assistee",
        Ecran: "15 inch",
        Accoudoir: "Leather",
        Sieges_Chauffants: true,
        Boire_A_Gants_Refrigerante: false,
        Ordinateur_De__Bord: true,
        Radar_De_Recul: true,
        Autoradio: "Bluetooth",
        bluetooth: true,
      },
      SecurityObj: {
        Airbag: 8,
        Regulateur_Limiteur_de_Vitesse: "Yes",
        Abs: true,
        Keyless: "Yes",
        Esp: true,
        Détecteur_Angle_Mort: true,
        Aide_Demarrage_Cote: true,
        Anti_Demarrage: true,
        Verrouillage_Centralise: "Yes",
        Alarme: "Yes",
      },
      LookObj: {
        Feux_Anti_Arouillard: ["LED"],
        Feux_Avant: "LED",
        Peinture_Metalisee: true,
        Toit: true,
        Vitres_Teintees: true,
        Feux_Jour: "LED",
        Feux_Arriere: "LED",
        Jantes: 20,
        Couleur_Poignees: "Black",
        Dimension_Pneumatique: "235/45 R20",
      },
      VehiculeObj: {
        Volume_Coffre: 500,
        Longueur: 5000,
        Largeur: 2000,
        Hauteur: 1500,
        Empattement: 3000,
        Suspension_Avant: "Independent",
        Suspension_Arriere: "Independent",
        Nombre_Places: 5,
        Nombre_Portes: 4,
        Reservoir: 0,
      },
      createdAt: "2024-03-26T22:40:55.502Z",
      updatedAt: "2024-03-26T22:40:55.502Z",
      __v: 0,
    },
  ]);
  useEffect(() => { 

    axios.get("https://axeiny.tech:4004/car").then((res) => {setData(res.data)})
  },[])
  return (
    <div className="bg-[#F1F1F0] relative flex  max-sm:flex-col   flex-wrap sm:justify-center gap-[30px]  px-[20px]  max-md:gap-[10px] pb-[100px] ">
      {data.map((e, i) => {
        return (
          <CarCard
            Modele={e.Modele}
            Images={e.Images}
            Moteur={e.Moteur}
            Prix_TTC={e.Prix_TTC}
            key={e._id + i}
            _id={e._id}
            MoteurObj={e.MoteurObj}
            LookObj={e.LookObj}
            SecurityObj={e.SecurityObj}
            VehiculeObj={e.VehiculeObj}
            filter={filterList}
            searchKey={searchKey}
          />
        );
      })}
    </div>
  );
};

export default Market;
