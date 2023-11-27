"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo-dark1.png";
// import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const [user, setuser] = useState(null);
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [active, setactive] = useState(null)
  // const { theme, toggleTheme } = useTheme();

  const handleToggleMenu = () => {
    setShowLinks(!showLinks);
  };
  const handleLinkClick = (link) => {
    setShowLinks(true);
    // setactive(link)
  };

  const handleUserClick = () => {
    setShowLogoutMenu(!showLogoutMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    setShowLogoutMenu(false);
    window.location.reload();
  };

  useEffect(() => {
    setuser(localStorage.getItem("name"));
    console.log(user);
  }, [user]);

  return (
    <div className={` bg-indigo-700 fixed top-0 w-full `}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1 fixed-top">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={110}
            placeholder="blur"
            quality={100}
          />
        </Link>

        <label className="buttons__burger md:hidden">
          <input onClick={handleToggleMenu} type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div
          className={`nav w-full h-[200px] md:h-[55px] md:flex md:w-auto ${
            showLinks ? "hidden" : "block"
          }`}
        >
          <ul
            className={`text-gray-50 text-xl font-bold links flex flex-col items-center justify-evenly h-full  mt-4 rounded-lg md:space-x-8 md:items-center md:h-[54px] md:flex-row md:mt-0 md:border-0 `}
          >
            <li>
              <Link onClick ={handleLinkClick} href="/" className={`nav-link`}>
                عن الشركة
              </Link>
            </li>
            <li>
              <Link
                onClick ={handleLinkClick}
                href="/Services"
                className={`nav-link`}
              >
                الخدمات
              </Link>
            </li>
            <li>
              <Link
                onClick ={handleLinkClick}
                href="/Projects"
                className={`nav-link`}
              >
                أعمالنا
              </Link>
            </li>

            {user && (
              <li
                className="cursor-pointer relative text-lg font-bold text-slate-50"
                onClick={handleUserClick}
              >
                {user}
                {showLogoutMenu && (
                  <ul className="transition duration-650 ease-in-out list absolute flex flex-col items-center justify-center gap-3 top-10 right-[0px] rounded border-2 p-3 bg-slate-50 text-slate-900 w-[150px]">
                    <li
                      onClick={handleLogout}
                      className="cursor-pointer font-bold transition duration-550 ease-in-out hover:text-indigo-500"
                    >
                      تسجيل الخروج
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
