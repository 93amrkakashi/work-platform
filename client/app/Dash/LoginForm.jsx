"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { url } from "./page";

const LoginForm = ({setuser}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false)
  // const router = useRouter();


  function handleLogin(event) {
    event.preventDefault();
    setloading(true)
    const data = {
      email: email,
      password: password,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(`${url}/user/login`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log("Login successful", data);
        localStorage.setItem("name", `${data.firstName} ${data.lastName}`);
        setuser(localStorage.getItem('name'))
        setloading(false)
        window.location.reload()
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  }

  return (
    <form
      onSubmit={handleLogin}
      className={`w-[420px] min-h-[400px] flex flex-col 
        justify-evenly items-center rounded-xl light-nav`}
    >
      <div className="field">
        <p className="font-bold text-4xl">Login</p>
      </div>
      <div className="field flex justify-between px-3 items-center w-full">
        <input
          placeholder="Your Email Here ......."
          className="text-black rounded-xl px-2 text-lg w-full h-[36px] mx-2 "
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div className="field flex justify-between px-3 items-center w-full">
        <input
          placeholder="Your Password Here ......."
          className="text-black rounded-xl px-2 text-lg w-full h-[36px] mx-2 "
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
      </div>
      <div className="field">
        <button
          type="submit"
          className={`bg-indigo-900 border rounded-xl border-slate-50 font-bold text-2xl px-12`}
        >
          {loading ? "Logging...":"Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
