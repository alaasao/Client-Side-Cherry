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
} from "./Caracteristiques";
interface DescSectionProps {
  props: MoteurObj | LookObj | ConfortObj | SecurityObj | VehiculeObj;
  Title: string;
  img: string;
}
const DescSection: FC<DescSectionProps> = ({
  props,
  Title,
  img,
}: DescSectionProps) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col mb-[50px] ">
      <div
        className="flex items-center  w-full justify-between border-b-[1px] pb-[23px] mt-[23px]  border-[#A0A0A0] cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex gap-[10px] items-center text-3xl  ">
          <img src={img} alt="" className="w-[40px]" />
          <div className="font-medium "> {Title}</div>
        </div>
        <div className="text-[#F70202] text-3xl ">
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
            className="mt-2 ml-4 "
          >
            <div className="w-full flex justify-between max-sm:justify-center flex-wrap  ">
              {Object.entries(props).map(([key, value], index) => {
                return (
                  <div
                    className="  grid grid-cols-2 text-2xl capitalize max-xl:text-[16px] w-[33%] mb-[40px] max-md:w-full gap-[10px]"
                    key={index + key}
                  >
                    <div className="text-[#848484]   ">
                      {titles[key as keyof typeof titles]}
                    </div>
                    <div className="  font-bold">
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

export default DescSection;
const titles = {
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
