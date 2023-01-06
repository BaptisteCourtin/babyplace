import React, { useState, useEffect } from "react";
import axios from "axios";
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
  photo1,
  photo3,
  indemnEntretien,
  indemnRepas,
  indemnKm,
  tarifHeure,
  structureId,
}) {
  const [kilometre, setKilometre] = useState(false);
  const [entretien, setEntretien] = useState(false);
  const [repas, setRepas] = useState(false);
  const [prixTotal, setPrixTotal] = useState(0);

  const calculPrixTotal = () => {
    setPrixTotal(
      (
        tarifHeure * (heureMax - heureMin) +
        (kilometre && indemnKm) +
        (repas && indemnRepas) +
        (entretien && indemnEntretien)
      ).toFixed(2)
    );
  };

  useEffect(() => {
    calculPrixTotal();
  }, [kilometre, entretien, repas]);

  let enfantId = 1;
  const handleRequest = () => {
    axios.post(`http://localhost:5000/reservation`, {
      enfantId,
      structureId,
      prixTotal,
      dateArrivee: jour,
      heureArrivee: heureMin,
      dateDepart: jour,
      heureDepart: heureMax,
    });
    // nom-prenom enfant
    // age enfant
    // nom-prenom parent
    // % profil complet

    // temps total
    setCompo(3);
  };

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
          <img src={photo3 || photo1} alt="img creche" />
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
              classique={true}
            />
            {indemnKm ? (
              <Toggle
                setter={setKilometre}
                state={kilometre}
                nom="kilometre"
                p={`Indemnité kilométrique (${indemnKm}€/km)`}
                classique={true}
              />
            ) : null}
            {indemnEntretien ? (
              <Toggle
                setter={setEntretien}
                state={entretien}
                nom="entretien"
                p={`Indemnité d'entretien (${indemnEntretien}€)`}
                classique={true}
              />
            ) : null}
          </div>
        </div>

        <div className="prix-resa">
          <div className="prix">
            <p>
              {/* indemnKm par rapport au km */}
              <span>{prixTotal}€ *</span>
            </p>
            <p>
              <span>{heureMax - heureMin}h de garde</span>
            </p>
          </div>
          <button type="button" onClick={() => handleRequest()}>
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

  heureMin: PropTypes.number.isRequired,
  heureMax: PropTypes.number.isRequired,
  jour: PropTypes.string.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string,
  nomNaissance: PropTypes.string,
  prenom: PropTypes.string,
  photo3: PropTypes.string.isRequired,
  indemnEntretien: PropTypes.number.isRequired,
  indemnRepas: PropTypes.number.isRequired,
  indemnKm: PropTypes.number.isRequired,
  tarifHeure: PropTypes.number.isRequired,
};

export default DemandeResa;
