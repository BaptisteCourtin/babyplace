import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Toggle from "../filtres/Toggle";

function DemandeResa({
  setCompo,
  heureMin,
  heureMax,
  jour,
  nom,
  nomUsage,
  nomNaissance,
  prenom,
  photo3,
  indemnEntretien,
  indemnRepas,
  indemnKm,
  tarifHeure,
}) {
  const [kilometre, setKilometre] = useState(false);
  const [entretien, setEntretien] = useState(false);
  const [repas, setRepas] = useState(false);

  return (
    <>
      <div className="button-top">
        <div className="suivant">
          <Link to="/appli/search">
            <button className="butt" type="button">
              <span className="fleche">{`<`}</span>
              Annuler
              <span className="round" />
            </button>
          </Link>
        </div>
      </div>
      <main className="demande-resa">
        <div className="container-img">
          <img src={photo3} alt="img creche" />
        </div>

        <div className="principale">
          <div className="text">
            <h3>
              Demande de réservation à{" "}
              {nom ||
                (nomUsage
                  ? `${prenom} ${nomUsage}`
                  : `${prenom} ${nomNaissance}`)}
            </h3>
            <p>Date : {jour} </p>
            <p>
              Horaires : {heureMin}h-{heureMax}h
            </p>
          </div>

          <div className="tog">
            <Toggle
              setter={setRepas}
              state={repas}
              nom="repas"
              p={`Indemnité de repas (${indemnRepas}€)`}
            />
            {indemnKm ? (
              <Toggle
                setter={setKilometre}
                state={kilometre}
                nom="kilometre"
                p={`Indemnité kilométrique (${indemnKm}€/km)`}
              />
            ) : null}
            {indemnEntretien ? (
              <Toggle
                setter={setEntretien}
                state={entretien}
                nom="entretien"
                p={`Indemnité d'entretien (${indemnEntretien}€)`}
              />
            ) : null}
          </div>
        </div>

        <div className="prix-resa">
          <div className="prix">
            <p>
              {/* indemnKm par rapport au km */}
              <span>
                {(
                  tarifHeure * (heureMax - heureMin) +
                  (kilometre && indemnKm) +
                  (repas && indemnRepas) +
                  (entretien && indemnEntretien)
                ).toFixed(2)}
                € *
              </span>
            </p>
            <p>
              <span>{heureMax - heureMin}h de garde</span>
            </p>
          </div>
          <button type="button" onClick={() => setCompo(3)}>
            Suivant
          </button>
        </div>
      </main>

      <footer>
        * En complétant mon profil, je peux obtenir une tarification
        personnalisée en fonction de mes revenus
      </footer>
    </>
  );
}

DemandeResa.propTypes = {
  setCompo: PropTypes.func.isRequired,
  photo3: PropTypes.string.isRequired,
  tarif: PropTypes.number.isRequired,
};

export default DemandeResa;
