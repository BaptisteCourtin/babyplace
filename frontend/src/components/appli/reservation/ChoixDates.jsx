import React from "react";
import { Link } from "react-router-dom";
import AppliPlaces from "@components/appli/filtres/AppliPlaces";
import PropTypes from "prop-types";

function ChoixDates({
  setCompo,
  setHeureMin,
  setHeureMax,
  setJour,
  photoProfil,
  nom,
  nomUsage,
  nomNaissance,
  prenom,
  dataHorairesId,
}) {
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
        <AppliPlaces
          dataHorairesId={dataHorairesId}
          setHeureMin={setHeureMin}
          setHeureMax={setHeureMax}
          setJour={setJour}
        />
      </main>

      <div className="button-bas right">
        <div className="suivant">
          <button className="butt" type="button" onClick={() => setCompo(2)}>
            Suivant <span className="fleche">{`>`}</span>
            <span className="round" />
          </button>
        </div>
      </div>
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
