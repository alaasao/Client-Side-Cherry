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

  let modelTitles: Array<modelTitle> = Cars.map((el:CarsProps) => {
    return { modelName: el.Modele, modelId: el._id };
  });
  return (
    <div>
      <ClientPage modelTiles={modelTitles} Cars={Cars} firstId={params.carId} />
    </div>
  );
};

export default page;

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
export interface PromoObj {
  IsPromo: boolean;
  Start: string;
  End: string;
  Value: number;
}
export interface CarsProps {
  _id: string;

  Images: { Images: string[]; Color: string }[];
  Modele: string;
  Garentie: string;
  Disponabilite: string;
  Prix_TTC: number;
  Moteur: string;
  PromoObj: PromoObj;
  MoteurObj: MoteurObj;
  ConfortObj: ConfortObj;
  SecurityObj: SecurityObj;
  LookObj: LookObj;
  VehiculeObj: VehiculeObj;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface EmptyCarModel {
  

  Images: { Images: string[]; Color: string }[];
  Modele: string;
  Garentie: string;
  Disponabilite: string;
  Prix_TTC: number;
  Moteur: string;
  PromoObj: PromoObj;
  MoteurObj: MoteurObj;
  ConfortObj: ConfortObj;
  SecurityObj: SecurityObj;
  LookObj: LookObj;
  VehiculeObj: VehiculeObj;

}
