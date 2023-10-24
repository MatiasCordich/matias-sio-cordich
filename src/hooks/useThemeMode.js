import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("default");


  const toggleTheme = () => {
    if (theme === "default") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
      return;
    }

    window.localStorage.setItem("theme", "default");
    setTheme("default");
  };

  const savedTheme = window.localStorage.getItem("theme")

  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  })

  useEffect(() => {
    savedTheme && setTheme(savedTheme)
  }, [])

  return [theme, toggleTheme];
};