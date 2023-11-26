"use client";
import React from 'react'
// import { useTheme } from '../context/ThemeContext';

const LoginForm = () => {
  // const { theme } = useTheme();

  function handleLogin() {
    
  }

  return (
    <form
          className={`w-[420px] min-h-[400px] flex flex-col 
        justify-evenly items-center rounded-xl light-nav`}
        >
          <div className="field">
            <p className="font-bold text-4xl">Login</p>
          </div>
          <div className="field flex justify-between px-3 items-center w-full">
            <input
              placeholder="Your Email Here ......."
              className="rounded-xl px-2 text-lg w-full h-[36px] mx-2 "
              type="email"
              name=""
              id=""
            />
          </div>
          <div className="field flex justify-between px-3 items-center w-full">
            <input
              placeholder="Your Password Here ......."
              className="rounded-xl px-2 text-lg w-full h-[36px] mx-2 "
              type="password"
              name=""
              id=""
            />
          </div>
          <div className="field">
            <button
              className={`bg-indigo-900 border rounded-xl border-slate-50 font-bold text-2xl px-12`}
            >
              Login
            </button>
          </div>
        </form>
  )
}

export default LoginForm