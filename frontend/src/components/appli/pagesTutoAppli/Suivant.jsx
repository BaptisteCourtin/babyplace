import React from "react";
import PropTypes from "prop-types";

function Suivant({ setPageAppli }) {
  return (
    <div className="suivant">
      <button
        className="butt"
        type="button"
        onClick={() => setPageAppli(false)}
      >
        Suivant <span className="fleche">{`>`}</span>
        <span className="round" />
      </button>
    </div>
  );
}

Suivant.propTypes = {
  setPageAppli: PropTypes.func.isRequired,
};

export default Suivant;
