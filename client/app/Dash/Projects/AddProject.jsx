"use client"

import React, { useState } from "react";

const AddProject = ({setShowModal}) => {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState(""); // حالة الفئة

  function handlesubmit(e) {
    setShowModal(false)
    e.preventDefault();
    console.log("Submitted values:", name, description, image, category);
  }

  return (
    <div>
      <form
      dir="rtl"
        onSubmit={handlesubmit}
        className={`w-[420px] min-h-[500px] flex flex-col 
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
            <option value="web">ويب</option>
            <option value="mobile">موبايل</option>
            <option value="desktop">ديسك توب</option>
          </select>
        </div>

        <div className="w-full flex justify-around items-center ">
          <button
            type="submit"
            className={`bg-indigo-500 border rounded-xl border-slate-50 font-bold text-xl px-9`}
          >
            اضافة مشروع
          </button>
          <button
          onClick={() => {setShowModal(false)}}
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
