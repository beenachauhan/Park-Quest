import React  from "react";
import "../assets/css/Mode.css";

function Mode({ className, theme, toggleTheme }) {
  
  const themeIcon = (theme === 'light' ? "⚪️" : "🌑"); 

  return (
    <div className={`${className} ThemeSwitcher`}>
      <button type="button" className="theme-toggle" onClick={toggleTheme}>
        <span className="mode"> Mode: </span>
        {themeIcon}
      </button>
    </div>

  );
}

export default Mode;