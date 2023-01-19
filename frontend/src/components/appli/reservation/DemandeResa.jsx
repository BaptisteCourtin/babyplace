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
  isOccasionnel,
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
    // heure commencé = payer
    setPrixTotal(
      (
        tarifHeure * (heureMax.split(":")[0] - heureMin.split(":")[0]) +
        (heureMax.split(":")[1] - heureMin.split(":")[1] > 0 ? tarifHeure : 0) +
        (kilometre && indemnKm) +
        (repas && indemnRepas) +
        (entretien && indemnEntretien)
      ).toFixed(2)
    );
  };

  useEffect(() => {
    calculPrixTotal();
  }, [kilometre, entretien, repas]);

  const enfantId = 1;
  const handleRequest = () => {
    axios.post(`${import.meta.env.VITE_PATH}/reservation`, {
      enfantId,
      structureId,
      prixTotal,

      isOccasionnel,
      dateArrivee: jour,
      heureArrivee: heureMin,
      dateDepart: jour,
      heureDepart: heureMax,
    });
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
              classique
            />
            {/* indemnKm à mettre par rapport au km */}
            {indemnKm ? (
              <Toggle
                setter={setKilometre}
                state={kilometre}
                nom="kilometre"
                p={`Indemnité kilométrique (${indemnKm}€/km)`}
                classique
              />
            ) : null}
            {indemnEntretien ? (
              <Toggle
                setter={setEntretien}
                state={entretien}
                nom="entretien"
                p={`Indemnité d'entretien (${indemnEntretien}€)`}
                classique
              />
            ) : null}
          </div>
        </div>

        <div className="prix-resa">
          <div className="prix">
            <p>
              <span>{prixTotal}€ *</span>
            </p>
            <p>
              <span>
                {`${
                  heureMax.split(":")[1] - heureMin.split(":")[1] >= 0
                    ? heureMax.split(":")[0] - heureMin.split(":")[0]
                    : heureMax.split(":")[0] - heureMin.split(":")[0] - 1
                }:${
                  heureMax.split(":")[1] - heureMin.split(":")[1] >= 0
                    ? heureMax.split(":")[1] - heureMin.split(":")[1]
                    : 60 - heureMax.split(":")[1] - heureMin.split(":")[1]
                } h de garde`}
              </span>
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

  heureMin: PropTypes.string.isRequired,
  heureMax: PropTypes.string.isRequired,
  jour: PropTypes.string.isRequired,
  isOccasionnel: PropTypes.number.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string,
  nomNaissance: PropTypes.string,
  prenom: PropTypes.string,
  photo1: PropTypes.string.isRequired,
  photo3: PropTypes.string.isRequired,
  indemnEntretien: PropTypes.number.isRequired,
  indemnRepas: PropTypes.number.isRequired,
  indemnKm: PropTypes.number.isRequired,
  tarifHeure: PropTypes.number.isRequired,
  structureId: PropTypes.number.isRequired,
};

export default DemandeResa;
