"use client";
import React from "react";
import Container from "../components/Container";
import OffreCard from "./offresComponents/OffresCard";
import Nouveau from "./offresComponents/Nouveau";
import axios from "axios";
import { useState, useEffect } from "react";
import OffresCard from "./offresComponents/OffresCard";
const Page = ({ params }: { params: { productId: string } }) => {
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
    axios.get("https://axeiny.tech:4004/car").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className=" h-[95%] w-screen flex items-center gap-8 flex-col justify-center mb-[50px] bg-white text-black">
      <Container
        title={"decouvrez nos offres du moment chez "}
        subtitle={
          "Comparez plusieurs offres et trouvez facilement votre véhicule.Renseignez-vous sur les offres de toute notre gamme "
        }
        redtitle={"chery"}
      />
      <div className="w-screen flex flex-col lg:flex-row justify-evenly   mt-10   h-[90%]">
        <div className="xl:w-[70%] w-full flex flex-col justify-start items-center  first:mb-0 mt-10 ">
          {data.map((e, i) => {
            return (
              <OffresCard
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
                PromoObj={e.PromoObj}
              />
            );
          })}
        </div>
        <div className="items-center justify-center  xl:w-[30%] max-xl:hidden">
          <Nouveau
            Images={data[0].Images}
            Modele={data[0].Modele}
            id={data[0]._id}
            price={data[0].Prix_TTC}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
