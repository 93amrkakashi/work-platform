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
        {/* ********************* */}
        <div
          className={`hero flex justify-center items-center pt-3 min-h-[95vh] ${
            theme === "dark" ? "bg-slate-900" : "bg-indigo-700"
          } w-full`}
        >
          <div className="flex flex-col justify-center gap-5 items-start  pb-12">
            <h1 className="font-bold text-6xl text-gray-50 ps-10">
              Scripto Code
            </h1>
            <h1 className="font-bold text-3xl text-gray-50 ps-10">
              A Software Company
            </h1>
            <p className="font-bold text-2xl text-gray-100 ps-10 ">
              Your Programming Solutions Partner
            </p>
          </div>
          <div className="md:ml-[100px] ">
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
          className={` flex justify-center items-center min-h-[40vh]  w-full`}
        >
          <div className="flex flex-col justify-center items-center  pb-6">
            <h1 className="text-slate-900 font-bold text-5xl pb-6 ps-10">
              About{" "}
              <span className="co-name font-bold text-5xl">Scripto Code</span>
            </h1>
            <p className="font-bold text-2xl text-gray-600 p-0 px-10 m-0 text-center">
              We are an Egyptian software company specialized in providing
              information technology solutions.
            </p>
            <p className="font-bold text-2xl text-gray-600 p-0 px-10 m-0 text-center">
              {" "}
              Our team is proud of being made up of distinguished Egyptians in
              the field of programming and software development, and we strive
              to provide high quality services to our customers.
            </p>
          </div>
        </div>
        {/* ********************* */}
        <div
          className={` flex justify-center items-center min-h-[40vh]  w-full`}
        >
          <div className="flex flex-col justify-center items-center  pb-6">
            <p className="font-bold text-2xl text-gray-600 p-0 px-10 pb-12 m-0 text-center">
              We assist you in digital transformation across various activities
              and fields, providing software solutions that enhance work
              efficiency in ....
            </p>
            <Fields />
          </div>
        </div>
      </div>
    </main>
  );
}
