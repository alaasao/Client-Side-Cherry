import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
const CarInformation = ({ data }) => {
  
   const [daata, setDaata] = useState(
    {
      Masked: false,
      _id: "",
      Images: [
        {
          Color: "rouge",
          Images: [],
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
  );
  useEffect(() => {
    axios.get(`https://axeiny.tech:4004/car/665ff088ef496b201171a462`).then((res) => {
      setDaata(res.data);
      console.log(res.data);
    });}
  , []);
  return (
    <div className="w-[85%]  sm:w-[90%] justify-center items-center   ">
       <>
      <h1 className="good text-2xl sm:text-3xl my-14">Mon vehicule</h1>
        <div className="bg-gray-500 2xl:h-[800px] max-sm:h-[700px] h-[500px] mb-10 max-sm:rounded-[50px] rounded-2xl relative from-[#030303] to-[#202020] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] ">
          <img
            src="/assets/serv/back.png"
            className="object-cover max-sm:h-[700px] opacity-100 h-[500px] 2xl:h-[800px] " />
        <div className="w-full h-full absolute top-0 left-0 grid  max-sm:grid-rows-[1fr_2fr]  sm:grid-cols-[1fr_1fr]  gap-[50px]  items-start sm:justify-center sm:items-center text-black ">
          <div className="flex flex-row order-2 sm:order-1 items-center sm:items-end rounded-[50px] justify-around w-full h-full text-white ">
            <div className="flex flex-col justify-start gap-6 sm:gap-10 text-xs font-semibold md:text-sm  2xl:text-3xl pl-2 text-nowrap lg:text-lg underline">
              <p>Votre Modele</p>
              <p>Numéro de série VIN </p>
              <p>Année de fabrication :</p>
              <p>Date d achat :</p>
              <p>Kilometrage : </p>
              <p>Le prix :</p>
              <p>Garentie Restente : </p>
            </div>
         <div className="flex flex-col justify-end gap-6 sm:gap-10 text-xs font-semibold md:text-sm 2xl:text-3xl text-nowrap lg:text-lg">     
                  <p>{data.Car.Name}</p>
                  <p>{data.Car.Name}</p>
                  <p>{data.Car.Name}</p>
                  <p>{data.Prix_Vente}</p>
                  <p>{data.Prix_Vente}</p>
                  <p>{data.Prix_Vente}</p>
                  <p>{data.Car.Garentie}</p>
              </div>  
                 

          </div>
          
          <img
            src={`${daata.Images[0].Images[0]}`}
            className="flex 2xl:h-[800px] w-full h-full justify-center order-1 sm:order-2 items-center sm:rounded-r-md max-sm:rounded-t-[50px] sm:rounded-l-[60px] bg-[#ECECEC]" />
        
          </div>
      </div>
      </>
    </div> 
  );
};

export default CarInformation;

{/* <div className="flex max-sm:flex-col w-full items-center justify-around md:flex-row gap-10 2xl:gap-10">
        <Link
          href={`haha`}
          download={`haha`}
          className="w-[267px] sm:w-[35%] sm:text-sm md:text-lg lg-text-xl 2xl:text-3xl text-lg h-[60px] text-nowrap flex flex-row items-center 2xl:py-10 p-[0px_9.81px_0px_9.81px] rounded-[3.27px] justify-around font-semibold py-2 text-center bg-[#ECECEC] shadow-xl"
        >
          <p className="w-[80%]">Contrat de vente</p>
          <MdOutlineFileDownload className="text-3xl md:text-2xl lg:text-3xl sm:text-xl" />
        </Link>
        <Link
          href={`haha`}
          download={`haha`}
          className="w-[267px] sm:w-[35%] sm:text-sm md:text-lg lg-text-xl 2xl:text-3xl  text-lg h-[60px] text-nowrap flex flex-row items-center 2xl:py-10  p-[0px_9.81px_0px_9.81px] rounded-[3.27px] justify-around font-semibold py-2 text-center bg-[#ECECEC] shadow-xl"
        >
          <p className="w-[80%] sm:text-wra md:text-nowrap">
            Garentie et entretien
          </p>
          <MdOutlineFileDownload className="text-3xl md:text-2xl lg:text-3xl sm:text-xl" />
        </Link>
        <Link
          href={`haha`}
          download={`haha`}
          className="w-[267px]   sm:w-[35%] sm:text-sm md:text-lg lg-text-xl 2xl:text-3xl text-lg h-[60px] text-nowrap flex flex-row items-center 2xl:py-10 p-[0px_9.81px_0px_9.81px] rounded-[3.27px] justify-around font-semibold py-2 text-center bg-[#ECECEC] shadow-xl"
        >
          <p className="sm:font-bold w-[80%]">Facture d&apos;achat</p>
          <MdOutlineFileDownload className="sm:text-xl md:text-2xl 2xl:text-5xl lg:text-3xl text-3xl" />
        </Link>
      </div> */}