"use client";
import React, { FC, useState, useEffect } from "react";
import Card from "./Card";
import Main from "./Main";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import DescSection from "./DescSection";
import Form from "@/app/components/Form";
// import ImageSlider from "./ImageSlider";

const Caracteristiques: FC<CaracteristiquesProps> = ({
  _id,
  PromoObj,
  Images,
  Modele,
  Garentie,
  Disponabilite,
  Prix_TTC,
  Moteur,
  updatedAt,
  MoteurObj,
  ConfortObj,
  LookObj,
  SecurityObj,
  VehiculeObj,
  createdAt,
  __v,
}: CaracteristiquesProps) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      
    
    <div className="w-full  max-lg:grid-cols-1 ">
      <div className="px-[40px] max-md:px-[20px] flex flex-col  py-[40px]">
        <div className="mb-32">
          <Main
            _id={_id}
            Modele={Modele}
            Garentie={Garentie}
            Disponabilite={Disponabilite}
            Prix_TTC={Prix_TTC}
            Moteur={Moteur}
              updatedAt={updatedAt}
              Images={Images}
          />
        </div>
        <div className="w-full flex justify-between items-center max-md:text-[14px] mb-[84px]">
          <div className=" sm:text-xl md:text-2xl lg:text-4xl">
            LES CARACTÉRISTIQUES
          </div>
          <Link
            href={`/comparateur/${_id}`}
            className="flex  items-center gap-[5px] text-white bg-[#E02727]  px-10 py-4 max-lg:px-4 max-lg:py-1 rounded-md"
          >
            <span className="max-sm:text-[12px]">Comparer</span>
            <FaArrowRight />
          </Link>
        </div>

        <DescSection
          props={MoteurObj}
          Title="MOTEUR"
          img="../assets/details/Settings.png"
        />
        <DescSection
          props={ConfortObj}
          Title="CONFORT"
          img="../assets/details/confort.png"
        />
        <DescSection
          props={LookObj}
          Title="LOOK"
          img="../assets/details/car.png"
        />
        <DescSection
          props={VehiculeObj}
          Title="Vehicule"
          img="../assets/details/wheel.png"
        />
        <DescSection
          props={SecurityObj}
          Title="SECURITE"
          img="../assets/details/carLock.png"
        />
      </div>
      <div className="w-full sticky top-[20px]">
        <Card Images={Images} _id={_id} Prix_TTC={Prix_TTC} sticky={isSticky} />
        </div>
        <Form name={Modele} id={_id} type="voiture" />
    </div>
    </div>
  );
};

export default Caracteristiques;
export interface MoteurObj {
  Energie: string;
  Motricite: string;
  Type_Moteur: string;
  Cylidree: number;
  Boite: string;
  Consomation: string;
  Puissance: number;
  Nombre_Cylindres: string;
  Soupapes: number;
  Accelaration: number;
  Puissance_Tr: number;
  Turbo: boolean;
  Nombre_Rapport_Boite: number;
  Vitesse_Max: number;
  Couple: number;
}
export interface SecurityObj {
  Airbag: number;
  Regulateur_Limiteur_de_Vitesse: string;
  Abs: boolean;
  Keyless: string;
  Esp: boolean;
  Détecteur_Angle_Mort: boolean;
  Aide_Demarrage_Cote: boolean;
  Anti_Demarrage: boolean;
  Verrouillage_Centralise: string;
  Alarme: string;
}
export interface LookObj {
  Feux_Anti_Arouillard: string[];
  Feux_Avant: string;
  Peinture_Metalisee: boolean;
  Toit: boolean;
  Vitres_Teintees: boolean;
  Feux_Jour: string;
  Feux_Arriere: string;
  Jantes: number;
  Couleur_Poignees: string;
  Dimension_Pneumatique: string;
}
export interface VehiculeObj {
  Volume_Coffre: number;
  Longueur: number;
  Largeur: number;
  Hauteur: number;
  Empattement: number;
  Suspension_Avant: string;
  Suspension_Arriere: string;
  Nombre_Places: number;
  Nombre_Portes: number;
  Reservoir: number;
}
export interface ConfortObj {
  Climatisation: string;
  Direction: string;
  Ecran: string;
  Accoudoir: string;
  Sieges_Chauffants: boolean;
  Boire_A_Gants_Refrigerante: boolean;
  Ordinateur_De__Bord: boolean;
  Radar_De_Recul: boolean;
  Autoradio: string;
  bluetooth: boolean;
}
export interface CaracteristiquesProps {
  _id: string;

  Images: { Images: string[]; Color: string }[];
  Modele: string;
  Garentie: string;
  Disponabilite: string;
  Prix_TTC: number;
  Moteur: string;
  PromoObj: {
    IsPromo: boolean;
    Start: string;
    End: string;
    Value: number;
  };
  MoteurObj: MoteurObj;
  ConfortObj:ConfortObj ;
  SecurityObj: SecurityObj;
  LookObj: LookObj;
  VehiculeObj: VehiculeObj;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
