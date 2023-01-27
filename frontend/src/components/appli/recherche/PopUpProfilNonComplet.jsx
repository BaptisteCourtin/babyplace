import React from "react";
import { Link } from "react-router-dom";
import iconCran from "@assets/app parents/Icon cran.svg";
import PropTypes from "prop-types";

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
        dossier d’inscription comprennant notamment :
        <br />
        <br />
        - le nom et prénom de l'enfant
        <br />
        - les allergies de l'enfnat
        <br />- le nom du medecin traitant de l'enfant
      </p>
      <button type="button" className="compris">
        <Link to="/appli/user/completion" state={{ quelCompo: 2 }}>
          Compléter mon dossier
        </Link>
      </button>
    </div>
  );
}

PopUpProfilNonComplet.propTypes = {
  setVisiblePopUp: PropTypes.func.isRequired,
};

export default PopUpProfilNonComplet;
