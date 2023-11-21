"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo-dark1.png";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const handleToggleMenu = () => {
    setShowLinks(!showLinks);
  };
  const handleLinkClick = () => {
    setShowLinks(true);
  };
  return (
    <nav
      className={` ${
        theme === "dark" ? "dark-nav" : "light-nav"
      } fixed top-0 w-full `}
    >
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
        
          <label  className="buttons__burger md:hidden" for="burger">
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
            className={`links flex flex-col items-center justify-evenly h-full font-medium mt-4 rounded-lg md:space-x-8 md:items-center md:h-[54px] md:flex-row md:mt-0 md:border-0 `}
          >
            <li>
              <Link onClick={handleLinkClick} href="/About">عـن الشركـة</Link>
            </li>
            <li>
              <Link onClick={handleLinkClick} href="/Services">الخدمات</Link>
            </li>
            <li>
              <Link onClick={handleLinkClick} href="/Team">الفريــق</Link>
            </li>
            <li>
              <div className="cl-toggle-switch">
                <label className="cl-switch">
                  <input onClick={toggleTheme} type="checkbox" />
                  <span></span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
