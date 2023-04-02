import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import FamilleContext from "@components/context/FamilleContext";
import { Link } from "react-router-dom";
import logoBlanc from "@assets/logo-blanc.svg";
import PropTypes from "prop-types";
import { AiOutlineUser } from "react-icons/ai";

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
  const { familleId } = useContext(FamilleContext);
  const [photoFamille, setPhotoFamille] = useState();

  // --- get photo famille ---
  const getFamilleInfo = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/info/${familleId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setPhotoFamille(res.data[1][0].photoProfilFamille);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getFamilleInfo(source);
    return () => {
      source.cancel();
    };
  }, [familleId]);

  return (
    <>
      <main className="confirme-resa">
        <img src={logoBlanc} className="mini-logo" alt="logo-blanc" />
        <div className="avatars">
          {photoFamille ? (
            <img className="avatar" src={photoFamille} alt="avatar" />
          ) : (
            <AiOutlineUser className="avatar" />
          )}
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
          <p>Statut de votre demande :</p>
          <br />
          <span>En attente de confirmation</span>
        </div>

        <p>
          N’oubliez pas de compléter votre profil pour avoir plus de chances que
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
  heureMin: PropTypes.string.isRequired,
  heureMax: PropTypes.string.isRequired,
  jour: PropTypes.string.isRequired,
  photoProfil: PropTypes.string.isRequired,
  nom: PropTypes.string,
  nomUsage: PropTypes.string,
  nomNaissance: PropTypes.string,
  prenom: PropTypes.string,
};

export default ConfirmeResa;
