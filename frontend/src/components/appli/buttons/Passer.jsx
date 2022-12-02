import React from "react";
import { Link } from "react-router-dom";

function Passer() {
  return (
    <Link to="/appli/home">
      <button className="butt" type="button">
        Passer
      </button>
    </Link>
  );
}

export default Passer;
