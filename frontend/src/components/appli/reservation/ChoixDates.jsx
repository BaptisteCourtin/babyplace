import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppCalendar from "./AppCalendar";
import PropTypes from "prop-types";

function ChoixDates({
  setCompo,
  heureMax,
  heureMin,
  setHeureMin,
  setHeureMax,
  setJour,
  jour,
  setIsOccasionnel,
  isOccasionnel,
  photoProfil,
  nom,
  nomUsage,
  nomNaissance,
  prenom,
  dataHorairesId,
}) {
  const [thisMinHeure, setThisMinHeure] = useState();
  const [thisMaxHeure, setThisMaxHeure] = useState();

  console.log(jour);
  console.log("thismin" + thisMinHeure);
  console.log("thismax" + thisMaxHeure);
  console.log("mymin" + heureMin);
  console.log("mymax" + heureMax);

  return (
    <>
      <div className="button-top">
        <Link to="/appli/search">
          <button className="butt" type="button" onClick={() => setCompo(2)}>
            <span className="fleche">{`<`}</span>
            Annuler
            <span className="round" />
          </button>
        </Link>
      </div>
      <main className="choix-dates">
        <div className="profil-plat">
          <div className="container-image">
            <img src={photoProfil} alt="avatar" />
          </div>
          <div className="user-info">
            <p>Demandez une place à</p>
            <h3>
              {nom ||
                (nomUsage
                  ? `${prenom} ${nomUsage}`
                  : `${prenom} ${nomNaissance}`)}
            </h3>
          </div>
        </div>
        <AppCalendar
          // choisi par user
          setHeureMin={setHeureMin}
          setHeureMax={setHeureMax}
          setJour={setJour}
          setIsOccasionnel={setIsOccasionnel}
          isOccasionnel={isOccasionnel}
          // suivant le jour
          setThisMinHeure={setThisMinHeure}
          setThisMaxHeure={setThisMaxHeure}
          thisMinHeure={thisMinHeure}
          thisMaxHeure={thisMaxHeure}
          dataHorairesId={dataHorairesId}
        />
      </main>

      {heureMin < heureMax &&
      heureMin >= thisMinHeure &&
      heureMax <= thisMaxHeure ? (
        <div className="button-bas right">
          <div className="suivant">
            <button className="butt" type="button" onClick={() => setCompo(2)}>
              Suivant <span className="fleche">{`>`}</span>
              <span className="round" />
            </button>
          </div>
        </div>
      ) : (
        <div className="button-bas right">
          <div className="suivant">
            <button className="butt" type="button">
              choisir d'autres horaires
            </button>
          </div>
        </div>
      )}
    </>
  );
}

ChoixDates.propTypes = {
  setCompo: PropTypes.func.isRequired,
  setHeureMin: PropTypes.func.isRequired,
  setHeureMax: PropTypes.func.isRequired,
  setJour: PropTypes.func.isRequired,
  photoProfil: PropTypes.string.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string,
  nomNaissance: PropTypes.string,
  prenom: PropTypes.string,
  dataHorairesId: PropTypes.array.isRequired,
};

export default ChoixDates;
