import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import mom1 from "@assets/mom-baby-1.svg";
import logoBlanc from "@assets/logo-blanc.svg";

function Bienvenue({ setCompo }) {
  return (
    <div className="applituto">
      <main>
        <img src={logoBlanc} className="mini-logo" alt="logo-blanc" />
        <img src={mom1} alt="mom-baby-1" />

        <p className="title">Bienvenue !</p>
        <p className="sub-title">Votre compte a été créé avec succès ! </p>

        <p className="trouve">
          L’accueil en structure collective nécessite que vous remplissiez des
          informations administratives obligatoires.
        </p>
        <Link to="/appli/user">
          <button type="button" className="dossier">
            Compléter mon dossier
          </button>
        </Link>
      </main>

      <div className="button-bas right">
        <button type="button" className="butt" onClick={() => setCompo(2)}>
          Je complèterais plus tard<span className="fleche">{`>`}</span>
          <span className="round" />
        </button>
      </div>
    </div>
  );
}

Bienvenue.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Bienvenue;
