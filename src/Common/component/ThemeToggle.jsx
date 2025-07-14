// ThemeToggle.jsx
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "../css/ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
    window.location.reload();
  };

  return (
    <div className="theme-toggle-neumorphic">
      <input
        type="checkbox"
        id="theme-switch"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className="switch-neumorphic">
        <div className="slider">
          {theme === "dark" ? (
            <FiMoon className="icon" />
          ) : (
            <FiSun className="icon" />
          )}
        </div>
      </label>
    </div>
  );
};

export default ThemeToggle;
