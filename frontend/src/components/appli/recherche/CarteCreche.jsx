import React from "react";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import PropTypes from "prop-types";

function CarteCreche({ img, prix, jours, condition }) {
  return (
    <Link to="/appli/search/card" state={{ img, prix, jours, condition }}>
      <div className="carte-creche">
        <img src={img} alt="img creche" />
        <div className="info-creche">
          <div className="ville-prix">
            <p>ville à X mètres</p>
            <p className="prix">{prix}</p>
          </div>
          <div className="jours">
            {jours.map((each) => (
              <BlocJour jour={each.jour} check={each.check} />
            ))}
          </div>
          {condition.verif ? <p>N’accepte que les profils vérifiés</p> : null}
          {condition.essai ? <p>Période d’adaptation obligatoire</p> : null}
        </div>
      </div>
    </Link>
  );
}

CarteCreche.propTypes = {
  img: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
  jours: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
};

export default CarteCreche;
