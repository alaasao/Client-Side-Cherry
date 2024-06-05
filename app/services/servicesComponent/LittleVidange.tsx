"use client";
import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Dateshac from "./Dateshac";
import axios from "axios";
import toast from "react-hot-toast";
import { RdvEtat, Rdv_Type } from "@/app/components/Form";
const LittleVidange = () => {
  const [data, setData] = useState({
    Name: "",
    Adresse: "",
    Phone: "",
    Email: "",
    Rdv_Type:
    Rdv_Type.RDV_AUTRE,
    Date_Choisie: new Date(),

    Etat: RdvEtat.EN_ATTENTE,
  });
  async function submit() {
console.log("jjj")
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
    <div className="w-[85%] sm:w-[90%] justify-center items-center md:hidden">
      <h1 className="good text-2xl sm:text-3xl my-14">Vidange</h1>
      <p className="text-lg font-[500]">
        Dans notre section dédiée aux services chez Chery Algerie , nous nous
        engageons à maintenir votre véhicule en parfait état de fonctionnement.
        Planifiez votre vidange en ligne dès maintenant.
      </p>

      <form>
        <div className="bg-[#ECECEC] my-6 py-4 flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-2xl font-bold p-8">
            Prenez rendez-vous
          </h1>

          <div className="flex flex-col  items-center justify-center w-[90%]">
         
          
            <div className="flex flex-col w-full ">
                  <div className="w-full flex flex-col my-4">
                    <label className=" text-[#0C0C0C] mb-2" htmlFor="name">
                      Nom
                    </label>
                    <input
                      type="text"
                      value={data.Name}
                      onChange={(e) => {
                        setData({ ...data, Name: e.target.value });
                      
                      }}
                       
                      placeholder="entrer votre nom et prenom"
                      className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] focus:border-red-500 rounded-[5px] "
                      autoComplete="off"
                      id="name"
                    />
                  </div>
                  <div className="w-full  flex flex-col my-4 ">
                    <label className=" text-[#0C0C0C] mb-2" htmlFor="name">
                      Date
                    </label>
                
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
            className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] focus:border-red-500 rounded-[5px] "
            />
        
                  </div>
                </div>
                <div className="flex-col flex w-full">
                  <div className="w-full flex flex-col my-4">
                    <label className="text-[#0C0C0C] mb-2" htmlFor="numero">
                      Numero du telephone
                    </label>
                    <input
                      type="tel"
              value={data.Phone}
                      onChange={(e) => { 
                        setData({ ...data, Phone: e.target.value });
                      }}
                      placeholder="entrer votre numero du telephone"
              
                       
                      name="numero"
                      className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                      autoComplete="off"
                      id="numero"
                    />
                  </div>
                  <div className="w-full  flex flex-col my-4">
                    <label className="text-[#0C0C0C] mb-2" htmlFor="modele">
                  Email
                    </label>
                    <input
                      type="email"
                     placeholder="Votre email"
                      value={data.Email}
                      onChange={(e) => {
                        setData({ ...data, Email: e.target.value });
                      }}
                       
                      name="modele"
                      className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                      autoComplete="off"
                      id="numero"
                    />
                  </div>
                  <div className="w-full  flex flex-col my-4">
                    <label className="text-[#0C0C0C] mb-2" htmlFor="modele">
                  Address
                    </label>
                    <input
                      type="text"
                     placeholder="Votre email"
                      value={data.Adresse}
                      onChange={(e) => {
                        setData({ ...data, Adresse: e.target.value });
                      }}
                       
                      name="modele"
                      className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                      autoComplete="off"
                      id="numero"
                    />
                  </div>
                </div>
          </div>
          <div className="flex items-center justify-center">
            <div
              className="text-[#D12621] cursor-pointer  border rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  mt-4 h-4  animation"
            onClick={submit} 
            >
              <span className="relative z-10 flex justify-center"> Envoyer</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LittleVidange;
