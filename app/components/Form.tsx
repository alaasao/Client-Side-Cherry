"use client";
import axios from "axios";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
interface FromProps {
  name: string;
  id: string;
  type: string;
}
const Form: FC<FromProps> = ({ name, id, type }: FromProps) => {
  const [data, setData] = useState({
    Name: "",
    Adresse: "",
    Phone: "",
    Email: "",
    Rdv_Type:
      type === "voiture"
        ? Rdv_Type.RDV_VENTE_VOITURE
        : Rdv_Type.RDV_VENTE_PIECE,
    Date_Choisie: new Date(),
    Model: name,
    Etat: RdvEtat.EN_ATTENTE,
  });
  async function submit() {
    if (data.Name === "") {
      toast.error("Nom est vide");
      return;
    }
    if (data.Adresse === "") {
      toast.error("Veuillez entrer l'adresse");
      return;
    }
    if (data.Date_Choisie.toLocaleString() === "") {
      toast.error("Veuillez entrer la date");
      return;
    }
    if (data.Phone === "") {
      toast.error("Veuillez entrer le numéro de téléphone");
      return;
    } else {
      const phoneRegex = /^(\+213|0)(5|6|7)[0-9]{8}$/;
      if (!phoneRegex.test(data.Phone)) {
        toast.error("Veuillez entrer un numéro de téléphone algérien valide");
        return;
      }
    }
    if (data.Email === "") {
      toast.error("Veuillez entrer l'email"); return
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(data.Email)) {
        toast.error("Veuillez entrer un email valide");return
      }
    }
 

    await axios.post("https://axeiny.tech:4004/rdv", data).then(() => {
      toast.success("Rendez-vous envoyé avec succès");
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
     
    }).catch((e) => {
      toast.error(e.response.data.message);
     }
    )
  }
  return (
    <div className="bg-[#e9e8e896] py-[50px] rounded-2xl flex flex-col w-[90vw] mx-auto mb-[50px]">
      <div className="font-bold   text-4xl pl-[20px] mb-[20px]">
        {" "}
        Prenez rendez-vous
      </div>
      <form
        onSubmit={submit}
        className="w-full flex gap-x-[12vw] gap-y-[4vw] flex-wrap"
      >
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Nom</div>
          <input
            type="text"
            value={data.Name}
            onChange={(e) => {
              setData((prev) => ({ ...prev, Name: e.target.value }));
            }}
            placeholder="Votre nom "
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Phone Number</div>
          <input
            type="text"
            value={data.Phone}
            onChange={(e) => {
              setData((prev) => ({ ...prev, Phone: e.target.value }));
            }}
            placeholder="numéro telephone "
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Addresse</div>
          <input
            type="text"
            value={data.Adresse}
            onChange={(e) => {
              setData((prev) => ({ ...prev, Adresse: e.target.value }));
            }}
            placeholder="Addresse"
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">E -mail</div>
          <input
            type="email"
            value={data.Email}
            onChange={(e) => {
              setData((prev) => ({ ...prev, Email: e.target.value }));
            }}
            placeholder="E -mail"
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Date</div>
          <input
            type="date"
           
            min={new Date().toISOString().slice(0, 10)}
            value={new Date(data.Date_Choisie).toISOString().slice(0, 10)}
            onChange={(e) => {
              setData((prev) => ({
                ...prev,
                Date_Choisie: new Date(e.target.value),
              }));
            }}
            className=" outline-none bg-[#F6F7F9] text-black h-[56px] px-[30px] mt-[16px] w-full cursor-pointer rounded-xl "
          />
        </div>
        <div className="flex flex-col w-[40%] max-md:w-[80%] mx-auto ">
          <div className="font-bold">Modele</div>
          <input
            type="text"
            readOnly={true}
            value={data.Model}
            className=" outline-none bg-[#F6F7F9] h-[56px] pl-[30px] mt-[16px] w-full cursor-pointer rounded-xl"
          />
        </div>
      </form>
      <div
        onClick={submit}
        className="w-[180px] bg-[#DB2719] flex justify-center items-center h-[50px] text-white mt-[60px] gap-[10px] self-end mr-[40px] rounded-xl"
      >
        {" "}
        envoyer
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Form;
const RdvEtatList = ["EN_ATTENTE", "CONFIRMER", "ANNULE"];
const RdvTypeList = [
  "RDV_VENTE_VOITURE",
  "RDV_VENTE_PIECE",
  "RDV_REPARATION",
  "RDV_AUTRE",
];
export enum RdvEtat {
  EN_ATTENTE = "EN_ATTENTE",
  CONFIRMER = "CONFIRMER",
  ANNULE = "ANNULE",
}
export enum Rdv_Type {
  RDV_VENTE_VOITURE = "RDV_VENTE_VOITURE",
  RDV_VENTE_PIECE = "RDV_VENTE_PIECE",
  RDV_REPARATION = "RDV_REPARATION",
  RDV_AUTRE = "RDV_AUTRE",
}
