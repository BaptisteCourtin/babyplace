import React from "react";
import { Link } from "react-router-dom";

const Completion = ({ nom, completion }) => {
  const mystyle = {
    color: "black",
    width: `${completion}%`,
  };

  return (
    <div className="bar-completion">
      <Link to="/appli/user/completion">
        <p style={mystyle}>{nom}</p>
        <p>{completion}% complété</p>
      </Link>
    </div>
  );
};

export default Completion;
