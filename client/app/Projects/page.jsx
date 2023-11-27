"use client";

import React from 'react';
import Projects from '../Dash/Projects/page';
// import { useTheme } from '../context/ThemeContext';

const Team = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <main className="">
      <div className="w-full flex justify-center items-center min-h-[95vh]">
        <Projects /> 
      </div>
    </main>
  );
}

export default Team;
