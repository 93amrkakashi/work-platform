"use client";
import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import AddProject from "./AddProject";
// import AddProjectModal from './AddProjectModal'; // افتراضيًا، يجب عليك إنشاء مكون للمودال

const Projects = () => {
  const [user, setuser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setuser(localStorage.getItem("is_online"));
    console.log("User is online:", user);
  }, [user]);

  const handleAddProjectClick = () => {
    setShowModal(true);
  };



  return (
    <main dir="ltr" className={``}>
      {user && <SideNav />}
      <div className="w-full flex justify-center items-center min-h-[95vh]">
        <button onClick={handleAddProjectClick}>إضافة مشروع</button>
        {user && (
          <div
            className={`modal absolute ${
              showModal ? "top-[170px]" : "top-[-500px]"
            }`}
          >
            <AddProject setShowModal={setShowModal} />
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
