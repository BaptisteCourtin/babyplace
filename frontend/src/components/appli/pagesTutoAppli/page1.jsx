import React from "react";
import { Link } from "react-router-dom";

import mom2 from "@assets/app parents/mom2.png";
import logoBlanc from "@assets/logo-blanc.svg";

function Page1() {
  return (
    <div className="applituto">
      <main className="page1">
        <img src={mom2} alt="mom-baby-2" />
        <img src={logoBlanc} alt="logo-blanc" />

        <p className="sub-title">Garde d’enfant à la demande </p>

        <p className="trouve">
          Réservez une place en moins de 60 secondes et obtenez une solution de
          garde, même pour le lendemain !
        </p>
      </main>
      <div className="button-bas space">
        <Link to="/appli/search">
          <button className="butt" type="button">
            Passer
          </button>
        </Link>

        <div className="suivant">
          <Link to="/appli/search">
            <button className="butt" type="button">
              Suivant <span className="fleche">{`>`}</span>
              <span className="round" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page1;
