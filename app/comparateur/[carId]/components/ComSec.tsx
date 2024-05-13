"use client";
import React, { FC, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import {
  ConfortObj,
  LookObj,
  MoteurObj,
  SecurityObj,
  VehiculeObj,
} from "../../../marketplace/[productId]/components/Caracteristiques";
interface ComSecProps {
  FirstProps: MoteurObj | LookObj | ConfortObj | SecurityObj | VehiculeObj;
  SecondProps:
    | MoteurObj
    | LookObj
    | ConfortObj
    | SecurityObj
    | VehiculeObj
    | undefined;
  Title: string;
}
const ComSec: FC<ComSecProps> = ({
  FirstProps,
  Title,
  SecondProps,
}: ComSecProps) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <div
        className="flex items-center  w-full justify-between px-[15px]   bg-[#303030] text-white  h-[55px] cursor-pointer   "
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="font-medium text-3xl  "> {Title}</div>

        <div className=" text-3xl cursor-pointer">
          {" "}
          {open ? (
            <MdKeyboardArrowUp className="" />
          ) : (
            <MdKeyboardArrowDown className="" />
          )}
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 1 },
            }}
            exit={{ height: 0, opacity: 0 }}
            className=" "
          >
            <div className="w-full flex justify-between flex-col  ">
              {Object.entries(FirstProps).map(([key, value], index) => {
                return (
                  <div
                    className=" flex flex-col text-2xl capitalize max-xl:text-[16px] w-full   max-md:w-full "
                    key={index + key}
                  >
                    <div className=" w-full justify-center items-center flex  h-[40px] max-md:text-xl ">
                      {titles[key as keyof typeof titles]}
                    </div>
                    <div className="w-full grid grid-cols-2">
                      {" "}
                      <div className="  font-bold bg-[#E4E4E4] border-[#6363634F] border-[1px] flex items-center justify-center h-[55px]">
                        {typeof value === "boolean" ? (
                          value ? (
                            <MdDone className="text-3xl text-[#39A63D] mx-auto my-auto" />
                          ) : (
                            <IoClose className="text-3xl text-[#DB2719] mx-auto my-auto" />
                          )
                        ) : (
                          value
                        )}
                      </div>
                      <div className="  font-bold bg-[#F4F4F4]  border-[#6363634F] border-[1px] h-[55px] flex items-center justify-center ">
                        {typeof value === "boolean" ? (
                          SecondProps &&
                          SecondProps[key as keyof typeof SecondProps] ? (
                            <MdDone className="text-3xl text-[#39A63D] mx-auto my-auto" />
                          ) : (
                            <IoClose className="text-3xl text-[#DB2719] mx-auto my-auto" />
                          )
                        ) : (
                          SecondProps &&
                          SecondProps[key as keyof typeof SecondProps]
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComSec;
export const titles = {
  Energie: "Energie",
  Motricite: "Motricite",
  Type_Moteur: "Type De Moteur",
  Cylidree: "Cylidree",
  Boite: "Boite",
  Consomation: "Consomation",
  Puissance: "Puissance",
  Nombre_Cylindres: "Nombre Cylindres",
  Soupapes: "Soupapes",
  Accelaration: "Accelaration de 0 à 100",
  Puissance_Tr: "Puissance Tr",
  Turbo: "Turbo",
  Nombre_Rapport_Boite: "Nombre De Rapport Boite",
  Vitesse_Max: "Vitesse Max",
  Couple: "Couple",
  Climatisation: "Climatisation",
  Direction: "Direction",
  Ecran: "Ecran",
  Accoudoir: "Accoudoir",
  Sieges_Chauffants: "Sieges Chauffants",
  Boire_A_Gants_Refrigerante: "Boite a gants refrigerante",
  Ordinateur_De__Bord: "Ordinateur De Bord",
  Radar_De_Recul: "Radar De Recul",
  Autoradio: "Autoradio",
  bluetooth: "bluetooth",
  Airbag: "Airbag",
  Regulateur_Limiteur_de_Vitesse: "Regulateur Limiteur de Vitesse",
  Abs: "Abs",
  Keyless: "Keyless",
  Esp: "Esp",
  Détecteur_Angle_Mort: "Détecteur Angle Mort",
  Aide_Demarrage_Cote: "Aide Demarrage Cote",
  Anti_Demarrage: "AntiDemarrage",
  Verrouillage_Centralise: "VerrouillageCentralise",
  Alarme: "Alarme",
  Feux_Anti_Arouillard: "Feux Anti Arouillard",
  Feux_Avant: "Feux Avant",
  Peinture_Metalisee: "Peinture Metalisee",
  Toit: "Toit",
  Vitres_Teintees: "Vitres Teintees",
  Feux_Jour: "Feux Jour",
  Feux_Arriere: "Feux Arriere",
  Jantes: "Jantes",
  Couleur_Poignees: "Couleur Poignees",
  Dimension_Pneumatique: "Dimension Pneumatiqueing",
  Volume_Coffre: "Volume Coffre",
  Longueur: "Longueur",
  Largeur: "Largeur",
  Hauteur: "Hauteur",
  Empattement: "Empattement",
  Suspension_Avant: "string",
  Suspension_Arriere: "Suspension Arriere",
  Nombre_Places: "Nombre Places",
  Nombre_Portes: "Nombre Portes",
  Reservoir: "Reservoir",
};
