"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

import heroPic from "../../_data/Programmer Illustration.svg";
import 'animate.css';
const About = () => {
  const { theme } = useTheme();

  return (
    <main className={` ${theme === "dark" ? "dark-body" : "light-body"} `}>
      <div className="flex flex-col items-center justify-around">
        <div dir="ltr" className={`hero flex justify-center items-center pt-12 min-h-[95vh] ${theme === "dark" ?  "bg-slate-900": "bg-indigo-700"} w-full`} >
          <div className="flex flex-col justify-center gap-5 items-center">
            <h1 className="font-bold text-6xl text-gray-50 ">Scripto Code</h1>
            <p className="font-bold text-5lg text-gray-100  ">Your Programming Solutions Partner</p>
            <div className="flex justify-center items-center">

            </div>
          </div>
          <div className="md:ml-[100px] ">
            <Image className="animate__animated animate__floating" src={heroPic} alt="logo" width={610} height={1000} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
