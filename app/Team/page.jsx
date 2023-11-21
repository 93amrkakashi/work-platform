"use client";

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Team = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={` ${
      theme === "dark" ? "dark-body" : "light-body"
    } `}>
      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">
          مرحبًا بك في <span className="co-name">Scripto Code</span>
        </h1>
        
        
      </div>
    </main>
  );
}

export default Team;
