import React from "react";
import Propos from "./aboutComponents/AproposComponents/Propos";
import Horaire from "./aboutComponents/HoraireComponents/Horaire";
import ContactUs from "./aboutComponents/ContactUs";
import Container from "../components/Container";
import Cover from "./Cover";
const page = () => {
  return (
    <div className="h-[95%] w-screen flex items-center justify-center mb-[50px] bg-white text-black ">
      <div className="w-[80%] flex flex-col justify-center items-center gap-8 ">
        <Container
          title={"A propos de nous"}
          subtitle={"Aprenez plus sur nous"}
          redtitle={""}
        />
        <div>
          <Propos
            title="speed motors"
            shortText={`Sarl Automobile Leader Company ALC est le représentant officiel de la marque CHERY en Algérie.\n Depuis 2020, ALC est entrée en service en Algérie dans le but d'assurer la distribution et la commercialisation des véhicules CHERY ainsi que, leur Service après-vente.`}
            longText={`Une équipe de cadres hautement qualifiée qui s'engage à fournirun produit représentatif et compétitif afin de satisfaire lesclients et créer de l'emploi et de la richesse pour le pays.\nL'bjectif de l'ALC est de proposer une large gamme devéhicules CHERY, couvrant les besoins essentiels du marché algérienavec un choix de gammes diverses, de segments, de motorisations etde finitions, sur pratiquement toutes les régions d'Algérie.\nALC compte prendre en charge tous les cas de garantie des véhiculesqui seront vendus par son réseau en Algérie.\nSes succursales et agents agréés ne seront pas seulement des pointsde vente, mais elles offriront et couvriront également, tous lesservices et besoins des clients de la marque CHERY.\n`}
          />
        </div>
        <Cover src="/assets/presentation.png" />
        <div>
          <Propos
            title="CHERY"
            shortText={`Fondée en 1997, CHERY est aujourd'hui la marque automobile chinoise la plus exportée au monde.\nCHERY a réussi à créer des marques de produits telles que Arrizo, Tiggo et la marque EXEED haut de gamme et a cumulé plus de 8,3 millions de vente d'unités dans 80 pays.`}
            longText={`Au cours des 20 dernières années, CHERY a insisté sur l'innovation indépendante, elle a établi des centres de recherche et de développement R&D en Chine, en Allemagne, aux États-Unis et au Brésil. Elle a également mis en place une équipe mondiale de R&D automobile de plus de 5 500 personnes, établissant ainsi progressivement le système holistique de R&D sur la technologie et les produits.\nCHERY détient aujourd'hui 5 centres de R&D, 10 usines et 1500 concessionnaire à travers le monde.`}
          />
        </div>

        <div className="flex flex-col  justify-center w-full s:w-[90%] my-6 ">
          <div className="good text-sm font-[400]  sm:text-2xl lg:text-4xl mb-8  ">
            Horaire<span className="text-[#D12621]"> de Travail :</span>
          </div>
          <div className="w-full">
            <Horaire />
          </div>
        </div>

        <div className="flex flex-col  justify-center w-full sm:w-[90%] my-6 ">
          <div className="good text-sm font-[400]  sm:text-2xl lg:text-4xl mb-8  ">
            Ou Nous <span className="text-[#D12621]"> Trouver :</span>
          </div>
          <div className="w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.672902208477!2d5.058064723024109!3d36.73992766715864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2cd1d67f3ffb5%3A0x2dd8f36577b57279!2sCHERY%20BEJAIA%20SPEED%20MOTORS!5e0!3m2!1sen!2sdz!4v1711245267216!5m2!1sen!2sdz"
              height="450"
              className="w-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col  justify-center w-full sm:w-[90%] my-6">
          <div className="good text-sm font-[400]  sm:text-2xl lg:text-4xl mb-8  ">
            Nous <span className="text-[#D12621]"> Contacter :</span>
          </div>
          <div>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
