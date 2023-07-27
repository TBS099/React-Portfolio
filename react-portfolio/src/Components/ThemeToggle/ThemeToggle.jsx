import React, { useEffect, useState } from "react";
import "./ThemeToggler.css";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="nav_ac portfolio-dark-light" onClick={themeToggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
}

export default ThemeToggle;
