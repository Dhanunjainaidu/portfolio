import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Theme context
const ThemeContext = createContext();

// Helper function: detects initial theme
const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme === "dark";
  }
  // Default to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the context
export const useTheme = () => useContext(ThemeContext);
