import React from "react";

const ToggleDarkLight = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <button
      className="toggleDarkLight"
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      C
    </button>
  );
};

export default ToggleDarkLight;
