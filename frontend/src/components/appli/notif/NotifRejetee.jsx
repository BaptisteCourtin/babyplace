import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logoBlanc from "@assets/logo-blanc.svg";
import { AiOutlineUser } from "react-icons/ai";

function NotifRejetee({ setCompo, photoFamille, oneReservation }) {
  const {
    crecheNom,
    assMatNomUsage,
    assMatPrenom,
    assMatNomNaissance,
    jour,
    heureArrivee,
    heureDepart,
    prenom,
    nom,
  } = oneReservation;

  // --- delete la reservation quand on clique sur voir autres ---
  const removeResa = () => {
    axios.delete(
      `${import.meta.env.VITE_PATH}/reservation/deleteResa/${oneReservation.id}`
    );
  };

  return (
    <div className="notif-container-grad">
      <div className="notif-rejet">
        <div className="button-top">
          <button
            className="butt big"
            type="button"
            onClick={() => setCompo(0)}
          >
            {`< Retour`}
          </button>
        </div>
        <img src={logoBlanc} alt="logo-blanc" className="logo" />
        <div className="avatars">
          {photoFamille ? (
            <img src={photoFamille} alt="avatar" className="avatar" />
          ) : (
            <AiOutlineUser className="avatar" />
          )}
          {oneReservation.photoProfil ? (
            <img
              src={oneReservation.photoProfil}
              alt="avatar"
              className="avatar"
            />
          ) : (
            <AiOutlineUser className="avatar" />
          )}
        </div>
        <div className="text">
          <h3 className="red">Dommage !</h3>
          <h4>
            Votre réservation à{" "}
            {crecheNom ||
              (assMatNomUsage
                ? `${assMatPrenom} ${assMatNomUsage}`
                : ` ${assMatPrenom} ${assMatNomNaissance}`)}{" "}
            pour {prenom} {nom} le {jour} de {heureArrivee} à {heureDepart} est
            refusée
          </h4>

          <p>
            N’oubliez pas de compléter votre profil pour avoir plus de chance
            que votre demande soit acceptée la prochaine fois
          </p>
        </div>
        <div className="button-bas">
          <button type="button" className="butt" onClick={() => removeResa()}>
            <Link to="/appli/search">
              Voir d’autres professionnel.les disponibles
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

NotifRejetee.propTypes = {
  setCompo: PropTypes.func.isRequired,
  photoFamille: PropTypes.string.isRequired,
  oneReservation: PropTypes.object.isRequired,
};

export default NotifRejetee;
