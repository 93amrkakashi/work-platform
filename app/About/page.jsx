"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import pic from "./animation.svg";
import pic1 from "./2.svg";
import pic2 from "./3.svg";
import pic3 from "./4.svg";
import pic4 from "./5.svg";
import pic5 from "./Electronic File Management Isometric Illustration.svg";

const About = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={` ${theme === "dark" ? "dark-body" : "light-body"} `}>
      <div className="flex flex-col align-center justify-around">

        <div className="flex justify-center">

        </div>



      </div>
    </main>
  );
};

export default About;
