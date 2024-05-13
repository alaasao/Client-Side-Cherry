import React from "react";
import Dateshac from "./Dateshac";

const BigVidange = () => {
  return (
    <div className="w-[90%]  justify-center items-center max-md:hidden">
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
                      minLength={3}
                      maxLength={100}
                      required
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
                    <Dateshac />
                  </div>
                </div>
                <div className="flex-col flex w-full">
                  <div className="w-full flex flex-col my-4">
                    <label className="text-[#0C0C0C] mb-2" htmlFor="numero">
                      Numero du telephone
                    </label>
                    <input
                      type="tel"
                      minLength={3}
                      placeholder="entrer votre numero du telephone"
                      maxLength={150}
                      required
                      name="numero"
                      className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                      autoComplete="off"
                      id="numero"
                    />
                  </div>
                  <div className="w-full  flex flex-col my-4">
                    <label className="text-[#0C0C0C] mb-2" htmlFor="modele">
                      Le modele
                    </label>
                    <input
                      type="text"
                      minLength={3}
                      placeholder="Votre modele"
                      maxLength={150}
                      required
                      name="modele"
                      className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[5px] "
                      autoComplete="off"
                      id="numero"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center 2xl:items-start w-[80%] justify-center">
                <button
                  className="text-[#D12621] border rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  md:w-[250px] 2xl:w-[500px]  font-good  mt-4 h-4  animation"
                  type="submit"
                >
                  <span className="relative z-10"> Envoyer</span>
                </button>
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
