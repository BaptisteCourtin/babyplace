import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Completion({ nom, completion }) {
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
}

Completion.propTypes = {
  nom: PropTypes.string.isRequired,
  completion: PropTypes.number.isRequired,
};

export default Completion;
