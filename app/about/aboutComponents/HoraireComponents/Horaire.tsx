import React from "react";
import Day from "./Day";
const Horaire = () => {
  const week = [
    {
      day: "Demanche",
      time: "09:00 - 17:00",
    },
    {
      day: "Lundi",
      time: "09:00 - 17:00",
    },
    {
      day: "Mardi",
      time: "09:00 - 17:00",
    },
    {
      day: "Mercredi",
      time: "09:00 - 17:00",
    },
    {
      day: "Jeudi",
      time: "09:00 - 17:00",
    },
    {
      day: "Vendredie",
      time: "Ferme",
    },
    {
      day: "Samedi",
      time: "09:00 - 17:00",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center flex-col text-xs sm:text-lg md:text-xl">
      {week.map((q) => (
        <Day day={q.day} key={q.day} time={q.time} />
      ))}
    </div>
  );
};

export default Horaire;
