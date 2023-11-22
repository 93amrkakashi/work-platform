"use client";

import React from 'react'
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className={` ${
      theme === "dark" ? "dark-body" : "light-body"
    } `}>
      <div>Services</div>

    </main>
  )
}

export default Services