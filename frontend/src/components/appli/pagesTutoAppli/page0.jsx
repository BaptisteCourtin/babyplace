import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import mom1 from "@assets/mom-baby-1.svg";
import logoBlanc from "@assets/logo-blanc.svg";

function Page0({ setCompo }) {
  return (
    <div className="applituto">
      <main>
        <img src={mom1} alt="mom-baby-1" />
        <img src={logoBlanc} alt="logo-blanc" />

        <p className="sub-title">Garde d’enfant à la demande </p>

        <p className="trouve">
          Trouver un.e professionel.le de la garde d’enfant
        </p>
      </main>
      <div className="button-bas">
        <Link to="/appli/search">
          <button className="butt" type="button">
            Passer
          </button>
        </Link>
        <div className="suivant">
          <button className="butt" type="button" onClick={() => setCompo(3)}>
            Suivant <span className="fleche">{`>`}</span>
            <span className="round" />
          </button>
        </div>
      </div>
    </div>
  );
}

Page0.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Page0;
