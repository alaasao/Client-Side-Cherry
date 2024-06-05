'use client';
import React, { useState } from "react";
import Dateshac from "./Dateshac";
import toast from "react-hot-toast";
import { RdvEtat, Rdv_Type } from "@/app/components/Form";
import { Toaster } from "@/components/ui/toaster";
import axios from "axios";

const BigVidange = () => {
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
    <div  className="w-[90%]  justify-center items-center max-md:hidden">
      <Toaster/>
      <h1 className="good text-2xl sm:text-3xl mt-12 mb-6">Vidange</h1>
      <p className="text-lg font-[500] mb-6">
        Dans notre section dédiée aux services chez Chery Algerie , nous nous
        engageons à maintenir votre véhicule en parfait état de fonctionnement.
        Planifiez votre vidange en ligne dès maintenant.
      </p>
      <div className=" 2xl:h-[800px] max-sm:h-[610px] h-[500px] mb-10 relative">
        <img
          src="/assets/serv/vidange.png"
          className="w-full 2xl:h-[800px] max-sm:h-[610px] h-[500px]"
        />
        <div className="w-full h-full absolute top-0 left-0 grid grid-cols-[3fr_1fr] lg:grid-cols-[2fr_1fr]  gap-[20px]  justify-center  text-black ">
          <form>
            <div className="bg-[#ECECEC] w-full py-4 pl-4 relative flex flex-col 2xl:h-[800px] h-full  items-start 2xl:items-center justify-between lg:justify-around rounded-r-[60px]">
              <h1 className="text-2xl lg:text-3xl 2xl:tex-4xl font-bold ">
                Prenez rendez-vous
              </h1>
              <div className="flex flex-row 2xl:flex-col relative w-[80%] items-center justify-between gap-10">
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
              <div className="flex items-center 2xl:items-start w-[80%] justify-center">
                <div
                  className="text-[#D12621] border rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  md:w-[250px] 2xl:w-[500px]  font-good  mt-4 h-4   animation"
onClick={submit}
                >
                  <span className="relative z-10 flex justify-center"> Envoyer</span>
                </div>
              </div>
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BigVidange;
