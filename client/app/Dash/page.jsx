"use client"
import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import LoginForm from "./LoginForm";
import Projects from "./Projects/page";

export const url ="https://work-platform-server.vercel.app/api"

const Dashboard = () => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    setuser(localStorage.getItem('name')) ;
  }, [user]);
  return (
    <main dir="ltr" className={``}>
      {/* {user && <SideNav />} */}
      <div className="w-full flex justify-center items-center min-h-[95vh]">
        {user ? <Projects /> :<LoginForm setuser={setuser}  />}
      </div>
    </main>
  );
};

export default Dashboard;


// 93amr.kakashi@gmail.com