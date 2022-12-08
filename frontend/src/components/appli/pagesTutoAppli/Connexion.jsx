import React from "react";
import PropTypes from "prop-types";

function Connexion({ setCompo }) {
  return (
    <main className="appli-connexion">
      <button type="button" className="button" onClick={() => setCompo(4)}>
        Se connecter
      </button>
      connexion
      <button type="button" className="button" onClick={() => setCompo(1)}>
        Créer un compte
      </button>
    </main>
  );
}

Connexion.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Connexion;
