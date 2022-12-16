import React from "react";
import { Link } from "react-router-dom";
import iconCran from "@assets/app parents/Icon cran.svg";

function PopUpProfilNonComplet({ setVisiblePopUp }) {
  return (
    <div className="pop">
      <button
        className="retour"
        type="button"
        onClick={() => setVisiblePopUp(false)}
      >
        Retour
      </button>
      <div className="cran">
        <img src={iconCran} alt="cran" />
        <h4>Mon dossier d'inscription</h4>
      </div>
      <p>
        Comme tout accueil en structure collective, vous devez compléter un
        dossier d’inscription comprennant :
        <br />
        <br />
        - un certificat médical d’aptitude de vie en collectivité
        <br />
        - une photocopie du carnet de vaccinations,
        <br />
        - une photocopie du livret de famille
        <br />- votre numéro d’allocataire CAF.
      </p>
      <button type="button">
        <Link to="/appli/user/completion" state={{ quelCompo: 2 }}>
          Compléter mon dossier
        </Link>
      </button>
    </div>
  );
}

export default PopUpProfilNonComplet;
