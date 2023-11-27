"use client";
import React, { useEffect, useState } from "react";
import SideNav from "../SideNav";
import AddProject from "./AddProject";
import { url } from "../page";
import Project from "./Project";

const Projects = () => {
  const [user, setuser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [projects, setprojects] = useState(null);
  const [filterd, setfilterd] = useState(null)
  const [active, setactive] = useState(false)
  const [loading, setloading] = useState(false)

  const fetchProjects = async () => {
    setloading(true)
    try {
      const response = await fetch(`${url}/projects`);
      if (response.ok) {
        const data = await response.json();
        setprojects(data);
        console.log(data)
        setfilterd(data)
        setloading(false)
      } else {
        console.error("Failed to fetch projects:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const changeCategory = (category) => {
    if (!category || category =="الكل") {
      setfilterd(projects);
      setactive(null);
      return;
    }
    const filterd = projects.filter((project) => project.category === category);
    setfilterd(filterd);
    setactive(category)
  };
  useEffect(() => {
    // const storedUser = localStorage.getItem("user");
    fetchProjects();
    
  }, []);
  useEffect(() => {
    setuser(localStorage.getItem('name')) ;
    console.log(user)
  }, [user]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <main dir="ltr" className={``}>
      {user && <SideNav />}
      <div className="mt-16 w-full flex flex-col justify-start items-center min-h-[95vh]">
        {user && <button
          className="bg-indigo-500 border rounded-xl text-slate-50 font-bold text-xl px-9"
          onClick={handleShowModal}
        >
          إضافة مشروع
        </button>}
        <div className="flex flex-col justify-center items-center w-full p-10 mt-3">
          <div dir="ltr" className="w-full flex flex-row-reverse justify-around items-center border-4 rounded-xl text-xl py-2 px-9 mb-9">
            <div onClick={() => {changeCategory("الكل")}} className={`cursor-pointer ${active ==null ?"text-indigo-700":"text-slate-800"} font-bold`}>الكل</div>
            <div onClick={() => {changeCategory("ويب")}} className={`cursor-pointer ${active =="ويب" ?"text-indigo-700":"text-slate-800"} font-bold`}>ويب</div>
            <div onClick={() => {changeCategory("موبايل")}} className={`cursor-pointer ${active =="موبايل" ?"text-indigo-700":"text-slate-800"} font-bold`}>موبايل</div>
            <div onClick={() => {changeCategory("ديسك توب")}} className={`cursor-pointer ${active =="ديسك توب" ?"text-indigo-700":"text-slate-800"} font-bold`}>ديسك توب</div>
          </div>
          {loading ?"جارى جلب المشروعات..." :<div className="w-full flex justify-evenly items-center flex-wrap gap-6 ">
            {filterd?.map((project) => (
              <div key={project._id}>
                <Project project={project} />
              </div>
            ))}
          </div>}
        </div>

        {/* ********* */}
        <div
          className={`modal absolute ${
            showModal ? "top-[170px]" : "top-[-500px]"
          }`}
        >
          <AddProject projects={projects} setprojects={setprojects} setShowModal={setShowModal} />
        </div>
      </div>
    </main>
  );
};

export default Projects;
