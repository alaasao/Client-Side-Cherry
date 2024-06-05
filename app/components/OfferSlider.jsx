"use client";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import React, { useState, useEffect } from "react";
import SliderCard from "./SliderCard";
import OfferCard from "./OfferCard";
import axios from "axios";
import Link from "next/link";
import { set } from "date-fns";


const OfferSlider = () => {
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
  const [perPage, setPerPage] = useState(1);
  const [loop, setLoop] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) {
        setLoop(false);
        setPerPage(3);
      } else if (windowWidth >= 768) {
        setPerPage(2);
        setLoop(true);
      } else {
        setPerPage(1);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    // Cleanup function to remove listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="bg-white h-[200px] w-full flex flex-row ">
      <div className=" relative w-full h-full group cursor-pointer ">
          <img src={data[0].Images[0].Images[0]} className="w-full h-full  top-0  " alt="" />
          <div className="w-[50%] h-[52px] bg-white rounded-full absolute hover:scale-[1.1] z-[10] bottom-[27px] left-1/2 -translate-x-1/2  good text-black flex items-center justify-center ">
            En Profiter
          </div>
          <Link
            href={""}
            className="absolute z-[-1] px-[10px] w-full h-full top-0 pb-[80px] text-white bg-[#696564] text-3xl rounded-xl opacity-[90%]  justify-normal items-center  text-center flex group-hover:z-[3]"
          >
        {" "}
        PROFITEZ DE L OFFRE AVANT QU IL NE SOIT TROP TARD !!!!!!
      </Link>
    </div>
      <div className=" relative w-full h-full group cursor-pointer ">
          <img src={data[0].Images[0].Images[0]} className="w-full h-full  top-0  " alt="" />
          <div className="w-[50%] h-[52px] bg-white rounded-full absolute hover:scale-[1.1] z-[10] bottom-[27px] left-1/2 -translate-x-1/2  good text-black flex items-center justify-center ">
            En Profiter
          </div>
          <Link
            href={""}
            className="absolute z-[-1] px-[10px] w-full h-full top-0 pb-[80px] text-white bg-[#696564] text-3xl rounded-xl opacity-[90%]  justify-normal items-center  text-center flex group-hover:z-[3]"
          >
        {" "}
        PROFITEZ DE L OFFRE AVANT QU IL NE SOIT TROP TARD !!!!!!
      </Link>
    </div>
      <div className=" relative w-full h-full group cursor-pointer ">
          <img src={data[0].Images[0].Images[0]} className="w-full h-full  top-0  " alt="" />
          <div className="w-[50%] h-[52px] bg-white rounded-full absolute hover:scale-[1.1] z-[10] bottom-[27px] left-1/2 -translate-x-1/2  good text-black flex items-center justify-center ">
            En Profiter
          </div>
          <Link
            href={""}
            className="absolute z-[-1] px-[10px] w-full h-full top-0 pb-[80px] text-white bg-[#696564] text-3xl rounded-xl opacity-[90%]  justify-normal items-center  text-center flex group-hover:z-[3]"
          >
        {" "}
        PROFITEZ DE L OFFRE AVANT QU IL NE SOIT TROP TARD !!!!!!
      </Link>
    </div>
    </div>
  );
};

export default OfferSlider;
