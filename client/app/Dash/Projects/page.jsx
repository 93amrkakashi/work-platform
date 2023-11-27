"use client";
import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import AddProject from "./AddProject";
// import AddProjectModal from './AddProjectModal'; // افتراضيًا، يجب عليك إنشاء مكون للمودال

const Projects = () => {
  const [user, setuser] = useState(localStorage.getItem("user") || null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <main dir="ltr" className={``}>
      {user && <SideNav />}
      <div className="w-full flex justify-center items-center min-h-[95vh]">
        <button
          className="bg-indigo-500 border rounded-xl text-slate-50 font-bold text-xl px-9"
          onClick={handleShowModal}
        >
          إضافة مشروع
        </button>

        

        {/* ********* */}
        <div
          className={`modal absolute ${
            showModal ? "top-[170px]" : "top-[-500px]"
          }`}
        >
          <AddProject setShowModal={setShowModal} />
        </div>
      </div>
    </main>
  );
};

export default Projects;
