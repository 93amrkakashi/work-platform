"use client";

import Link from "next/link";
import { useTheme } from "./context/ThemeContext";
import heroPic from "../_data/Programmer Illustration.svg";
import Image from "next/image";
import Fields from "./Fields";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main dir="ltr" className={``}>
      <div className="flex flex-col items-center justify-around">
        <div
          className={`hero flex flex-col md:flex-row  justify-evenly items-center  pb-6 min-h-[95vh]  w-full ${
            theme === "dark" ? "bg-slate-900" : "bg-indigo-700"
          }`}
        >
          <div className="flex flex-col justify-center gap-5 items-start px-3 pb-12">
            <h1 className="font-bold text-6xl text-gray-50">
              Scripto Code
            </h1>
            <h1 className="font-bold text-3xl text-gray-50">
              A Software Company
            </h1>
            <p className="font-bold text-2xl text-gray-100 ">
              Your Programming Solutions Partner
            </p>
          </div>
          <div className="">
            <Image
              className="animate__animated animate__floating"
              src={heroPic}
              alt="logo"
              width={610}
              height={1000}
            />
          </div>
        </div>
        {/* ********************* */}
        <div
          dir="rtl"
          className={` flex justify-center items-center min-h-[40vh]  w-full`}
        >
          <div className="flex flex-col justify-center items-center  pb-6">
            <h1 className="text-slate-900 font-bold text-3xl md:text-5xl pb-6 ps-10">
              عن{" "}
              <span className="co-name font-bold text-3xl md:text-5xl">Scripto Code</span>
            </h1>
            <p className="font-bold text-2xl text-gray-600 p-0 px-10 m-0 text-center">
              نحن شركة برمجيات مصرية متخصصة في تقديم حلول تكنولوجيا المعلومات.
              يفخر فريقنا بأنه مكون من مصريين متميزين في مجال البرمجة وتطوير
              البرمجيات، ونسعى جاهدين لتقديم خدمات عالية الجودة لعملائنا.
            </p>
          </div>
        </div>
        {/* ********************* */}
        <div dir="rtl"
          className={` flex justify-center items-center min-h-[40vh]  w-full`}
        >
          <div className="flex flex-col justify-center items-center  pb-6">
            <p className="font-bold text-2xl text-gray-600 p-0 px-10 pb-12 m-0 text-center">
              
              نقدم لك مجموعه من التطبيقات والحلول البرمجية التى تساعد فى ادارة العديد من الاعمال والانشطة مثل  ....
            </p>
            <Fields />
          </div>
        </div>
      </div>
    </main>
  );
}
