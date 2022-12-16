import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Completion({ nom, completion, quelCompo }) {
  const mystyle = {
    width: `${completion}%`,
  };
  console.log(quelCompo);
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
};

export default Completion;
