import React from "react";
import PropTypes from "prop-types";

function SeConnecter({ setCompo }) {
  return (
    <main className="se-connecter">
      se connecter
      <button type="button" className="button" onClick={() => setCompo(1)}>
        Se connecter
      </button>
    </main>
  );
}

SeConnecter.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default SeConnecter;
