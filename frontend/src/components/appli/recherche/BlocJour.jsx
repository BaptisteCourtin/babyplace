import React from "react";
import PropTypes from "prop-types";

function BlocJour({ jour, check }) {
  return (
    <div className={check ? "daygreen" : "daygray"}>
      <p className="each-jour">{jour}</p>
    </div>
  );
}

BlocJour.propTypes = {
  jour: PropTypes.string.isRequired,
  check: PropTypes.number.isRequired,
};

export default BlocJour;
