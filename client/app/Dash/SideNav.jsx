"use client";
import Link from "next/link";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
// import { useTheme } from "../context/ThemeContext";

const SideNav = () => {
  // const { theme } = useTheme();

  return (
    <div
      className={`light-nav w-full h-[50px] fixed top-[50px] flex items-center 
      justify-evenly pt-2 px-3 gap-5`}
    >
      <div className="text-slate-50 my-2 font-bold text-lg">
        <Link
          className="flex justify-center items-center gap-3"
          href={"/Dash/Users"}
        >
          <FaUsers />
          <span>المستخدمين</span>
        </Link>
      </div>
      <div className="text-slate-50 my-2 font-bold text-lg">
        <Link
          className="flex justify-center items-center gap-3"
          href={"/Dash/Projects"}
        >
          <FaProjectDiagram />
          <span>المشاريع</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
