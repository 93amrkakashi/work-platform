"use client";
import React from "react";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6"; //financial
import { GrUserAdmin } from "react-icons/gr";
import { GiHealthPotion } from "react-icons/gi";
import { BsAirplaneFill } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";


const Fields = () => {
  return (
    <div className="cards flex justify-around gap-5 items-center flex-wrap">
      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
        <MdOutlineSportsSoccer />
        <p>Sports</p>
      </div>
      {/* ******************** */}
      <div className="card flex flex-col font-medium justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
      <FaBookReader />
        <p>Education</p>
      </div>
      {/* ******************** */}



      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
      <FaCalculator />
        <p>Financial</p>
      </div>
      {/* ******************** */}
      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
      <GrUserAdmin />
        <p>Administration</p>
      </div>
      {/* ******************** */}
      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
      <GiHealthPotion />
        <p>Health</p>
      </div>
      {/* ******************** */}
      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
      <BsAirplaneFill />
        <p>Traveling</p>
      </div>
      {/* ******************** */}
      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg p-0 min-h-[220px] min-w-[350px] activity">
      <BsCart4 />
        <p>Trading</p>
      </div>
      {/* ******************** */}
      <div className="card flex flex-col justify-center items-center gap-4 text-5xl border-2 rounded shadow-lg px-3 min-h-[220px] min-w-[450px] activity">
      <FaLaptopCode />
        <p>And Many Other Fields .......</p>
      </div>
      {/* ******************** */}
    </div>
  );
};

export default Fields;
