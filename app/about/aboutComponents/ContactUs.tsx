"use client";
import { Combobox } from "@mantine/core";
import React from "react";
import { useState } from "react";
import DropDown from "./DropDown";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa6";
import people from "./data";
const ContactUs = () => {
  const [selectedSubject, setSelectedSubject] = useState(people[0]);
  const [value, setValue] = useState({
    Name: "",
    Phone: 0,
    Subject: selectedSubject.name,
    Description: "",
  });
  const handleOnClick = (e: any) => {
    e.preventDefault();
  };
  const handleOnChange = (e: any) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <div className="flex flex-col md:flex-row justify-between items-center w-full p-6">
          <div className="w-full md:w-[40%] flex flex-col my-4">
            <label className=" text-[#0C0C0C] mb-2" htmlFor="name">
              Nom complet*
            </label>
            <input
              onChange={handleOnChange}
              type="text"
              minLength={3}
              maxLength={100}
              required
              placeholder="entrer votre nom et prenom"
              className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] focus:border-red-500 rounded-[10px] "
              autoComplete="off"
              id="name"
            />
          </div>
          <div className="w-full md:w-[40%] flex flex-col my-4">
            <label className="text-[#0C0C0C] mb-2" htmlFor="numero">
              numero du telephone
            </label>
            <input
              onChange={handleOnChange}
              type="number"
              minLength={3}
              placeholder="entrer votre numero du telephone"
              maxLength={150}
              required
              name="numero"
              className=" p-3  bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[10px] "
              autoComplete="off"
              id="numero"
            />
          </div>
        </div>

        <div className="w-full flex flex-col my-4 p-6">
          <label htmlFor="dropdown" className="mb-4">
            Que Concern Vous
          </label>
          <div className="p-3 bg-gray-50 w-full border border-opacity-[25%] border-[#000000] rounded-[10px] ">
            <Listbox
              value={selectedSubject}
              name="dropdown"
              onChange={setSelectedSubject}
            >
              <Listbox.Button className={`w-full`}>
                <div
                  className={`flex flex-row justify-between items-center text-[#5E5959]`}
                >
                  <span
                    className={
                      selectedSubject.show ? "text-[#5E5959]" : " text-black"
                    }
                  >
                    {" "}
                    {selectedSubject.name}
                  </span>
                  <FaChevronDown />
                </div>
              </Listbox.Button>

              <Listbox.Options>
                {people.map((person) => (
                  <Listbox.Option
                    key={person._id}
                    value={person}
                    disabled={person.unavailable}
                    className={`w-full py-4 px-4 `}
                  >
                    <span
                      className={
                        person.show
                          ? "hidden "
                          : "text-[#5E5959] hover:cursor-pointer hover:text-[#D12621] py-4 px-4"
                      }
                    >
                      {person.name}
                    </span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </div>
        </div>

        <div className="w-full flex flex-col my-4 p-6">
          <label className=" text-[#0C0C0C] mb-2" htmlFor="message">
            Décrivez votre demande* :
          </label>
          <textarea
            onChange={handleOnChange}
            rows={4}
            placeholder="Laissez votre message afin que nous puissions vous aider*"
            required
            minLength={10}
            maxLength={500}
            name="message"
            className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[10px] "
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="text-[#D12621] border  rounded-[10px] relative  z-10 text-nowrap good text-xs  w-[200px]  font-good  h-4  animation ">
            <span className="relative z-10 ">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};
/* disabled={loading} */
export default ContactUs;
