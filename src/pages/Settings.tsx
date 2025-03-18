import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Settings.css";

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="settings-page">
      <button
        onClick={() => navigate("/auth/callback")}
        className="back-button"
      >
        Go Back
      </button>
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <span className="slider round"></span>
          </label>
          <span className="mode-text">
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Settings;
