import React from "react";
import Propos from "./aboutComponents/Propos";

const page = () => {
  return (
    <div className="h-[95%] w-screen flex items-center justify-center mb-[50px] bg-white text-black ">
      <div className="w-[80%] flex flex-col justify-center items-center gap-8  ">
        <div className="w-full  h-[10%] flex  justify-center text-center bg-white text-black ">
          <div className="w-[90%] h-[30%] mt-[5vh] sm:w-[80%] sm:h-[40vh] sm:mt-[5vh] shadow-3xl flex justify-around sm:justify-around  items-center  rounded-[10px]">
            <div>
              <div className="font-[500] text-wrap text-lg sm:text-3xl good leading-[54px] pb-2">
                À propos de nous
              </div>
              <div className="text-sm sm:text-xl sm:font-light font-light text-[#686565] pt-2 ">
                Apprenez plus sur nous
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <Propos
              title="speed motors"
              description="Sarl Automobile Leader Company ALC est le représentant officiel de la marque CHERY en Algérie.<br/>
                            Depuis 2020, ALC est entrée en service en Algérie dans le but d’assurer la distribution et la commercialisation des véhicules CHERY ainsi que, leur Service après-vente.<br/>
                            Une équipe de cadres hautement qualifiée qui s’engage à fournir un produit représentatif et compétitif afin de satisfaire les clients et créer de l’emploi et de la richesse pour le pays.<br/>
                            L’objectif de l’ALC est de proposer une large gamme de véhicules CHERY, couvrant les besoins essentiels du marché algérien avec un choix de gammes diverses, de segments, de motorisations et de finitions, sur pratiquement toutes les régions d’Algérie.<br/>
                            ALC compte prendre en charge tous les cas de garantie des véhicules qui seront vendus par son réseau en Algérie.<br/>
                            Ses succursales et agents agréés ne seront pas seulement des points de vente, mais elles offriront et couvriront également, tous les services et besoins des clients de la marque CHERY."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
