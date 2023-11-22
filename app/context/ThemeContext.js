"use client";
import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem('theme') || "dark";
  const [theme, setTheme] = useState(initialTheme);
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem('theme', theme === "light" ? "dark" : "light");
    
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
