import React from "react";

import { FaSun, FaMoon } from "react-icons/fa";

// mettre de bonnes couleurs
// remettre bien les couleurs (ex: le fond, les textes)

function ToggleDarkLight({ isDarkTheme, setIsDarkTheme }) {
  return (
    <button
      className="toggleDarkLight"
      onClick={() => setIsDarkTheme(!isDarkTheme)}
    >
      <FaSun className={isDarkTheme ? "icon sun dark" : "icon sun light"} />
      <FaMoon className={isDarkTheme ? "icon moon dark" : "icon moon light"} />
    </button>
  );
}

export default ToggleDarkLight;
