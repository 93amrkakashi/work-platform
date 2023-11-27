"use client"
import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import LoginForm from "./LoginForm";
// import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    setuser(localStorage.getItem('is_online')) ;
    console.log('User is online:', user);
  }, []);
  return (
    <main dir="ltr" className={``}>
      {/* <div className="flex-col md:flex bg-amber-500 items-start justify-stert pt-3"> */}
      {user && <SideNav />}
      <div className="w-full flex justify-center items-center min-h-[95vh]">
        {user ? "loged in" :<LoginForm />}
      </div>
      {/* </div> */}
    </main>
  );
};

export default Dashboard;
