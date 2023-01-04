import React from "react";
import { Link } from "react-router-dom";
import logoBlanc from "@assets/logo-blanc.svg";
import PropTypes from "prop-types";

function ConfirmeResa({
  heureMin,
  heureMax,
  jour,
  photoProfil,
  nom,
  nomUsage,
  nomNaissance,
  prenom,
}) {
  return (
    <>
      <main className="confirme-resa">
        <img src={logoBlanc} className="mini-logo" alt="logo-blanc" />
        <div className="avatars">
          <img className="avatar" src={photoProfil} alt="avatar1" />
          <img className="avatar" src={photoProfil} alt="avatar2" />
        </div>
        <h3 className="title">Réservation</h3>
        <p className="sub-title">
          Votre demande a bien été envoyée à{" "}
          {nom ||
            (nomUsage
              ? `${prenom} ${nomUsage}`
              : `${prenom} ${nomNaissance}`)}{" "}
          :<br />
          <span>
            {jour} de {heureMin}h à {heureMax}h
          </span>
        </p>

        <div className="status-demande">
          <p>Status de votre demande :</p>
          <br />
          <span>En attente de confirmation</span>
        </div>

        <p>
          N’oubliez pas de compléter votre profil pour avoir plus de chance que
          votre demande soit acceptée
        </p>
      </main>
      <div className="button-bas right">
        <Link to="/appli/search">
          <button className="butt" type="button">
            Suivant <span className="fleche">{`>`}</span>
            <span className="round" />
          </button>
        </Link>
      </div>
    </>
  );
}

ConfirmeResa.propTypes = {
  heureMin: PropTypes.number.isRequired,
  heureMax: PropTypes.number.isRequired,
  jour: PropTypes.string.isRequired,
  photoProfil: PropTypes.string.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string,
  nomNaissance: PropTypes.string,
  prenom: PropTypes.string,
};

export default ConfirmeResa;
