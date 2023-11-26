"use client"
import React, { useEffect } from "react";
import SideNav from "./SideNav";
import LoginForm from "./LoginForm";
// import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  useEffect(() => {
    const user = localStorage.getItem('is_online');
    console.log('User is online:', user);
  }, []);
  return (
    <main dir="ltr" className={``}>
      {/* <div className="flex-col md:flex bg-amber-500 items-start justify-stert pt-3"> */}
      <SideNav />
      <div className="w-full flex justify-center items-center min-h-[95vh]">
        <LoginForm />
      </div>
      {/* </div> */}
    </main>
  );
};

export default Dashboard;
