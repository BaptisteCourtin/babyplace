import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Completion({ nom, completion, quelCompo }) {
  // --- taille remplissage ---
  const mystyle = {
    width: `${completion}%`,
  };

  return (
    <div className="bar-completion">
      <Link to="/appli/user/completion" state={{ quelCompo }}>
        <p style={mystyle}>
          <span>{nom}</span>
        </p>
        <p>
          <span>{completion}% complété</span>
        </p>
      </Link>
    </div>
  );
}

Completion.propTypes = {
  nom: PropTypes.string.isRequired,
  completion: PropTypes.number.isRequired,
  quelCompo: PropTypes.number.isRequired,
};

export default Completion;
