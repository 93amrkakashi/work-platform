"use client";

import React, { useState } from "react";
import { url } from "../page";

const AddProject = ({ setShowModal, projects, setprojects }) => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [loading, setloading] = useState(false);

  async function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    const data = {
      name,
      description,
      image,
      category,
    };

    try {
      const response = await fetch(`${url}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setloading(false);
        window.location.reload();
      } else {
        console.error("Failed to add project:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <form
        dir="rtl"
        className={`w-[420px] min-h-[450px] flex flex-col 
        justify-evenly items-center rounded-xl light-nav`}
      >
        <div className="field">
          <p className="font-bold text-4xl">اضافة مشروع</p>
        </div>

        <div className="field flex justify-between px-3 items-center w-full">
          <input
            placeholder="اسم المشروع هنا ......."
            className="text-black rounded-xl px-2 text-lg w-full h-[36px] mx-2 "
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div className="field flex justify-between px-3 items-center w-full">
          <textarea
            placeholder="الوصف هنا ......."
            className="text-black rounded-xl px-2 text-lg w-full  mx-2 "
            type="text"
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>
        <div className="field flex justify-between px-3 items-center w-full">
          <input
            placeholder="رابط الصورة هنا ..."
            className="text-black rounded-xl px-2 text-lg w-full h-[36px] mx-2 "
            type="text"
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
        </div>

        <div className="field flex justify-between px-3 items-center w-full">
          <select
            className="text-black rounded-xl px-2 text-lg w-full h-[36px] mx-2"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="" disabled selected>
              اختر الفئة
            </option>
            <option value="ويب">ويب</option>
            <option value="موبايل">موبايل</option>
            <option value="ديسك توب">ديسك توب</option>
          </select>
        </div>

        <div className="w-full flex justify-around items-center ">
          <button
            onClick={handlesubmit}
            disabled={loading}
            type="submit"
            className={`bg-indigo-500 border rounded-xl border-slate-50 font-bold text-xl px-9`}
          >
            {loading ? "جارى الاضافة .." : "اضافة"}
          </button>
          <button
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
            className={`bg-red-500 border rounded-xl border-slate-50 font-bold text-xl px-9`}
          >
            الغاء
          </button>
        </div>
      </form>
    </div>
  );
};

// تصدير مكون AddProject
export default AddProject;
