"use client"
import { Combobox } from '@mantine/core';
import React from 'react'
import { useState } from 'react';
import DropDown from './DropDown';
const ContactUs = () => {
 /*  const [loading, setLoading] = useState(false);
 
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
 
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };
 
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
 
    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    } *//*  onSubmit={handleSubmit} */
  return (
    <div>
  <form method='post'>
    <div className='flex flex-col md:flex-row justify-between items-center w-full'>
              <div className="w-full md:w-[40%] flex flex-col my-4">
                <label
                  className=" text-[#0C0C0C] mb-2 "
                  htmlFor="name">
                  Nom complet*
                </label>
                <input
                  type="text"
                  minLength={3}
                  maxLength={100}
                  required
                  className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] focus:border-red-500 rounded-[10px] "
                  autoComplete="off"
                  id="name"
                />
              </div>
              <div className="w-full md:w-[40%] flex flex-col my-4">
                <label
                  className="text-[#0C0C0C] mb-2"
                  htmlFor="numero"
                >
                  Numero du telephone
                </label>
                <input
                  type="numero"
                  minLength={3}
                  maxLength={150}
                  required
                  name='numero'
                  className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[10px] "
                  autoComplete="off"
                  id="numero" />
          </div>
    </div>
    <div className="w-full flex flex-col my-4 p-6">
                <label htmlFor='dropdown' className='mb-4'>Que Concern Vous</label>
                <DropDown />
    </div>
  
    <div className='w-full flex flex-col my-4 p-6'>
        <label
          className=" text-[#0C0C0C] mb-2"
          htmlFor="message"
        >
          Décrivez votre demande* :
        </label>
        <textarea
          rows={4}
          placeholder='Laissez votre message afin que nous puissions vous aider*'
          required
          minLength={10}
          maxLength={500}
          name="message"
          className=" p-3 bg-gray-50 border border-opacity-[25%] border-[#000000] rounded-[10px] "
        />
      </div>
      <div className='w-full flex justify-center items-center'>
      <button type='submit' className=' text-[#D12621] border-2 border-[#858282] w-[200px]  rounded-[10px] font-good mt-12 h-4  animation' >
                             <span className="relative  z-10 text-nowrap  good text-sm ">Sumbmit</span>  
         </button></div>
    </form>

    </div>
  )
}
/* disabled={loading} */
export default ContactUs